import React, { useEffect, useState } from 'react';
import ProfileImage from './assets/ProfileImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faRocket, faPaintBrush, faMobileAlt, faCogs } from '@fortawesome/free-solid-svg-icons';

// Import file CSS eksternal dan AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/About.css';

const About = ({ isDarkMode }) => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 120,
    });

    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 1500);
    }, 3000);

    return () => {
      clearInterval(interval);
      AOS.refresh();
    };
  }, []);

  return (
    <section
      id="about"
      className={`p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 px-4">
        <div
          className="md:w-1/2 text-center md:text-left md:pl-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
          <p className="mt-4">
            I am <span className="font-semibold">Muh. Azzam Izzadin</span>, a passionate
            <span className="text-blue-500 font-semibold"> Frontend Developer </span>
            with a strong enthusiasm for crafting intuitive and engaging user interfaces.
            I specialize in modern JavaScript frameworks such as React.js and Next.js, as well as backend development with Laravel.
          </p>
          <p className="mt-4">
            My development habits revolve around delivering high-performance and scalable applications, ensuring seamless user experiences.
            I continually learn and adapt to the latest trends in technology to create innovative and user-friendly digital solutions.
          </p>

        </div>
        <div
          className="md:w-1/2 flex items-center justify-center"
          data-aos="zoom-in"
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="relative w-full md:w-1/3 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* SPARK Section */}
      <div className="mt-12 space-y-8">
        <h3
          className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg"
          data-aos="fade-up"
        >
          SPARK
        </h3>


        {/* Scalable */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8" data-aos="fade-right">
          <div className={`flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''}`}>
            <FontAwesomeIcon icon={faBolt} size="2x" />
          </div>
          <div className="text-center md:text-left max-w-md">
            <h4 className="text-xl font-semibold text-blue-600">Scalable</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : ''}`}>
              Refers to the system's ability to handle increased workload without losing performance.
            </p>
          </div>
        </div>

        {/* Performant */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8" data-aos="fade-left">
          <div className="text-center md:text-left max-w-md">
            <h4 className="text-xl font-semibold text-blue-600">Performant</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : ''}`}>
              Learn techniques to increase the efficiency and speed of execution of a system or software.
            </p>
          </div>
          <div className={`flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''}`}>
            <FontAwesomeIcon icon={faRocket} size="2x" />
          </div>
        </div>

        {/* Aesthetic */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8" data-aos="fade-up">
          <div className={`flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''}`}>
            <FontAwesomeIcon icon={faPaintBrush} size="2x" />
          </div>
          <div className="text-center md:text-left max-w-md">
            <h4 className="text-xl font-semibold text-blue-600">Aesthetic</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : ''}`}>
              A concept in UI/UX design that states that an attractive appearance can increase the perception of system usability.
            </p>
          </div>
        </div>

        {/* Responsive */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8" data-aos="fade-left">
          <div className="text-center md:text-left max-w-md">
            <h4 className="text-xl font-semibold text-blue-600">Responsive</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : ''}`}>
              An approach to web development that allows the interface to adapt to various screen sizes and devices.
            </p>
          </div>
          <div className={`flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''}`}>
            <FontAwesomeIcon icon={faMobileAlt} size="2x" />
          </div>
        </div>

        {/* Keep it Simple */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8" data-aos="fade-up">
          <div className={`flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''}`}>
            <FontAwesomeIcon icon={faCogs} size="2x" />
          </div>
          <div className="text-center md:text-left max-w-md">
            <h4 className="text-xl font-semibold text-blue-600">Keep it Simple</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : ''}`}>
              A design principle that emphasizes simplicity in interfaces and user interactions to improve user experience and efficiency.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
