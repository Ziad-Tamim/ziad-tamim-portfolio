import { Calendar } from "lucide-react"


export default function EducationSection() {
  return (
    <section className="mb-10">
    <h2 className="title text-2xl font-semibold mb-6">Education</h2>
    <div className="space-y-8">
    {/* Education Item #1 */}
    <div>
        <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>Sep 2023 - Oct 2024</span>
        </div>
        <h3 className="text-base font-semibold">
        MSc Artificial Intelligence | Queen Mary University of London
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
        Obtained a First-Class (Distinction). Modules: Computer Vision, Machine Learning, Deep Learning, Artificial Intelligence, Applied Statistics, AI Ethics, Regulations & Law, Advanced Robotics, Cognitive Robotics.
        </p>
    </div>

    {/* Education Item #2 */}
    <div>
        <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>Sep 2020 - Jul 2023</span>
        </div>
        <h3 className="text-base font-semibold">
        BSc Robotics Engineering | University of the West of England Bristol
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
        Obtained a Second Class Upper Division (Merit). Focus: Robotics Systems, Electronics, Sensing & Perception, CAD Design, Human-Robot Interaction, Mapping.
        </p>
    </div>
    </div>
    </section>
  );
}







