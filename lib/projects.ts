import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'projects')

export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  title: string
  description: string
  technologies: string[]
  date: string
  image: string
  slug: string
  githubUrl?: string
  liveUrl?: string
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: {
      ...data, slug,
      title: data.title,
      description: data.description,
      technologies: Array.isArray(data.technologies) ? data.technologies : [] ,
      date: data.date,
      image: data.image
    }, content }
  } catch (error) {
    return null
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const projects = files
    .map(file => getProjectMetadata(file))
    .sort((a, b) => {
      if (new Date(a.date ?? '') < new Date(b.date ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return {
  ...(data as object),
  technologies: Array.isArray(data.technologies) ? data.technologies : [],
  slug,
  title: data.title,
  description: data.description,
  date: data.data,
  image: data.image,
}
}
