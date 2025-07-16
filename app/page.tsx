import Intro from '@/components/intro'
import RecentProjects from '@/components/recent-projects'
import RecentProducts from '@/components/recent-products'
import RecentPosts from '@/components/recent-posts'
import NewsletterForm from '@/components/newsletter-form'

export default function Home() {

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentProjects />

        <RecentProducts />

        <RecentPosts />

        <NewsletterForm />

      </div>
    </section>
  )
}
