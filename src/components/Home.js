import React, { useEffect, useState } from 'react';
import Icon from './assets/Icon.png'; // Import gambar
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import stylesheet AOS
import '../css/Home.css';

const Home = ({ isDarkMode }) => {
  const roles = ['Web Developer', 'Data Analyst', 'UI/UX Designer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [roleClass, setRoleClass] = useState('role-enter');
  const [roleChangeCount, setRoleChangeCount] = useState(0);

  useEffect(() => {
    // Inisialisasi AOS
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: 'ease-in-out', // Easing animasi
      once: true, // Hanya sekali animasi saat elemen muncul
    });

    const interval = setInterval(() => {
      setRoleClass('role-exit');
      setTimeout(() => {
        setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        setRoleClass('role-enter');
        setRoleChangeCount((prevCount) => prevCount + 1);
      }, 1000);

      if (roleChangeCount === 9) {
        clearInterval(interval);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [roleChangeCount]);

  return (
    <section
      id="home"
      className={`h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-500 text-white'}`}
    >
      <div className="w-full max-w-3xl">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center">
          <div
            className="md:w-1/2 text-center md:text-left"
            data-aos="fade-up" // Animasi masuk dari bawah
          >
            <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-right">
              Hello, I'm Azzam
            </h1>
            <h2
              className={`text-2xl md:text-4xl font-semibold mt-4 ${roleClass}`}
              data-aos="fade-left" // Animasi muncul dari kiri
            >
              {roles[currentRole]}
            </h2>
          </div>
          <div
            className="mt-8 md:mt-0 md:w-1/2 flex items-center justify-center"
            data-aos="zoom-in" // Animasi zoom in
          >
            <img
              src={Icon}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
