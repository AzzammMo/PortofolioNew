import React, { useEffect, useState } from 'react';
import Icon from './assets/Icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Pindahkan ke luar component (stabil, bukan dependency lagi)
const ROLES = ['Frontend Dev', 'Web Developer'];

const Home = ({ isDarkMode }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [roleClass, setRoleClass] = useState('opacity-100 translate-y-0');
  const [time, setTime] = useState(new Date());

  // =========================
  // AOS Init (Run Once)
  // =========================
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // =========================
  // Clock Interval
  // =========================
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  // =========================
  // Role Animation Interval
  // =========================
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleClass('opacity-0 translate-y-2');

      const timeout = setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % ROLES.length);
        setRoleClass('opacity-100 translate-y-0');
      }, 400);

      return () => clearTimeout(timeout);
    }, 3500);

    return () => clearInterval(roleInterval);
  }, []);

  // =========================
  // Helpers
  // =========================
  const formatTimeParts = (date) => {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return [...h, ':', ...m, ':', ...s];
  };

  const formatDate = (date) =>
    date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const timeParts = formatTimeParts(time);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 pt-24 ${
        isDarkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 text-white'
      }`}
    >
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">

          {/* LEFT SIDE */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">

            <div data-aos="fade-right">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                Hello, I'm{' '}
                <span className="text-blue-800 font-semibold drop-shadow-lg">
                  Azzam
                </span>
              </h1>

              <h2
                className={`text-xl sm:text-2xl md:text-4xl font-semibold mt-3 transition-all duration-500 ${roleClass}`}
              >
                {ROLES[currentRole]}
              </h2>
            </div>

            {/* DIGITAL CLOCK */}
            <div className="flex flex-col items-center md:items-start gap-4 mt-4">

              <div className="flex items-center gap-2 sm:gap-3">
                {timeParts.map((char, index) =>
                  char === ':' ? (
                    <span
                      key={index}
                      className="text-xl sm:text-2xl md:text-4xl font-bold text-sky-200/80"
                    >
                      :
                    </span>
                  ) : (
                    <div
                      key={index}
                      className="
                        w-10 h-12
                        sm:w-12 sm:h-14
                        md:w-16 md:h-20
                        flex items-center justify-center
                        rounded-lg sm:rounded-xl
                        bg-white/15
                        backdrop-blur-md
                        shadow-md
                      "
                    >
                      <span
                        className="
                          text-lg sm:text-xl md:text-3xl
                          font-bold
                          text-sky-900
                          drop-shadow-[0_0_6px_rgba(14,165,233,0.7)]
                        "
                      >
                        {char}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="text-xs sm:text-sm md:text-base text-sky-100 capitalize tracking-wide text-center md:text-left">
                {formatDate(time)}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="md:w-1/2 flex justify-center"
            data-aos="zoom-in"
          >
            <img
              src={Icon}
              alt="Profile"
              className="
                w-60 sm:w-72 md:w-96
                hover:scale-105
                transition duration-500
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;