import { getProjects } from '@/lib/projects'
import { Badge } from '@/components/ui/badge'

export default async function ProjectsSection() {
  const projects = await getProjects()

  return (
    <section className="mb-10">
    <h2 className="title text-2xl font-semibold mb-6">Projects</h2>
    <div className="space-y-8">
      {projects.map((project) => (
        <div key={project.slug} className="space-y-2">
          <h3 className="text-base font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
    </section>
  )
} 