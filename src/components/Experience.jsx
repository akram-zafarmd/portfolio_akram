import { FiBriefcase } from 'react-icons/fi'

export default function Experience() {
  const experiences = [
    {
      role: 'Research Assistant',
      company: 'DIU NLP & ML Research Lab',
      period: '2023 - 2026',
      description: [
        'Conducted research on NLP and Machine Learning models',
        'Developed test cases for model evaluation and validation',
        'Collaborated with research team on publications',
        'Quality assurance of research methodologies',
      ],
    },
    {
      role: 'Coordination Officer',
      company: 'DIU Job Utsob 2024',
      period: '2024',
      description: [
        'Coordinated recruitment event for 500+ participants',
        'Managed test execution and quality assurance processes',
        'Ensured smooth event delivery and quality standards',
        'Communicated with stakeholders and managed timelines',
      ],
    },
    {
      role: 'Digital Marketing Specialist',
      company: 'Orbit Graphics Ltd',
      period: '2022 - 2023',
      description: [
        'Managed QA testing for digital marketing campaigns',
        'Tested landing pages and marketing automation workflows',
        'Ensured quality of digital deliverables',
        'Collaborated with design and development teams',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 pb-8 border-l-2 border-primary-200 hover:border-primary-600 transition">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full -translate-x-2.5 border-4 border-white"></div>

              {/* Content */}
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition">
                <div className="flex items-start gap-3 mb-3">
                  <FiBriefcase className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-primary-600 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-8">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-gray-700 flex gap-2">
                      <span className="text-accent-600 font-bold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
