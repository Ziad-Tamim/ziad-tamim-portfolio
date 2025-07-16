import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProductBySlug, getProducts } from '@/lib/products'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'

export async function generateStaticParams() {
  const products = await getProducts()
  const slugs = products.map(product => ({ slug: product.slug }))

  return slugs
}

type ProductParams = Promise<{ slug: string }>;

export default async function Product({
  params
}: {
  params: ProductParams
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const { metadata, content } = product
  const { title, image, publishedAt, status } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/products'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to products</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              fill
              className='object-cover object-center'
            />
          </div>
        )}

        <header>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='title'>{title}</h1>
            {status && (
              <Badge 
                variant={status === 'active' ? 'default' : 'secondary'}
              >
                {status === 'active' ? 'Active' : 'Inactive'}
              </Badge>
            )}
          </div>

          <p className='text-sm text-muted-foreground mb-6'>
            {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose prose-neutral dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
} 