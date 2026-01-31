import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                  <FiMail size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                <a href="mailto:akram.zmaa@gmail.com" className="text-gray-600 hover:text-primary-600 transition">
                  akram.zmaa@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent-100 text-accent-600">
                  <FiPhone size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+8801878942866" className="text-gray-600 hover:text-accent-600 transition">
                  +880 1878 942866
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white transition-all"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-800 hover:text-white transition-all"
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                placeholder="Your message..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
