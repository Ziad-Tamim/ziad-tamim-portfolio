import { Metadata } from "next"
import EducationSection from "@/components/resume-sections/education-section"
import ExperienceSection from "@/components/resume-sections/experince-section"
import SkillsSection from "@/components/resume-sections/skills-section"
import CertificationAndAwardsSection from "@/components/resume-sections/certification-and-awards-section"
import ProjectsSection from "@/components/resume-sections/projects-section"

export const metadata: Metadata = {
  title: "Resume | Ziad Tamim",
  description: "My professional background, education, skills, and projects.",
}

export default function ResumePage() {
  return (
    <section className="pt-30 pb-16">
      <div className="container max-w-3xl">
        <h1 className="title mb-8">Resume</h1>
        <p className="text-muted-foreground mb-10">
        MSc Artificial Intelligence graduate (First-Class Honors) with a strong focus on computer vision, machine learning, and deep learning. Proficient in Python, TensorFlow, and Keras, with hands-on experience in AI model development, optimization, and computer vision. Passionate about deploying efficient AI solutions for real-world applications.
        </p>

        {/* Education Section */}
        <EducationSection />

        {/* Work Experience Section */}
        <ExperienceSection />


      

        {/* Skills Section */}
        <SkillsSection />

          
        {/* Projects Section */}
        <ProjectsSection />



        {/* Certifications Section */}
        <CertificationAndAwardsSection />


    </div>
  </section>
  )
}
