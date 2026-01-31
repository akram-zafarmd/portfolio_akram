import { useState } from 'react'
import { FiDownload, FiMail, FiX } from 'react-icons/fi'

export default function Hero() {
  const [imageOpen, setImageOpen] = useState(false)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 px-4">
      <div className="max-w-4xl mx-auto text-center py-20">
        {/* Avatar */}
        <div className="mb-8 animate-fadeIn">
          <img
            src="src\image\dp.png"
            alt="Zafar Muhammed Akram"
            onClick={() => setImageOpen(true)}
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
          />
        </div>

        {/* Image Modal */}
        {imageOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg max-w-2xl w-full">
              <button
                onClick={() => setImageOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
              >
                <FiX size={32} />
              </button>
              <img
                src="src\image\1761076613137.jpg"
                alt="Zafar Muhammed Akram - Full Size"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Name and Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-slideIn">
          Zafar Muhammed Akram
        </h1>
        <h2 className="text-2xl md:text-3xl text-primary-600 font-semibold mb-6">
          Software Quality Assurance Engineer
        </h2>

        {/* Summary */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Dedicated QA professional with expertise in test automation, quality assurance processes, and SDLC. 
          Passionate about ensuring software excellence through comprehensive testing strategies and continuous improvement.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold"
          >
            <FiMail /> Contact Me
          </a>
          <a
            href="https://example.com/cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-300 font-semibold"
          >
            <FiDownload /> Download CV
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <p className="text-gray-500 text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
