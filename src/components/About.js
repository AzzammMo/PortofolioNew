import React, { useEffect, useState } from 'react';
import ProfileImage from './assets/ProfileImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

// Import file CSS eksternal dan AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/About.css';

const About = ({ isDarkMode }) => {
  const [isShaking, setIsShaking] = useState(false);

  // useEffect untuk mengatur animasi AOS dan animasi shake
  useEffect(() => {
    // Inisialisasi AOS
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: 'ease-in-out', // Easing animasi
      once: true, // Animasi hanya dijalankan sekali
      offset: 120, // Memulai animasi setelah elemen 120px masuk ke dalam viewport
    });

    // Interval animasi shake
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false); // Menonaktifkan animasi setelah 1.5 detik
      }, 1500);
    }, 3000); // Jalankan setiap 3 detik

    // Bersihkan interval ketika komponen unmount
    return () => {
      clearInterval(interval);
      AOS.refresh(); // Segarkan AOS
    };
  }, []);

  return (
    <section
      id="about"
      className={`p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 px-4">
        {/* Left Side - About Me Text */}
        <div
          className="md:w-1/2 text-center md:text-left md:pl-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
          <p className="mt-4">
            I am Azzam, a dedicated web specializing in modern frameworks and technologies.
            I work with PHP Native, Laravel, React.js, and Next.js to build efficient, responsive web applications.
            Additionally, I use Flutter to create cross-platform mobile apps.
          </p>
          <p className="mt-4">
            Passionate about delivering high-quality solutions, I continually learn and adapt to the latest industry
            trends. My goal is to ensure seamless and innovative user experiences while transforming ideas into reality.
          </p>
        </div>

        {/* Right Side - Profile Image */}
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

      {/* Skill Overview Section */}
      <div className="mt-12 space-y-8">
        <h3
          className="text-2xl font-bold text-center text-blue-600"
          data-aos="fade-up"
        >
          My Expertise
        </h3>

        {/* Web Development */}
        <div
          className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
          data-aos="fade-right"
        >
          {/* Icon */}
          <div
            className={`flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''} icon-hover`}
          >
            <FontAwesomeIcon icon={faLaptopCode} size="2x" />
          </div>
          {/* Text */}
          <div className="text-center md:text-left max-w-md">
            <h4 className="text-xl font-semibold text-blue-600">Web Development</h4>
            <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I transform ideas into functional and visually stunning web solutions. Leveraging tools like React.js,
              Laravel, and Next.js, I create responsive websites that are optimized for speed, scalability, and seamless
              user experiences. Whether it's an interactive dashboard or a complex e-commerce platform, I deliver with precision.
            </p>
          </div>
        </div>


        <div
          className="flex flex-col-reverse md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
          data-aos="fade-left"
        >
          {/* Text */}
          <div className="text-center md:text-left max-w-md">
            <h4 className="text-xl font-semibold text-blue-600">Data Analysis</h4>
            <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I uncover insights hidden within data to empower decision-making. Using Python, SQL, and Power BI,
              I analyze trends, visualize findings, and create compelling dashboards that tell a story. From business
              intelligence to operational optimizations, I deliver data-driven results with clarity.
            </p>
          </div>
          {/* Icon */}
          <div
            className={`flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''} icon-hover`}
          >
            <FontAwesomeIcon icon={faChartBar} size="2x" />
          </div>
        </div>


        <div
          className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
          data-aos="fade-up"
        >
          {/* Icon */}
          <div
            className={`flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''} icon-hover`}
          >
            <FontAwesomeIcon icon={faPaintBrush} size="2x" />
          </div>
          {/* Text */}
          <div className="text-center md:text-left max-w-md">
            <h4 className="text-xl font-semibold text-blue-600">UI/UX Design</h4>
            <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My goal is to craft designs that not only look great but also feel intuitive. Using tools like Figma
              and Adobe XD, I create wireframes, prototypes, and polished interfaces. By balancing aesthetics and
              functionality, I ensure every user interaction is seamless and delightful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
