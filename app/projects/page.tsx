import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'
import Link from 'next/link'
import Image from 'next/image'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="relative h-48 overflow-hidden">
                            <Image
                              src= {project.image}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
              <div className="glass-card rounded-b-2xl p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
