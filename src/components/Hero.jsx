


// import React from 'react';
// import { IoDiamond } from "react-icons/io5";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { IoIosArrowDroprightCircle } from "react-icons/io";
// import Spline from '@splinetool/react-spline';
// import { servicesHero } from './Data/content';
// import buildingWebsite from '../assets/undraw_building-websites_k2zp (1).png';
// import buildingPoster from '../assets/undraw_learning-sketchingsh.png';

// const Hero = () => {
//     return (
//         <main className='select-none px-4 sm:px-8 md:px-16 lg:px-20 py-10'>
//             {/* Main Hero */}
//             <div className='flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
//                 {/* Left Content */}
//                 <div className='w-full lg:w-1/2 z-10 mt-20 lg:mt-0'>
//                     <div className='relative w-full max-w-xs sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#8c52ff] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full flex items-center justify-center mb-4'>
//                         <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base'>
//                             <IoDiamond /> INTRODUCING
//                         </div>
//                     </div>
//                     <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-6'>
//                         PLATFORM <br /> FOR CREATIVITY
//                     </h1>
//                     <p className='text-sm sm:text-lg tracking-wider text-gray-400 max-w-xl'>
//                         Your central platform for Haryanvi media — combining industry news, creator tools, promotional services, and digital growth solutions.
//                     </p>
//                     <div className='flex mt-8 gap-4 flex-wrap'>
//                         <a href='/about' className='border border-[#2a2a2a] gap-2 flex items-center py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg font-semibold transition-all duration-300 tracking-wider hover:bg-[#1a1a1a]'>
//                             Documentation <FaExternalLinkAlt />
//                         </a>
//                         <a href="/contact" className='border bg-gradient-to-r from-[#8c52ff] to-white bg-clip-text text-transparent border-[#2a2a2a] gap-2 flex items-center py-2 sm:py-3 px-7 sm:px-10 rounded-full sm:text-lg font-semibold transition-all duration-300 tracking-wider hover:bg-[#1a1a1a] hover:text-white'>
//                             Get Started <FaExternalLinkAlt />
//                         </a>
//                     </div>
//                 </div>

//                 {/* 3D Robot */}
//                 {/* <div className='w-full lg:w-1/2 mt-10 lg:mt-0 relative h-[400px] sm:h-[500px]'>
//                     <Spline scene="https://prod.spline.design/z4u1c6CtwYwPnG2z/scene.splinecode" className='w-full h-full' />
//                 </div> */}

//                 <div className='w-full lg:w-1/2 mt-10 lg:mt-0 relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden'>
//                     <Spline scene="https://prod.spline.design/z4u1c6CtwYwPnG2z/scene.splinecode" className='w-full h-full scale-[0.9] sm:scale-100 origin-top' />
//                 </div>

//             </div>

//             {/* Creative Experts Section */}
//             <div className='mt-20 border rounded-3xl p-5 md:p-10 mx-auto select-none'>
//                 <div className='flex flex-col md:flex-row justify-between mb-4 gap-4'>
//                     <h1 className='font-bold text-xl'>Work with Creative experts you can trust.</h1>
//                     <p className='border border-[#2a2a2a] py-2 px-4 rounded-full text-sm font-semibold hover:bg-[#1a1a1a]'>600+ satisfied customers</p>
//                 </div>
//                 <div className='flex flex-col md:flex-row justify-between gap-4'>
//                     <p className='text-gray-400'>We have worked with hundreds of companies to make their creations come alive.</p>
//                     <p className='border border-[#2a2a2a] py-2 px-4 rounded-full text-sm font-semibold bg-gray-300 text-black'>5 years of work experience.</p>
//                 </div>
//             </div>

