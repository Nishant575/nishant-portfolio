import React from 'react'

interface SkillCategoryProps {
  title: string
  skills: string[]
}

interface SkillsProps {
  skillCategories: SkillCategoryProps[]
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <section id="skills" className="mb-28 max-w-[64rem] scroll-mt-28 mx-4 sm:mx-auto">
      <div className="glass-card rounded-3xl p-8 animate-fade-in">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
