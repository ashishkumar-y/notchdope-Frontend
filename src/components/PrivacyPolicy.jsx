import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='min-h-screen px-5 md:px-20 lg:px-40 py-10 bg-black text-white'>
      <div className='my-11 px-3 pb-10'>

        <h1 className='font-bold text-xl border-b-2 border-white/30 w-fit mb-7'>
          Privacy Policy
        </h1>

        <h2 className='font-bold text-4xl sm:text-5xl lg:text-6xl my-4'>
          Your <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>Privacy</span> Matters
        </h2>

        <p className='text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl'>
          At <strong>Notchdope</strong>, your privacy is a top priority. We are committed to safeguarding your personal information and being transparent about how we collect and use it.
          <br /><br />
          We only collect basic usage data, such as pages visited and download actions, solely for improving our platform. We do not sell or share your information with third parties.
          <br /><br />
          Our site may use cookies for analytics and performance. By using Notchdop, you agree to our use of cookies.
          <br /><br />
          If you submit any form (e.g., contact or promotion), we store the information securely and only use it to respond to your request.
        </p>

        <p className='text-gray-400 text-sm mt-10'>
          For any questions regarding your data, feel free to reach us at <a href="/contact" className="text-blue-400 underline">our contact page</a>.
        </p>

      </div>
    </div>
  )
}

export default PrivacyPolicy;
