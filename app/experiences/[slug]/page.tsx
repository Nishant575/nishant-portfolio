import { getExperienceBySlug } from '@/lib/experiences'
import type { ExperienceMetadata } from '@/lib/experiences'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default async function ExperienceDetail({ params }: { params: { slug: string } }) {
  const { title, company, date, description, technologies, content } = await getExperienceBySlug(params.slug)
  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
        <Link
          href='/experiences'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to experiences</span>
        </Link>

      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-xl text-neutral-400 mb-2">{company}</h2>
      <p className="text-neutral-500 text-sm mb-6">{date}</p>
      <p className="text-neutral-300 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies?.map(tech => (
          <span key={tech} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      {/* Render the markdown content if you have any */}
      {content && <MDXRemote source={content} />}
    </article>
  )
}
