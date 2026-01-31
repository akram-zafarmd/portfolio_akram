import { FiAward } from 'react-icons/fi'

export default function Certifications() {
  const certifications = [
    {
      title: 'Full Stack Software Quality Assurance',
      issuer: 'Professional Certification',
      status: 'Completed',
      icon: '🎓',
    },
    {
      title: 'Road to SDET (Selenium Development Engineer in Test)',
      issuer: 'Advanced QA Automation',
      status: 'Completed',
      icon: '🚀',
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Certifications</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-accent-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">{cert.issuer}</p>
              <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full">
                {cert.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
