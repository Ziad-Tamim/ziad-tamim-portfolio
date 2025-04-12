import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
    return (
        
        <section className="mb-10">
          <h2 className="title text-2xl font-semibold mb-6">Skills</h2>
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
                <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2">Artificial Intelligence</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Agent modelling</Badge>
                        <Badge variant="outline">Problem formulation</Badge>
                        <Badge variant="outline">Search-based problem solving</Badge>
                        <Badge variant="outline">Logic & inference</Badge>
                        <Badge variant="outline">Knowledge representation</Badge>           
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2">Machine Learning</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Exploratory data analysis</Badge>
                        <Badge variant="outline">Data cleaning and preparation</Badge>
                        <Badge variant="outline">Model selection</Badge>
                        <Badge variant="outline">Model training</Badge>
                        <Badge variant="outline">model optimization</Badge>
                        <Badge variant="outline">Model evaluation</Badge>
                        <Badge variant="outline">Model deployment</Badge>
                        <Badge variant="outline">Pipelines</Badge>
                        <Badge variant="outline">Fine-tuning</Badge>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2">Deep Learning</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Neural networks</Badge>
                        <Badge variant="outline">custom model building</Badge>
                        <Badge variant="outline">Convolutional Neural Networks (CNNs)</Badge>
                        <Badge variant="outline">Natural language processing (NLP)</Badge>
                        <Badge variant="outline">Transfer learning</Badge>
                        <Badge variant="outline">Hyperparameter tuning</Badge>
                        <Badge variant="outline">Model evaluation</Badge>
                        <Badge variant="outline">Model deployment</Badge>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2">Tools and Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">TensorFlow</Badge>
                        <Badge variant="outline">PyTorch</Badge>
                        <Badge variant="outline">Keras</Badge>
                        <Badge variant="outline">Scikit-learn</Badge>
                        <Badge variant="outline">OpenCV</Badge>
                        <Badge variant="outline">Pandas</Badge>
                        <Badge variant="outline">NumPy</Badge>
                        <Badge variant="outline">Matplotlib</Badge>
                        <Badge variant="outline">Seaborn</Badge>
                        <Badge variant="outline">Hugging Face</Badge>
                        <Badge variant="outline">Flask</Badge>
                        <Badge variant="outline">Streamlit</Badge>
                        <Badge variant="outline">Git</Badge>
                        <Badge variant="outline">GitHub</Badge>
                        <Badge variant="outline">Jupyter</Badge>
                        <Badge variant="outline">VS code</Badge>
                        <Badge variant="outline">Google Colab</Badge>
                        <Badge variant="outline">Anaconda</Badge>
                        <Badge variant="outline">Excel</Badge>
                        <Badge variant="outline">Google Sheets</Badge>

                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2">Robotics</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Robot Operating System (ROS)</Badge>
                        <Badge variant="outline">Electronics</Badge>
                        <Badge variant="outline">Sensing</Badge>
                        <Badge variant="outline">Perception</Badge>
                        <Badge variant="outline">Mapping</Badge>
                        <Badge variant="outline">Human-robot interaction</Badge>
                        <Badge variant="outline">CAD design</Badge>
                        <Badge variant="outline">Simulation</Badge>
                        <Badge variant="outline">Control systems</Badge>
                        <Badge variant="outline">Localization</Badge>
                        <Badge variant="outline">Mapping</Badge>
                        <Badge variant="outline">Path planning</Badge>

                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2">Web Development</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">Javascript</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Tailwind</Badge>
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">Shadcn</Badge>
                    </div>
                </div>

                
            </div>
          </div>
        </section>
    );

}