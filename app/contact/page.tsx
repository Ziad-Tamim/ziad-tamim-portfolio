'use client'

import { Mail, Copy } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const email = 'ziad_tamim@outlook.com'
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    toast.success('Email copied to clipboard')
  }

  return (
    <section className='pb-16 pt-30'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-8'>Get in Touch</h1>
        
        <div className='rounded-lg bg-muted p-8 text-center'>
          <Mail className='mx-auto mb-4 h-12 w-12 text-muted-foreground' />
          <h2 className='mb-2 text-xl font-medium'>Contact via Email</h2>
          <p className='mb-6 text-muted-foreground'>
            For inquiries, please reach out to me directly at:
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={copyToClipboard}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              {email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}