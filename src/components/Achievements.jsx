import { FiTrendingUp, FiStar } from 'react-icons/fi'

export default function Achievements() {
  const achievements = [
    {
      title: '5th Position',
      description: 'Intra-University Crack Dataset Contest',
      year: 'CD-2024',
      icon: FiTrendingUp,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: '7th Position',
      description: 'DATATHON FALL 2024',
      year: '2024',
      icon: FiStar,
      color: 'from-purple-400 to-pink-500',
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Achievements & Awards</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 border-2 border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Background accent */}
                <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full group-hover:opacity-20 transition`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${achievement.color} text-white mb-4`}>
                    <Icon size={32} />
                  </div>
                  <p className="text-gray-500 text-sm font-semibold mb-2">{achievement.year}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-700 font-medium">{achievement.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
