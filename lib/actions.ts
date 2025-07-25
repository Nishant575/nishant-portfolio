'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof contactSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = contactSchema.safeParse(data)

  if (result.error) {

    const errorObj = result.error.flatten().fieldErrors
    console.log("Error sending email :",result.error)
    return { error: errorObj }
  }

  try {
    console.log("sending email..........")
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ndalvi.cs@gmail.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!data || error) {
      console.log("No data!!!!! or error",error)
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error: String(error) }
  }
}