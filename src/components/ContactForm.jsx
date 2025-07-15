import React, { useState } from 'react';
import Select from 'react-select';
import emailjs from '@emailjs/browser';
import countryTelephoneData from 'country-telephone-data';

// Safely get allCountries
const allCountries = countryTelephoneData.allCountries || [];

const countryOptions = allCountries.map((country) => ({
  label: `${country[0]} (+${country[2]})`,
  value: `+${country[2]}`,
}));

const ContactForm = () => {
  const [selectedCode, setSelectedCode] = useState({
    label: 'India (+91)',
    value: '+91',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    reason: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: `${selectedCode.value} ${formData.phone}`,
      instagram: formData.instagram,
      reason: formData.reason,
      title: 'New Contact Form Submission',
    };

    emailjs
      .send(
        'service_45swyey',
        'template_7fohxs8',
        templateParams,
        'h1-o06-OFyH5XeAhq'
      )
      .then(() => {
        alert('✅ Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          instagram: '',
          reason: '',
        });
      })
      .catch((error) => {
        alert('❌ Failed to send message. Please try again.');
        console.error(error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="my-20 px-4 sm:px-8 md:px-16 lg:px-20 py-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(140,82,255,0.2)] text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Let's Connect</h2>
      <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
        Have a project in mind or need a promotion? Fill out the form and we'll reach out to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            required
            disabled={isSubmitting}
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8c52ff] text-white"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            required
            disabled={isSubmitting}
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8c52ff] text-white"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="phone" className="mb-2 font-medium">Phone Number</label>
          <div className="flex gap-2">
            <div className="w-36">
              <Select
                options={countryOptions}
                value={selectedCode}
                onChange={setSelectedCode}
                isDisabled={isSubmitting}
                className="text-black text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    borderRadius: '0.5rem',
                    padding: '0.2rem',
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                    color: '#000',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: '#fff',
                  }),
                }}
              />
            </div>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone number"
              required
              disabled={isSubmitting}
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8c52ff] text-white"
            />
          </div>
        </div>

        {/* Instagram */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="instagram" className="mb-2 font-medium">Instagram Username or Link</label>
          <input
            type="text"
            id="instagram"
            placeholder="@yourhandle or https://instagram.com/yourhandle"
            disabled={isSubmitting}
            value={formData.instagram}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8c52ff] text-white"
          />
        </div>

        {/* Reason */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="reason" className="mb-2 font-medium">Reason to Connect</label>
          <textarea
            id="reason"
            rows="4"
            placeholder="Tell us how we can help..."
            required
            disabled={isSubmitting}
            value={formData.reason}
            onChange={handleChange}
            className="px-4 py-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8c52ff] text-white"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition-transform ${
              isSubmitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#a738f6] to-[#3f7cee] text-white hover:scale-105'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
