import { useState } from 'react'
import { FiDownload, FiMail, FiX } from 'react-icons/fi'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'

export default function Hero() {
  const [imageOpen, setImageOpen] = useState(false)
  
  // Replace this URL with your actual image URL from ImgBB or Imgur
  const profileImageUrl = "https://i.ibb.co.com/cSTSk993/Chat-GPT-Image-Jan-31-2026-10-27-57-PM.png"

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideIn">
            {/* Full Name */}
            <div>
              <p className="text-primary-600 font-semibold text-lg mb-2">Welcome, I'm</p>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 mb-6">
                Zafar Muhammed Akram
              </h2>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Software Quality
                <br />
                <span className="text-gray-900">
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
                  src={"https://i.postimg.cc/MZh3h76v/profile.png"}
                  alt="Zafar Muhammed Akram"
                  onClick={() => setImageOpen(true)}
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #6366f1 0%, #10b981 100%)'
                    e.target.textContent = 'Image not found'
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
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition z-10"
            >
              <FiX size={36} />
            </button>
            <img
              src={profileImageUrl}
              alt="Zafar Muhammed Akram - Full Size"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  )
}