//             {/* Our Services Section */}
//             <div className='mt-32 flex flex-col lg:flex-row gap-10'>
//                 <div className='w-full lg:w-1/3'>
//                     <h1 className='text-gray-400'>Our Services</h1>
//                     <h2 className='font-bold text-3xl my-4'>We provide a vast amount of digital services.</h2>
//                     <a className='flex w-fit text-white rounded-md items-center px-5 gap-1 py-2 bg-gradient-to-r from-[#a738f6] to-[#3f7cee]' href="#">See All <IoIosArrowDroprightCircle /> </a>
//                 </div>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3'>
//                     {servicesHero.map((items, index) => (
//                         <div key={index} className='space-y-3'>
//                             <div className='flex items-center gap-3'>
//                                 <span className='text-4xl sm:text-5xl text-[#8c52ff]'>{items.icon}</span>
//                                 <p className='text-lg sm:text-xl font-bold text-gray-400'>{items.label}</p>
//                             </div>
//                             <p className='text-sm text-white/80'>{items.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <hr className='my-20 border-gray-700' />

//             {/* Website Design Section */}
//             <div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 md:p-10 bg-slate-100 text-black rounded-3xl hover:shadow-[0px_0px_350px_0px_gray]'>
//                 <div>
//                     <h1 className='font-bold text-4xl mb-4'>Obtain a website for your <br /> business</h1>
//                     <p className='text-gray-500'>Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production.</p>
//                     <ul className='my-4 text-gray-500 list-disc list-inside'>
//                         <li>ECommerce website</li>
//                         <li>One page</li>
//                         <li>Portfolio website</li>
//                         <li>Artist Website</li>
//                     </ul>
//                     <a href="#" className='text-blue-400 hover:underline'>Read More.</a>
//                 </div>
//                 <div>
//                     <img src={buildingWebsite} alt="Building Website" className='w-full h-auto' />
//                 </div>
//             </div>

//             {/* Poster Designer Section */}
//             <div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 p-5'>
//                 <div>
//                     <h1 className='font-bold text-4xl sm:text-5xl mb-4'>Looking <span className='bg-gradient-to-r from-[#a738f6] to-[#3f7cee] bg-clip-text text-transparent'>for a Poster</span> <br /> designer ?</h1>
//                     <p className='my-7 text-gray-400'>We have done almost 3500+ album Cover/song poster design. Creative Song Poster is the conventional medium to convey information to the target audience in a unique way.</p>
//                     <a href="/contact" className='bg-gradient-to-r from-[#a738f6] to-[#3f7cee] px-5 py-2 rounded text-white font-semibold'>LET'S TALK</a>
//                 </div>
//                 <div>
//                     <img src={buildingPoster} alt="Poster Design" className='w-full h-auto rounded-xl' />
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Hero;






import React from 'react';
import { IoDiamond } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Spline from '@splinetool/react-spline';
import { servicesHero } from './Data/content';
import buildingWebsite from '../assets/undraw_building-websites_k2zp (1).png';
import buildingPoster from '../assets/undraw_learning-sketchingsh.png';
import ContactForm from './ContactForm';




