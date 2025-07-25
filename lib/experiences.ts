import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Define the shape of your experience metadata
export interface ExperienceMetadata {
  title: string
  company: string
  date: string
  technologies?: string[]
  description: string
  slug: string
}

const experiencesDir = path.join(process.cwd(), '/content/experiences')

export async function getExperiences(): Promise<ExperienceMetadata[]> {
  const filenames = fs.readdirSync(experiencesDir)
  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(experiencesDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return {
      ...data,
      slug,
    } as ExperienceMetadata
  })
}

export function getExperienceBySlug(slug: string) {
  const filePath = path.join(experiencesDir, `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { ...(data as ExperienceMetadata), content }
}
