


import React from 'react';
import { IoDiamond } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Spline from '@splinetool/react-spline';
import { servicesHero } from './Data/content';
import buildingWebsite from '../assets/undraw_building-websites_k2zp (1).png';
import buildingPoster from '../assets/undraw_learning-sketchingsh.png';

const Hero = () => {
    return (
        <main className='select-none px-4 sm:px-8 md:px-16 lg:px-20 py-10'>
            {/* Main Hero */}
            <div className='flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
                {/* Left Content */}
                <div className='w-full lg:w-1/2 z-10 mt-20 lg:mt-0'>
                    <div className='relative w-full max-w-xs sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#8c52ff] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full flex items-center justify-center mb-4'>
                        <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base'>
                            <IoDiamond /> INTRODUCING
                        </div>
                    </div>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-6'>
                        PLATFORM <br /> FOR CREATIVITY
                    </h1>
                    <p className='text-sm sm:text-lg tracking-wider text-gray-400 max-w-xl'>
                        Your central platform for Haryanvi media — combining industry news, creator tools, promotional services, and digital growth solutions.
                    </p>
                    <div className='flex mt-8 gap-4 flex-wrap'>
                        <a href='/about' className='border border-[#2a2a2a] gap-2 flex items-center py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg font-semibold transition-all duration-300 tracking-wider hover:bg-[#1a1a1a]'>
                            Documentation <FaExternalLinkAlt />
                        </a>
                        <a href="/contact" className='border bg-gradient-to-r from-[#8c52ff] to-white bg-clip-text text-transparent border-[#2a2a2a] gap-2 flex items-center py-2 sm:py-3 px-7 sm:px-10 rounded-full sm:text-lg font-semibold transition-all duration-300 tracking-wider hover:bg-[#1a1a1a] hover:text-white'>
                            Get Started <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>

                {/* 3D Robot */}
                {/* <div className='w-full lg:w-1/2 mt-10 lg:mt-0 relative h-[400px] sm:h-[500px]'>
                    <Spline scene="https://prod.spline.design/z4u1c6CtwYwPnG2z/scene.splinecode" className='w-full h-full' />
                </div> */}

                <div className='w-full lg:w-1/2 mt-10 lg:mt-0 relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden'>
                    <Spline scene="https://prod.spline.design/z4u1c6CtwYwPnG2z/scene.splinecode" className='w-full h-full scale-[0.9] sm:scale-100 origin-top' />
                </div>

            </div>

            {/* Creative Experts Section */}
            <div className='mt-20 border rounded-3xl p-5 md:p-10 mx-auto select-none'>
                <div className='flex flex-col md:flex-row justify-between mb-4 gap-4'>
                    <h1 className='font-bold text-xl'>Work with Creative experts you can trust.</h1>
                    <p className='border border-[#2a2a2a] py-2 px-4 rounded-full text-sm font-semibold hover:bg-[#1a1a1a]'>600+ satisfied customers</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-4'>
                    <p className='text-gray-400'>We have worked with hundreds of companies to make their creations come alive.</p>
                    <p className='border border-[#2a2a2a] py-2 px-4 rounded-full text-sm font-semibold bg-gray-300 text-black'>5 years of work experience.</p>
                </div>
            </div>

            {/* Our Services Section */}
            <div className='mt-32 flex flex-col lg:flex-row gap-10'>
                <div className='w-full lg:w-1/3'>
                    <h1 className='text-gray-400'>Our Services</h1>
                    <h2 className='font-bold text-3xl my-4'>We provide a vast amount of digital services.</h2>
                    <a className='flex w-fit text-white rounded-md items-center px-5 gap-1 py-2 bg-gradient-to-r from-[#a738f6] to-[#3f7cee]' href="#">See All <IoIosArrowDroprightCircle /> </a>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3'>
                    {servicesHero.map((items, index) => (
                        <div key={index} className='space-y-3'>
                            <div className='flex items-center gap-3'>
                                <span className='text-4xl sm:text-5xl text-[#8c52ff]'>{items.icon}</span>
                                <p className='text-lg sm:text-xl font-bold text-gray-400'>{items.label}</p>
                            </div>
                            <p className='text-sm text-white/80'>{items.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <hr className='my-20 border-gray-700' />

            {/* Website Design Section */}
            <div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 md:p-10 bg-slate-100 text-black rounded-3xl hover:shadow-[0px_0px_350px_0px_gray]'>
                <div>
                    <h1 className='font-bold text-4xl mb-4'>Obtain a website for your <br /> business</h1>
                    <p className='text-gray-500'>Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production.</p>
                    <ul className='my-4 text-gray-500 list-disc list-inside'>
                        <li>ECommerce website</li>
                        <li>One page</li>
                        <li>Portfolio website</li>
                        <li>Artist Website</li>
                    </ul>
                    <a href="#" className='text-blue-400 hover:underline'>Read More.</a>
                </div>
                <div>
                    <img src={buildingWebsite} alt="Building Website" className='w-full h-auto' />
                </div>
            </div>

            {/* Poster Designer Section */}
            <div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 p-5'>
                <div>
                    <h1 className='font-bold text-4xl sm:text-5xl mb-4'>Looking <span className='bg-gradient-to-r from-[#a738f6] to-[#3f7cee] bg-clip-text text-transparent'>for a Poster</span> <br /> designer ?</h1>
                    <p className='my-7 text-gray-400'>We have done almost 3500+ album Cover/song poster design. Creative Song Poster is the conventional medium to convey information to the target audience in a unique way.</p>
                    <a href="/contact" className='bg-gradient-to-r from-[#a738f6] to-[#3f7cee] px-5 py-2 rounded text-white font-semibold'>LET'S TALK</a>
                </div>
                <div>
                    <img src={buildingPoster} alt="Poster Design" className='w-full h-auto rounded-xl' />
                </div>
            </div>
        </main>
    );
};

export default Hero;