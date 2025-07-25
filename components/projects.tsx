'use client' 
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  date: string
  image: string
  slug: string
  githubUrl?: string
  liveUrl?: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects}: ProjectsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const cardsShown = 2
  const totalSlides = Math.max(0, projects.length - cardsShown + 1)

  const prevSlide = () => setCurrentSlide((i) => Math.max(0, i - 1))
  const nextSlide = () => setCurrentSlide((i) => Math.min(totalSlides - 1, i + 1))

  if (projects.length === 0) {
    return <div className="text-center text-red-500 font-bold">No experience data loaded.</div>
  }

  return (
      <section className="w-full py-10 px-4 sm:px-6 mb-12">
      

      {/* Desktop: Glass card, arrows on edge */}
      <div className="hidden md:block">
        <div className="relative max-w-4xl w-full mx-auto">
          {/* Glass background card */}
          <div className="glass-card rounded-3xl w-full px-8 py-8">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            {/* Scroller with two cards, no partial peeking */}
            <div className="relative overflow-hidden">
              <div
                className="flex gap-x-6 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${(100 / cardsShown) * currentSlide}%)`
                }}
              >
                {projects.map((project) => (
                  <Card key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
          {/* Arrows (always on glass edge) */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full shadow-lg transition-colors"
          >
            <ArrowLeft size={32} className={currentSlide === 0 ? 'opacity-30' : ''} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full shadow-lg transition-colors"
          >
            <ArrowRight size={32} className={currentSlide === totalSlides - 1 ? 'opacity-30' : ''} />
          </button>
        </div>
      </div>

      {/* Mobile: Native swipe scroll */}
      <div className="md:hidden">
       <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className=" overflow-x-auto snap-x snap-mandatory [scrollbar-width:none]">
       
        <div className="flex gap-4 w-max mx-auto py-4">
          {projects.map((project) => (
            <Card key={project.slug} project={project} />
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

// Card component for reusability
function Card({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug ?? ''}`}
      className="snap-center shrink-0 w-[90vw] max-w-sm md:w-[calc((100% - 1.5rem)/2)] glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
    >
     <div className="relative rounded-xl h-48 overflow-hidden">
                <Image
                  src= {project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className=" rounded-b-2xl p-6">
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
  )
}

