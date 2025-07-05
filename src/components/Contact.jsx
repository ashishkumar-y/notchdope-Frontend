import React from 'react'
import { FaExternalLinkAlt, FaLocationArrow, FaMapMarked, FaPhone, FaPhoneSlash, FaSearchLocation } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'


const Contact = () => {

    return (
        <div className='min-h-screen px-5 md:px-20 lg:px-40 py-10 bg-black text-white'>

            <div className='my-11 px-3 pb-10'>

                <h1 className='font-bold text-xl border-b-2 border-white/30 w-fit mb-7'>
                    Contact
                </h1>

                <div>
                    <h2 className='font-bold text-4xl sm:text-5xl lg:text-6xl my-4'>
                        How can  <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>we help</span>  you?
                    </h2>

                    <p className='text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl'>
                    <strong>Email: </strong>     <a href="mailto:notchdope01@gmail.com" className="text-blue-300 hover:underline">
                            notchdope01@gmail.com
                        </a> <br />
                        <strong>Ph: </strong><a className='text-blue-300' href="tel:+917488708149"> +91 7488708149</a> <br />
                        <strong>insta: </strong> <a className='text-blue-300' href="https://www.instagram.com/notchdope">https://www.instagram.com/notchdope</a>
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row mt-10 gap-4'>
                    <span className='border cursor-pointer border-[#2a2a2a] gap-2 flex justify-center items-center py-2 px-4 sm:px-5 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 tracking-wider hover:bg-[#1a1a1a]'>
                        HARYANA, INDIA      <HiOutlineLocationMarker />
                    </span>

                    <a
                        href="https://wa.me/917488708149" target="_blank"
                        className='border border-[#2a2a2a] gap-2 flex justify-center items-center py-2 px-6 sm:px-10 bg-gradient-to-r from-[#a738f6] to-[#3f7cee] text-white rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 hover:bg-[#1a1a1a]'
                        aria-label="Get started with Notchdop"
                    >
                        WHATSAPP <FaPhone className='ml-1' />
                    </a>
                </div>

                <div className='flex justify-center mt-28 items-center flex-col'>
                    <h2 className='font-bold text-4xl sm:text-5xl lg:text-6xl my-4'>
                       Let’s  <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'> Talk</span>
                    </h2>

                    <p>Fill in this form or send us an e-mail with your inquiry.</p>

                </div>
            </div>

        </div>
    )

}

export default Contact
