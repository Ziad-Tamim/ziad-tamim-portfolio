import { Calendar } from "lucide-react"

export default function ExperienceSection() {
    return (
        <section className="mb-10">
          <h2 className="title text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-8">
            {/* Work Item: Data Manager (Volunteering role presented as work experience) */}
            <div>
              <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Oct 2024 - Feb 2025</span>
              </div>
              <h3 className="text-base font-semibold">
                Data Manager | Welcome to Badminton Newcastle
              </h3>
              <ul className="list-disc       /* Use standard bullets */
              list-outside    /* Place the bullet outside the main text area */
              ml-5           /* Indent the list to give room for bullets */
              space-y-2      /* Spacing between each bullet item */
              text-sm
              text-muted-foreground
              mt-2">
                <li>
                Collected and managed participant data using Google Forms and Excel, handling registration, attendance, and reporting for funding purposes.
                </li>
                <li>
                Utilized Python for data cleaning, statistical analysis, and visualization to track program impact and create clear, data-driven reports.
                </li>
                <li>
                Organized and maintained a structured Google Drive for organizational documents, ensuring data protection and training team members.
                </li>
      </ul>
            </div>
          </div>
        </section>
    );
    }