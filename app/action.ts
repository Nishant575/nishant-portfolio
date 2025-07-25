'use server'

import { Resend } from 'resend'
import type { ContactEmailTemplateProps, NewsletterWelcomeEmailProps } from '@/components/email-templates'
import { contactSchema, subscribeSchema } from '@/lib/schemas'

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Email templates (define these as React components in your codebase!)
type ContactEmailTemplateProps = {
  name: string
  email: string
  message: string
}

type NewsletterWelcomeEmailProps = {
  email: string
}

// Server action for the contact form
export async function sendEmail(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  })

  if (!validatedFields.success) {
    return {
      error: 'Validation failed. Please check your inputs.'
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    await resend.emails.send({
      from: 'Nishant Portfolio <onboarding@resend.dev>', // Change this to your domain after setting up DNS
      to: ['ndalvi.cs@gmail.com'], // Your email (the recipient)
      reply_to: email,
      subject: `New message from ${name}`,
      react: (
        <ContactEmailTemplate
          name={name}
          email={email}
          message={message}
        />
      ),
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })

    return { success: true }
  } catch (error) {
    return { error: 'Failed to send email. Please try again later.' }
  }
}

// Server action for newsletter subscription
export async function subscribe(formData: FormData) {
  const validatedFields = subscribeSchema.safeParse({
    email: formData.get('email')
  })

  if (!validatedFields.success) {
    return {
      error: 'Please enter a valid email address.'
    }
  }

  const { email } = validatedFields.data

  try {
    await resend.emails.send({
      from: 'Nishant Portfolio <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to My Newsletter!',
      react: <NewsletterWelcomeEmail email={email} />,
      text: `Thank you for subscribing to my newsletter!`
    })

    return { success: true, email }
  } catch (error) {
    return { error: 'Subscription failed. Please try again.' }
  }
}
