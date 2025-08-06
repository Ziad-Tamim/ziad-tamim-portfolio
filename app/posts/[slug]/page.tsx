import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import NewsletterForm from '@/components/newsletter-form'
import StructuredData from '@/components/structured-data'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const { title, summary, image, tags, publishedAt } = post.metadata
  const postUrl = `https://www.ziadtamim.com/posts/${slug}`

  return {
    title: `${title} | Ziad Tamim Blog`,
    description: summary,
    keywords: tags?.join(', '),
    authors: [{ name: 'Ziad Tamim' }],
    openGraph: {
      title: title,
      description: summary,
      url: postUrl,
      siteName: 'Ziad Tamim Portfolio',
      images: image ? [
        {
          url: `https://www.ziadtamim.com${image}`,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : [],
      type: 'article',
      publishedTime: publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: summary,
      images: image ? [`https://www.ziadtamim.com${image}`] : [],
    },
    alternates: {
      canonical: postUrl,
    },
  }
}

type PostParams = Promise<{ slug: string }>;

export default async function Post({
  params
}: {
  params: PostParams
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt, tags, summary } = metadata

  const postUrl = `https://www.ziadtamim.com/posts/${slug}`

  return (
    <>
      <StructuredData 
        type="article" 
        data={{
          title,
          summary,
          image,
          publishedAt,
          url: postUrl
        }} 
      />
      <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
          
          {/* Display tags */}
          {tags && tags.length > 0 && (
            <div className='flex flex-wrap gap-2 mt-4'>
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <main className='mt-16'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
    </>
  )
}