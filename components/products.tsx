import Image from 'next/image'
import Link from 'next/link'

import { ProductMetadata } from '@/lib/products'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export default function Products({
  products
}: {
  products: ProductMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {products.map(product => (
        <li 
          key={product.slug} 
          className='group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md'
        >
          <Link href={`/products/${product.slug}`} className="flex h-full flex-col">
            {/* Image on top with padding and rounded edges */}
            {product.image && (
              <div>
                <div className="relative h-50 w-full overflow-hidden transition-all">
                  <Image
                    src={product.image}
                    alt={product.title || ''}
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
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-semibold tracking-tight'>
                    {product.title}
                  </h2>
                  {product.status && (
                    <Badge 
                      variant={product.status === 'active' ? 'default' : 'secondary'}
                    >
                      {product.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  )}
                </div>
                <p className='line-clamp-2 text-sm text-muted-foreground'>
                  {product.summary}
                </p>
              </div>

              {/* Date */}
              <div className='mt-4'>
                <p className='text-xs text-muted-foreground'>
                  {formatDate(product.publishedAt ?? '')}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
} 