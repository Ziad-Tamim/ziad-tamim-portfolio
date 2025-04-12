import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-16 pt-30'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-8'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}