const Hero = () => {
    return (
      <main className="select-none px-4 sm:px-8 md:px-16 lg:px-20 py-10 text-white">
  {/* Hero Section */}
  {/* <section className="flex flex-col-reverse lg:flex-row justify-between items-center min-h-[80vh] gap-10">
   */}
  <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 pt-10 lg:pt-0 min-h-[60vh] lg:min-h-[80vh]">
  
    {/* Left */}
    <div className="lg:w-1/2 mt-10 lg:mt-0 space-y-6 z-10">
      <div className="relative w-fit px-6 py-2 rounded-full bg-gradient-to-r from-[#656565] to-[#8c52ff] shadow-[0_0_20px_rgba(140,82,255,0.6)]">
        <span className="text-sm sm:text-base text-white flex items-center gap-2 font-semibold">
          <IoDiamond /> INTRODUCING
        </span>
      </div>
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
        PLATFORM <br /> FOR CREATIVITY
      </h1>
      
      <p className="text-gray-300 text-sm sm:text-lg max-w-xl tracking-wider">
        Your central platform for Haryanvi media — combining industry news, creator tools, promotional services, and digital growth solutions.
      </p>
      
      <div className="flex flex-wrap gap-4 mt-8">
        <a href="/about" className="py-3 px-5 border border-gray-700 rounded-full flex items-center gap-2 hover:bg-[#1a1a1a] transition-all">
          Documentation <FaExternalLinkAlt />
        </a>
        <a href="/contact" className="py-3 px-7 border border-gray-700 bg-gradient-to-r from-[#8c52ff] to-white bg-clip-text text-transparent rounded-full flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-white transition-all font-semibold">
          Get Started <FaExternalLinkAlt />
        </a>
      </div>
    </div>

    {/* Right - Spline or Illustration */}
  <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0 relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
  <Spline scene="https://prod.spline.design/z4u1c6CtwYwPnG2z/scene.splinecode" className="w-full h-full scale-[0.9] sm:scale-100 origin-top" />
</div>
  </section>

  {/* Trusted Section */}
  <section className="mt-24 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-lg shadow-[0_10px_60px_rgba(140,82,255,0.2)]">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <h2 className="text-xl font-bold">Work with Creative experts you can trust.</h2>
      <span className="px-5 py-2 border border-white rounded-full text-sm font-medium text-white/80 hover:bg-white/10 transition-all">
        600+ satisfied customers
      </span>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 gap-6">
      <p className="text-gray-400">We have worked with hundreds of companies to make their creations come alive.</p>
      <span className="px-5 py-2 bg-white text-black rounded-full font-medium text-sm">
        5 years of work experience.
      </span>
    </div>
  </section>

  {/* Services Section */}
  <section className="mt-32 flex flex-col lg:flex-row gap-10">
    <div className="lg:w-1/3">
      <p className="text-gray-400">Our Services</p>
      <h3 className="text-3xl font-bold my-4">We provide a vast amount of digital services.</h3>
      <a className="inline-flex items-center gap-1 bg-gradient-to-r from-[#a738f6] to-[#3f7cee] px-5 py-2 rounded text-white font-semibold shadow-md" href="#">
        See All <IoIosArrowDroprightCircle />
      </a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3">
      {servicesHero.map((item, index) => (
        <div key={index} className="space-y-2 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center gap-3 text-[#8c52ff]">
            <span className="text-4xl">{item.icon}</span>
            <h4 className="text-lg font-bold text-gray-200">{item.label}</h4>
          </div>
          <p className="text-sm text-white/80">{item.text}</p>
        </div>
      ))}
    </div>
  </section>

  <hr className="my-20 border-gray-700" />

  {/* Website Design */}
  <section className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-slate-100 text-black rounded-3xl p-5 md:p-10 transition-all">
    <div>
      <h2 className="text-4xl font-bold mb-4">Obtain a website for your <br /> business</h2>
      <p className="text-gray-600">Web design includes webpage layout, content production and more.</p>
      <ul className="my-4 text-gray-600 list-disc list-inside">
        <li>ECommerce website</li>
        <li>One page</li>
        <li>Portfolio website</li>
        <li>Artist Website</li>
      </ul>
      <a href="#" className="text-blue-500 hover:underline">Read More.</a>
    </div>
    <div>
      <img src={buildingWebsite} alt="Building Website Illustration" loading="lazy" className="w-full h-auto rounded-xl" />
    </div>
  </section>

  {/* Poster Designer */}
  <section className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 p-5">
    <div>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">Looking <span className="bg-gradient-to-r from-[#a738f6] to-[#3f7cee] bg-clip-text text-transparent">for a Poster</span><br /> designer?</h2>
      <p className="my-7 text-gray-400">We’ve designed 3500+ song/album posters. A strong poster conveys key details quickly and clearly.</p>
      <a href="/contact" className="bg-gradient-to-r from-[#a738f6] to-[#3f7cee] px-5 py-2 rounded text-white font-semibold shadow-lg hover:scale-[1.02] transition-all">LET'S TALK</a>
    </div>
    <div>
      <img src={buildingPoster} alt="Poster Design Illustration" loading="lazy" className="w-full h-auto rounded-xl" />
    </div>
  </section>




{/* contact form  */}


<ContactForm/>

</main>

    );
};

export default Hero;
