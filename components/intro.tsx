import Image from 'next/image'
import authorImage from '@/public/images/author/ed.jpg'
import SocialLinks from './social-links'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-center gap-x-10 gap-y-6 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 text-center md:mt-0 md:text-left'>
        <h1 className='title no-underline'>Hey, I&#39;m Ziad.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m an artificial intelligence graduate based in <strong>Jeddah, Saudi Arabia</strong>. I build <strong>AI powered applications</strong> and share my learning and projects here.
        </p>
        
        {/* Social Links */}
        <div className="mt-4">
          <SocialLinks className="justify-center md:justify-start" />
        </div>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale '
          src={authorImage}
          alt='Ziad Tamim'
          width={200}
          height={200}
          priority
        />
      </div>
      
    </section>
  )
}