import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-2">AKRAM</h3>
            <p className="text-sm">
              QA Engineer | Quality Advocate | Continuous Learner
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition">About</a></li>
              <li><a href="#skills" className="hover:text-primary-400 transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Zafar Muhammed Akram. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition"
          >
            <FiArrowUp size={18} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
