import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title mb-8'>Let&apos;s talk about your project</h2>
        
        <div className='rounded-lg bg-muted p-8 text-center'>
          <Mail className='mx-auto mb-4 h-12 w-12 text-muted-foreground' />
          <h3 className='mb-2 text-xl font-medium'>Contact via Email</h3>
          <p className='mb-6 text-muted-foreground'>
            For inquiries, please reach out to me directly at:
          </p>
          <Link 
            href='mailto:ziad_tamim@outlook.com'
            className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
          >
            ziad_tamim@outlook.com
          </Link>
        </div>
      </div>
    </section>
  )
}