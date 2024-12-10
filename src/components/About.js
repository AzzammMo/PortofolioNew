import React, { useEffect, useState } from 'react';
import ProfileImage from './assets/ProfileImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

// Import file CSS eksternal
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import '../css/About.css';

const About = ({ isDarkMode }) => {
  const [isShaking, setIsShaking] = useState(false);

  // Menggunakan useEffect untuk menjalankan interval animasi shake setiap 3 detik
  useEffect(() => {
    // Inisialisasi AOS
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: 'ease-in-out', // Easing animasi
      once: true, // Animasi hanya dilakukan sekali
    });

    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false); // Menonaktifkan animasi setelah 1.5 detik (waktu durasi animasi)
      }, 1500); // Durasi animasi shake yang lebih panjang
    }, 3000); // Menjalankan animasi setiap 3 detik

    // Membersihkan interval ketika komponen unmount
    return () => {
      clearInterval(interval);
      AOS.refresh(); // Menyegarkan AOS
    };
  }, []);

  return (
    <section
      id="about"
      className={`p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 px-4">
        {/* Left Side - Text */}
        <div
          className="md:w-1/2 text-center md:text-left md:pl-12"
          data-aos="fade-up" // Animasi fade-up saat scroll
        >
          <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
          <p className="mt-4">
            I am a passionate web developer with expertise in React.js and modern front-end technologies. I enjoy creating dynamic, user-friendly web applications that deliver seamless experiences. I specialize in building responsive websites and web apps using the latest web technologies.
          </p>
          <p className="mt-4">
            With a strong foundation in both design and development, I aim to craft visually appealing and high-performance websites that meet the needs of users. I am always eager to learn and stay up-to-date with the latest trends in the industry, continuously improving my skills and knowledge.
          </p>
        </div>

        {/* Right Side - Image */}
        <div
          className="md:w-1/2 flex items-center justify-center"
          data-aos="zoom-in" // Animasi zoom-in saat scroll
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="relative w-full md:w-1/3 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Additional Section - Skill Overview */}
      <div className="mt-12 space-y-8">
        <h3
          className="text-2xl font-bold text-center text-blue-600"
          data-aos="fade-up" // Animasi fade-up
        >
          My Expertise
        </h3>
        <div className="flex flex-col space-y-12">
          {/* Row 1 */}
          <div
            className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
            data-aos="fade-right" // Animasi fade-right
          >
            {/* Left - Icon */}
            <div
              className={`flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''} icon-hover`}
            >
              <FontAwesomeIcon icon={faLaptopCode} size="2x" />
            </div>
            {/* Right - Text */}
            <div className="text-center md:text-left max-w-md">
              <h4 className="text-xl font-semibold text-blue-600">Web Development</h4>
              <p className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Skilled in creating responsive, dynamic, and user-friendly web applications. Proficient in React.js, HTML5, CSS3, and JavaScript frameworks to bring designs to life.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="flex flex-col-reverse md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
            data-aos="fade-left" // Animasi fade-left
          >
            {/* Left - Text */}
            <div className="text-center md:text-left max-w-md">
              <h4 className="text-xl font-semibold text-blue-600">Data Analysis</h4>
              <p className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Experienced in analyzing datasets, identifying trends, and building dashboards using tools like Python, SQL, and Power BI for informed decision-making.
              </p>
            </div>
            {/* Right - Icon */}
            <div
              className={`flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''} icon-hover`}
            >
              <FontAwesomeIcon icon={faChartBar} size="2x" />
            </div>
          </div>

          {/* Row 3 */}
          <div
            className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
            data-aos="fade-up" // Animasi fade-up
          >
            {/* Left - Icon */}
            <div
              className={`flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full shadow-lg ${isShaking ? 'animate-shake' : ''} icon-hover`}
            >
              <FontAwesomeIcon icon={faPaintBrush} size="2x" />
            </div>
            {/* Right - Text */}
            <div className="text-center md:text-left max-w-md">
              <h4 className="text-xl font-semibold text-blue-600">UI/UX Design</h4>
              <p className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Proficient in designing intuitive user interfaces and creating seamless user experiences. Skilled with tools like Figma, Adobe XD, and wireframing techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
