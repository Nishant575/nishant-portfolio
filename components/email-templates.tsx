export function ContactEmailTemplate({
  name,
  email,
  message
}: ContactEmailTemplateProps) {
  return (
    <div>
      <h2>New Message from {name}</h2>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  )
}

export function NewsletterWelcomeEmail({
  email
}: NewsletterWelcomeEmailProps) {
  return (
    <div>
      <h2>Welcome to My Newsletter!</h2>
      <p>Your email: {email} has been subscribed.</p>
      <p>Thank you for joining!</p>
    </div>
  )
}
