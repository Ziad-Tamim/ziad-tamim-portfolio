import SocialLinks from './social-links'

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center md:order-2'>
            <SocialLinks />
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()} Ziad Tamim media. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}