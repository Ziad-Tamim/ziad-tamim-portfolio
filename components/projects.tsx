import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li 
          key={project.slug} 
          className='group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md'
        >
          <Link href={`/projects/${project.slug}`} className="flex h-full flex-col">
            {/* Image on top with padding and rounded edges */}
            {project.image && (
              <div>
                <div className="relative h-50 w-full overflow-hidden transition-all">
                  <Image
                    src={project.image}
                    alt={project.title || ''}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            )}

            {/* Content area */}
            <div className='flex h-full flex-col justify-between p-4'>
              {/* Title and summary */}
              <div className='space-y-2'>
                <h2 className='text-xl font-semibold tracking-tight'>
                  {project.title}
                </h2>
                <p className='line-clamp-2 text-sm text-muted-foreground'>
                  {project.summary}
                </p>
              </div>

              {/* Tags and date */}
              <div className='mt-4 flex flex-col gap-3'>
                {project.tags && project.tags.length > 0 && (
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                <p className='text-xs text-muted-foreground/70'>
                  {formatDate(project.publishedAt ?? '')}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
