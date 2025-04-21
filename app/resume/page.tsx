import { Metadata } from "next"
import EducationSection from "@/components/resume-sections/education-section"
import ExperienceSection from "@/components/resume-sections/experince-section"
import SkillsSection from "@/components/resume-sections/skills-section"
import CertificationAndAwardsSection from "@/components/resume-sections/certification-and-awards-section"
import ProjectsSection from "@/components/resume-sections/projects-section"
import ResumeDownloadButton from "@/components/resume-download-button"

export const metadata: Metadata = {
  title: "Resume | Ziad Tamim",
  description: "My professional background, education, skills, and projects.",
}

export default function ResumePage() {
  return (
    <section className="pt-30 pb-16">
      <div className="container max-w-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="title mb-4 sm:mb-0">Resume</h1>
          <ResumeDownloadButton />
        </div>

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
