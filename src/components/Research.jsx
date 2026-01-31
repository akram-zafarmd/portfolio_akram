import { FiFileText } from 'react-icons/fi'

export default function Research() {
  const publications = [
    {
      title: 'Enhanced U-Net Architecture for Nasal Sinus Disease Segmentation',
      venue: 'Springer',
      year: '2026',
      type: 'Conference Paper',
      description: 'Advanced deep learning approach for medical image segmentation',
    },
    {
      title: 'Ensemble Deep Learning for Road Damage Classification',
      venue: 'ICCCNT 2025',
      year: '2025',
      type: 'Conference Paper',
      description: 'Machine learning model for automated road damage detection',
    },
  ]

  return (
    <section id="research" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Research & Publications</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mb-12"></div>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary-100 text-primary-600">
                    <FiFileText size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                      {pub.type}
                    </span>
                    <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">
                      {pub.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-3">{pub.description}</p>
                  <p className="text-primary-600 font-semibold">{pub.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
