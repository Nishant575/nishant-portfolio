import Link from 'next/link'
import { getExperiences } from '@/lib/experiences'

const experiences = await getExperiences()

export default function ExperienceList() {
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Professional Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map(exp => (
          <Link key={exp.slug} href={`/experiences/${exp.slug}`} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-1">{exp.title}</h2>
            <p className="text-neutral-400 mb-2 italic">{exp.company}</p>
            <p className="text-neutral-500 mb-3 text-sm">{exp.date}</p>
            <p className="text-neutral-300 text-sm line-clamp-3">{exp.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
