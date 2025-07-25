// src/components/project-card.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, Calendar } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  slug: string
  date: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  slug,
  date,
  technologies,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-2 rounded-lg hover:scale-110 transition-transform"
            >
              <Github size={16} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-2 rounded-lg hover:scale-110 transition-transform"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
          <Calendar size={14} />
          <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
        </div>

        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-gradient transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>

        <p className="text-neutral-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
