import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ isDarkMode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('Sending...');

    // Fetch to Formspree API
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xbljeagy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
      } else {
        setStatusMessage('Failed to send message');
      }
    } catch (error) {
      setStatusMessage('Error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-500'} text-white`}>
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>

      {/* Informational Paragraph */}
      <p className={`text-center mt-4 text-lg ${isDarkMode ? 'text-white' : 'text-white'} max-w-lg mx-auto`}>
        If you have any questions or would like to collaborate, please fill out the form below. 
        I'd love to hear from you!
      </p>

      <form
        action="https://formspree.io/f/xjkvdeye"
        method="POST"
        className="mt-4 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Name Input */}
        <div className="relative mb-4">
          <FontAwesomeIcon
            icon={faUser}
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${isDarkMode ? 'text-gray-500' : 'text-gray-700'}`}
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`w-full p-3 pl-10 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${isDarkMode ? 'text-gray-500' : 'text-gray-700'}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`w-full p-3 pl-10 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Message Input */}
        <div className="relative mb-4">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${isDarkMode ? 'text-gray-500' : 'text-gray-700'}`}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={`w-full p-3 pl-10 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button with Loading Effect */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white p-2 rounded transition duration-300 
          ${isDarkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} 
          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <div className="flex justify-center items-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 118 8 8 8 0 01-8-8z"></path>
              </svg>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-center text-white">{statusMessage}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
