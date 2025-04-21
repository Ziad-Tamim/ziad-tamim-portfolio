'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { NewsletterFormSchema } from '@/lib/schemas'

type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    
    console.log('Subscribing to newsletter...')
    console.log('API Key exists:', !!process.env.RESEND_API_KEY)
    console.log('Audience ID exists:', !!process.env.RESEND_AUDIENCE_ID)
    
    if (!process.env.RESEND_AUDIENCE_ID) {
      throw new Error('Resend Audience ID is not configured')
    }
    
    const { data: responseData, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (error) {
      console.error('Resend API error:', error)
      throw new Error(`Failed to subscribe: ${error.message}`)
    }

    console.log('Subscription successful:', responseData)
    
    try {
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'Newsletter <info@ziadtamim.com>',
        to: [email],
        subject: 'Welcome to Ziad Tamim\'s Newsletter',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333; font-size: 24px;">Thanks for subscribing!</h1>
            <p>Hi there,</p>
            <p>Thank you for subscribing to my newsletter. I'll be sharing updates on my latest projects, articles, and thoughts on AI, development, and technology.</p>
            <p>You'll start receiving updates soon!</p>
            <p>Best regards,<br />Ziad Tamim</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #666; font-size: 12px;">If you didn't subscribe to this newsletter, please ignore this email.</p>
          </div>
        `,
      });

      if (emailError) {
        console.error('Welcome email error:', emailError);
      } else {
        console.log('Welcome email sent:', emailData);
      }
    } catch (emailSendError) {
      console.error('Error sending welcome email:', emailSendError);
    }
    
    return { success: true, data: responseData }
  } catch (error) {
    console.error('Subscription error:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error occurred' }
  }
}