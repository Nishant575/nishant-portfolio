import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download, MapPin } from 'lucide-react'

export default function Intro() {
  return (
    <section className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="glass-card rounded-3xl p-8 md:p-12 mb-8 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 glass-button px-4 py-2 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for opportunities
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hey, I'm{' '}
              <span className="text-gradient">Nishant Dalvi</span>
              <span className="wave">👋</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed">
              Software Developer & AI Engineer crafting intelligent solutions 
              with modern web technologies and machine learning.
            </p>

            {/* Location & Status */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin size={16} />
                <span>Chicago, IL</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-neutral-500 rounded-full"></div>
              <div className="text-neutral-400">
                Masters in Computer Science at Illinois Institute of Technology
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="glass-button px-8 py-4 rounded-2xl font-medium inline-flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 group"
              >
                Get in touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/projects"
                className="px-8 py-4 rounded-2xl font-medium inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-all duration-300 group"
              >
                View projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 rounded-2xl font-medium inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-glass-shine"></div>
              
              {/* Image container */}
              <div className="relative glass-card p-2 rounded-full">
                <Image
                  alt="Nishant Dalvi"
                  className="rounded-full object-cover w-full h-full"
                  src="/images/authors/Nishant.jpg"
                  width={320}
                  height={320}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
        <div className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
          <div className="text-3xl font-bold text-gradient mb-2">15+</div>
          <div className="text-neutral-300">Projects Completed</div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
          <div className="text-3xl font-bold text-gradient mb-2">1st</div>
          <div className="text-neutral-300">Place AWS Jam</div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
          <div className="text-3xl font-bold text-gradient mb-2">3+</div>
          <div className="text-neutral-300">Years Experience</div>
        </div>
      </div>*/}
    </section>
  )
}