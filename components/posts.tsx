import Link from 'next/link'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-4'
          >
            <div>
              <p className='text-lg font-semibold group-hover:text-primary transition-colors'>{post.title}</p>
              <p className='mt-2 line-clamp-2 text-sm text-muted-foreground'>
                {post.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              {post.tags && post.tags.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
              {post.publishedAt && (
                <p className='text-xs text-muted-foreground/70 whitespace-nowrap ml-auto'>
                  {formatDate(post.publishedAt)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}