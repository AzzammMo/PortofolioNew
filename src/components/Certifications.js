import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';
import image10 from './assets/image10.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Certifications = ({ isDarkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    { title: 'Big Data Analyst', imageUrl: image1 },
    { title: 'Program dengan Transact SQL', imageUrl: image2 },
    { title: 'Developer Track Chatbot Smojo Languange', imageUrl: image3 },
    { title: 'Python Essentials 1', imageUrl: image4 },
    { title: 'SQL Advanced', imageUrl: image5 },
    { title: 'Introduction To Open Source', imageUrl: image6 },
    { title: 'HHFA Data Analysis PLatform', imageUrl: image7 },
    { title: 'Infodemic 101 WHO', imageUrl: image8 },
    { title: 'Google Play Listing Certificate', imageUrl: image9 },
    { title: 'Mobile Web Development', imageUrl: image10 },
  ];

  const handleTouch = (e) => {
    const bubble = document.createElement('div');
    bubble.className = 'touch-bubble';
    bubble.style.left = `${e.touches[0].clientX}px`;
    bubble.style.top = `${e.touches[0].clientY}px`;
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 600); // Remove bubble after animation
  };

  // Inisialisasi AOS
  useEffect(() => {
    // Memastikan AOS hanya dipicu sekali saat halaman pertama dimuat
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,  // Animasi hanya terjadi sekali saat elemen pertama kali muncul
      disable: 'mobile', // Menonaktifkan AOS di perangkat mobile jika diperlukan
    });
  }, []);

  return (
    <section
      id="certifications"
      className={`p-8 relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      onTouchStart={handleTouch} // Detect touch
    >
      <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up">
        Certifications
      </h2>

      {/* Swiper container for sliding in mobile */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={false} // Nonaktifkan loop untuk mencegah pengguliran slide berulang
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              onClick={() => setSelectedImage(cert.imageUrl)} // Open modal
            >
              {/* Apply AOS animation to only image and text */}
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-48 object-cover"
                data-aos="fade-up"  // Animation on image
              />
              <div className={`absolute bottom-0 w-full ${isDarkMode ? 'bg-black bg-opacity-40' : 'bg-black bg-opacity-60'} text-white p-4 text-center`}>
                <h3 className="text-xl font-semibold" data-aos="fade-up">{cert.title}</h3> {/* Animation on text */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Full-Sized Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal on click
        >
          <div className={`relative p-4 bg-white rounded-lg shadow-lg max-w-3xl max-h-[80%] overflow-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Full-sized"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Bubble Effect CSS */}
      <style jsx>{`
        .touch-bubble {
          position: absolute;
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          transform: scale(0);
          animation: bubble 0.6s ease-out forwards;
        }

        @keyframes bubble {
          to {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
