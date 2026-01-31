export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mb-8"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I am a Software Quality Assurance Engineer with a passion for ensuring software excellence through meticulous 
              testing, process optimization, and continuous improvement. My expertise spans the entire Software Development Life Cycle (SDLC) 
              and Software Testing Life Cycle (STLC), with a strong focus on Agile methodologies.
            </p>
            <p>
              My QA mindset is built on a foundation of:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold text-lg">✓</span>
                <span>Comprehensive Test Planning & Strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold text-lg">✓</span>
                <span>Test Automation & Regression Testing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold text-lg">✓</span>
                <span>Defect Management & Quality Metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold text-lg">✓</span>
                <span>Cross-functional Collaboration & Communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold text-lg">✓</span>
                <span>Agile & Scrum Best Practices</span>
              </li>
            </ul>
          </div>

          {/* Stats Card */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg border border-primary-200">
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-lg border border-accent-200">
              <div className="text-3xl font-bold text-accent-600 mb-2">10+</div>
              <p className="text-gray-700 font-medium">Projects Tested</p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg border border-primary-200">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <p className="text-gray-700 font-medium">Tools Mastered</p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-lg border border-accent-200">
              <div className="text-3xl font-bold text-accent-600 mb-2">2</div>
              <p className="text-gray-700 font-medium">Publications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
