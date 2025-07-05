import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Download from './Download/Download'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
          <main className="">
        {/* gradient image  */}
        <img className='absolute top-0 right-0 opacity-60 -z-10' src="/gradient.png" alt="Gradient-img" />

        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#8c52ff] -rotate-[30deg] "></div>

     
            <Hero />
           
           
      </main>
    </div>
  )
}

export default Home
