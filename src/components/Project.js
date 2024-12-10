import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

import project5 from './assets/project5.png';

// Dummy project data
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A web application built with React.js to manage tasks efficiently.',
    image: '/assets/project1.png', // Ganti dengan gambar proyek Anda
    link: 'https://github.com/username/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'An e-commerce platform built using React and Node.js for full-stack functionality.',
    image: '/assets/project2.png', // Ganti dengan gambar proyek Anda
    link: 'https://github.com/username/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A data visualization dashboard using D3.js and React to analyze sales data.',
    image: '/assets/project3.png', // Ganti dengan gambar proyek Anda
    link: 'https://github.com/username/project3',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A mobile app developed with React Native for real-time chat functionality.',
    image: '/assets/project4.png', // Ganti dengan gambar proyek Anda
    link: 'https://github.com/username/project4',
  },
  {
    id: 5,
    title: 'UI Design - HydrateX',
    description: 'An AI-powered recommendation system using Python and TensorFlow.',
    image: project5, // Ganti dengan gambar proyek Anda
    link: 'https://github.com/username/project5',
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'A social media application built with React.js and Firebase.',
    image: '/assets/project6.png', // Ganti dengan gambar proyek Anda
    link: 'https://github.com/username/project6',
  },
];

const Experience = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: 'ease-in-out', // Easing animasi
      once: true, // Animasi hanya dilakukan sekali
    });
  }, []);

  // Function to go to the next project in slideshow
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to go to the previous project in slideshow
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="experience" className={`p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up">
        Projects
      </h2>

      {/* Project Grid for Desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative group overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500`}
            data-aos="fade-up"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain rounded-t-lg" // Make sure image is contained without cutting off
            />

            {/* Project Content */}
            <div className="p-4">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'} mb-2`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-black' : 'text-gray-700'}`}> {/* Ensure text is readable in dark mode */}
                {project.description}
              </p>

              {/* Link to Project */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Slideshow for Mobile */}
      <div className="sm:hidden relative w-full overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 p-4">
              <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain rounded-t-lg" // Ensure image fits without being cropped
                />

                {/* Project Content */}
                <div className="p-4">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'} mb-2`}>
                    {project.title}
                  </h3>
                  {/* Fix for mobile dark mode */}
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-black' : 'text-gray-900'}`}> {/* Black text in dark mode for readability */}
                    {project.description}
                  </p>

                  {/* Link to Project */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300`}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons for Slideshow */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center">
          <button
            onClick={prevProject}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center">
          <button
            onClick={nextProject}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
