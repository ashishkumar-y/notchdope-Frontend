import React from 'react';

const TermsOfUse = () => {
  return (
    <div className='min-h-screen px-5 md:px-20 lg:px-40 py-10 bg-black text-white'>
      <div className='my-11 px-3 pb-10'>

        <h1 className='font-bold text-xl border-b-2 border-white/30 w-fit mb-7'>
          Terms of Use
        </h1>

        <h2 className='font-bold text-4xl sm:text-5xl lg:text-6xl my-4'>
          Welcome to <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>Notchdop</span>
        </h2>

        <p className='text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl'>
          By accessing or using <strong>Notchdop.com</strong>, you agree to be bound by these Terms of Use. Please read them carefully before using the site.
          <br /><br />
          ✅ <strong>Usage:</strong> You may use this site for personal, non-commercial purposes. Unauthorized use or scraping of our content is strictly prohibited.
          <br /><br />
          ✅ <strong>Downloads:</strong> Our tools are intended for educational and informational use only. You are solely responsible for how you use any downloaded material.
          <br /><br />
          ✅ <strong>Content:</strong> All logos, names, and graphics on this website are owned by their respective owners. We do not host any copyrighted content.
          <br /><br />
          ✅ <strong>Changes:</strong> We reserve the right to update these terms at any time. Continued use of the site means you accept the updated terms.
          <br /><br />
          ✅ <strong>Liability:</strong> We are not liable for any misuse, damage, or loss resulting from the use of our services.
        </p>

        <p className='text-gray-400 text-sm mt-10'>
          If you have any questions about these terms, feel free to <a href="/contact" className="text-blue-400 underline">contact us</a>.
        </p>

      </div>
    </div>
  );
};

export default TermsOfUse;
