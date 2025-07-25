// src/components/contact-form.tsx
'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { sendEmail } from '@/lib/actions'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setStatus('idle')
    const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
    };
    try {
      const result = await sendEmail(data)
      
      if (result.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
    
    setIsSubmitting(false)
  }

  return (
    <div className="glass-card rounded-3xl p-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Let&apos;s work together</h2>
        <p className="text-neutral-300">
          Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you soon.
        </p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 glass-card rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all outline-none placeholder:text-neutral-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 glass-card rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all outline-none placeholder:text-neutral-500"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            className="w-full px-4 py-3 glass-card rounded-xl border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all outline-none resize-none placeholder:text-neutral-500"
            placeholder="Tell me about your project..."
          />
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl p-4">
            <CheckCircle size={20} />
            <span>Message sent successfully! I&apos;ll get back to you soon.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl p-4">
            <AlertCircle size={20} />
            <span>Failed to send message. Please try again.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="glass-button w-full py-4 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
