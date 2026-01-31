import { FiAward } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Education</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mb-12"></div>

        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary-600">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                <FiAward size={24} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                B.Sc. in Computer Science and Engineering
              </h3>
              <p className="text-lg text-primary-600 font-semibold mb-3">
                Daffodil International University (DIU)
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="text-sm text-gray-600">CGPA</p>
                  <p className="text-3xl font-bold text-accent-600">3.28</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="text-xl font-semibold text-gray-900">Completed</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Specialized in Software Engineering with focus on Quality Assurance, Testing methodologies, and Software Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
