import Intro from '@/components/intro'

import RecentPosts from '@/components/recent-posts'


export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />

      </div>
    </section>
  )
}