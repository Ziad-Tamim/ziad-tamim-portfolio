'use client'

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { usePathname } from 'next/navigation'

// NavLink component for consistent styling and active state handling
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Function to check if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <Link 
      href={href} 
      className={`transition-colors hover:text-foreground ${
        isActive(href) 
          ? 'font-bold text-foreground underline decoration-primary decoration-2 underline-offset-4' 
          : ''
      }`}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className="font-serif text-2xl font-bold">
            Z|T
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li>
            <NavLink href='/posts'>Posts</NavLink>
          </li>
          <li>
            <NavLink href='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink href='/products'>Products</NavLink>
          </li>
          <li>
            <NavLink href='/resume'>Resume</NavLink>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}