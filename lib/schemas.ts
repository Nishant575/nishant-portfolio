import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
})