interface StructuredDataProps {
  type: 'article' | 'person' | 'website'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData

  switch (type) {
    case 'article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.summary,
        image: data.image ? `https://www.ziadtamim.com${data.image}` : undefined,
        author: {
          '@type': 'Person',
          name: 'Ziad Tamim',
          url: 'https://www.ziadtamim.com',
        },
        publisher: {
          '@type': 'Person',
          name: 'Ziad Tamim',
          url: 'https://www.ziadtamim.com',
        },
        datePublished: data.publishedAt,
        dateModified: data.publishedAt,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
      }
      break

    case 'person':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ziad Tamim',
        jobTitle: 'AI Engineer & Machine Learning Developer',
        description: 'AI Engineer specializing in machine learning, deep learning, and SaaS development',
        url: 'https://www.ziadtamim.com',
        sameAs: [
          'https://github.com/Ziad-Tamim',
          'https://linkedin.com/in/ziad-tamim',
        ],
        knowsAbout: [
          'Machine Learning',
          'Deep Learning',
          'Artificial Intelligence',
          'Python',
          'React',
          'Next.js',
          'Data Science',
          'Robotics'
        ],
      }
      break

    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Website',
        name: 'Ziad Tamim Portfolio',
        description: 'AI projects and technical insights by Ziad Tamim',
        url: 'https://www.ziadtamim.com',
        author: {
          '@type': 'Person',
          name: 'Ziad Tamim',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.ziadtamim.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }
      break
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}