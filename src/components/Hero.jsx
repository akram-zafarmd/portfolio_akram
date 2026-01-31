import { useState } from 'react'
import { FiDownload, FiMail, FiX } from 'react-icons/fi'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'

export default function Hero() {
  const [imageOpen, setImageOpen] = useState(false)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideIn">
            {/* Headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Software Quality
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Assurance Engineer
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Ensuring software excellence through comprehensive testing and automation strategies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold"
              >
                <FiMail size={20} /> Get in touch
              </a>
              <a
                href="https://example.com/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 hover:shadow-lg transition-all font-semibold border-2 border-gray-200"
              >
                <FiDownload size={20} /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition text-2xl"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition text-2xl"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition text-2xl"
              >
                <FiInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition text-2xl"
              >
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Right Profile Card */}
          <div className="flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative w-full max-w-md">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl blur-2xl opacity-30"></div>

              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <img
                  src="/profile.jpg"
                  alt="Zafar Muhammed Akram"
                  onClick={() => setImageOpen(true)}
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%236366f1' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='80' fill='white' text-anchor='middle' dy='.3em' font-weight='bold'%3EZA%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {imageOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setImageOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImageOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
              <FiX size={36} />
            </button>
            <img
              src="/profile.jpg"
              alt="Zafar Muhammed Akram - Full Size"
              className="w-full h-auto"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%236366f1' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='80' fill='white' text-anchor='middle' dy='.3em' font-weight='bold'%3EZA%3C/text%3E%3C/svg%3E"
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
