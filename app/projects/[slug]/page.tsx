import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import NewsletterForm from '@/components/newsletter-form'
import StructuredData from '@/components/structured-data'
export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const { title, summary, image, tags } = project.metadata
  const projectUrl = `https://www.ziadtamim.com/projects/${slug}`

  return {
    title: `${title} | Ziad Tamim Projects`,
    description: summary,
    keywords: tags?.join(', '),
    authors: [{ name: 'Ziad Tamim' }],
    openGraph: {
      title: title,
      description: summary,
      url: projectUrl,
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
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: summary,
      images: image ? [`https://www.ziadtamim.com${image}`] : [],
    },
    alternates: {
      canonical: projectUrl,
    },
  }
}

type ProjectParams = Promise<{ slug: string }>;

export default async function Project({
  params
}: {
  params: ProjectParams
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt, tags, summary } = metadata

  const projectUrl = `https://www.ziadtamim.com/projects/${slug}`

  return (
    <>
      <StructuredData 
        type="article" 
        data={{
          title,
          summary,
          image,
          publishedAt,
          url: projectUrl
        }} 
      />
      <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
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