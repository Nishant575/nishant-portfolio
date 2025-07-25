// src/app/page.tsx

import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import Projects from '@/components/projects'
import Contact from '@/components/contact-form'
import { getExperiences } from '@/lib/experiences'
import { getProjects } from '@/lib/projects'
import HorizontalExperienceScroller from '@/components/HorizontalExperienceScroller'


const featuredProjects = await getProjects()

const experiences = await getExperiences()

export default function Home() {
  
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <Intro />

      {/* Section Divider */}
      <SectionDivider />

      {/* Skills Section */}
      <HorizontalExperienceScroller experiences={experiences} />
      {/* Section Divider */}
      <SectionDivider />

      {/* Projects Section */}
      <Projects projects={featuredProjects} />

      {/* Section Divider */}
      <SectionDivider />

      {/* Contact Call-to-Action */}
      <Contact />


    </div>
  )
}
