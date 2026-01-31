import { FiTool, FiCode, FiDatabase, FiGitBranch } from 'react-icons/fi'

export default function Skills() {
  const skillCategories = [
    {
      category: 'QA Tools & Platforms',
      icon: FiTool,
      skills: ['Postman', 'Jira', 'TestRail', 'Manual Testing'],
      color: 'from-blue-500 to-primary-600',
    },
    {
      category: 'Test Automation',
      icon: FiCode,
      skills: ['Playwright', 'Selenium', 'JavaScript', 'Test Scripts'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      category: 'Programming Languages',
      icon: FiCode,
      skills: ['Python', 'Java', 'JavaScript', 'SQL'],
      color: 'from-green-500 to-accent-600',
    },
    {
      category: 'Databases & Query',
      icon: FiDatabase,
      skills: ['SQL', 'Database Testing', 'Query Optimization', 'Data Validation'],
      color: 'from-orange-500 to-red-600',
    },
    {
      category: 'Version Control',
      icon: FiGitBranch,
      skills: ['Git', 'GitHub', 'Branching', 'Collaboration'],
      color: 'from-indigo-500 to-blue-600',
    },
    {
      category: 'Methodologies',
      icon: FiTool,
      skills: ['Agile', 'Scrum', 'SDLC', 'STLC'],
      color: 'from-teal-500 to-accent-600',
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="skill-card bg-white"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-100 hover:text-primary-700 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
