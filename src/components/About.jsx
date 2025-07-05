import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const About = () => {
  return (
    <div className='min-h-screen px-5 md:px-20 lg:px-40 py-10 bg-black text-white'>

      <div className='my-11 px-3 pb-10'>
        
        <h1 className='font-bold text-xl border-b-2 border-white/30 w-fit mb-7'>
          About Us
        </h1>

        <div>
          <h2 className='font-bold text-4xl sm:text-5xl lg:text-6xl my-4'>
            Who <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>We</span> Are
          </h2>

          <p className='text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl'>
            At <strong>Notchdop</strong>, we are redefining the digital experience for the Haryanvi industry. Born from a passion for technology, culture, and creativity, Notchdop is your one-stop platform for everything from entertainment news and artist insights to digital tools, video downloads, and promotional services.
            <br /><br />
            We're not just building a website — we're building a movement for artists, fans, and creators to connect, grow, and thrive in the digital space.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row mt-10 gap-4'>
          <span className='border border-[#2a2a2a] gap-2 flex justify-center items-center py-2 px-4 sm:px-5 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 tracking-wider hover:bg-[#1a1a1a]'>
            600+ Satisfied Customers
          </span>

          <a
            href="/contact"
            className='border border-[#2a2a2a] gap-2 flex justify-center items-center py-2 px-6 sm:px-10 bg-gradient-to-r from-[#a738f6] to-[#3f7cee] text-white rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 hover:bg-[#1a1a1a]'
            aria-label="Get started with Notchdop"
          >
            Get Started <FaExternalLinkAlt className='ml-1' />
          </a>
        </div>

      </div>

    </div>
  )
}

export default About;
