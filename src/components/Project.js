import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import project5 from './assets/project5.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';
import project1 from './assets/project1.png';
import project4 from './assets/project4.png';
import project6 from './assets/project6.png';


// Dummy project data
const projects = [
  {
    id: 1,
    title: 'Website - SobatTani',
    description: 'solutions for creating agricultural regeneration by realizing the competitiveness of young farmers progressing through food and feed technology available on this website.',
    image: project1,
    link: 'https://github.com/username/project1',
  },
  {
    id: 2,
    title: 'Website - Inventy',
    description: 'suppliers of necessities from factories directly to intermediary shops without any benefit so that people can enjoy affordable distribution prices for re-commercial use.',
    image: project2,
    link: 'https://github.com/username/project2',
  },
  {
    id: 3,
    title: 'Website - Monitoring TPS Surabaya',
    description: 'This landfill monitoring is assumed to be the final disposal of community waste which will be useful as a forum for information in choosing a waste disposal site.',
    image: project3,
    link: 'https://github.com/username/project3',
  },
  {
    id: 4,
    title: 'Website - Absensi Face Recognition GPS',
    description: 'The employee attendance website uses camera scans and the QR code will be generated automatically and detects whereabouts via GPS, making it easier for employees to take attendance quickly, easily and efficiently.',
    image: project4,
    link: 'https://github.com/username/project4',
  },
  {
    id: 5,
    title: 'UI Design - HydrateX',
    description: `This website is designed to help users in regulating water levels in their bodies effectively
  while monitoring other body health metrics such as heart rate, calories, and sleeping time. By utilizing the latest technology, HydrateX will provide a comprehensive solution to support a healthy and active lifestyle.`,
    image: project5,
    link: 'https://github.com/username/project5',
  },
  
  {
    id: 6,
    title: 'Website - E-RCE',
    description: 'emergency services for people who need help such as traffic accidents, fires, and ambulance services. Apart from that, this application can also be an information system for organizations operating in the humanitarian sector such as PMI, PSC, and other private organizations.',
    image: project6,
    link: 'https://github.com/username/project6',
  },
];

const Project = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalImage, setModalImage] = useState(null); // State for the image that is clicked

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens only once
      offset: 200, // Offset to trigger animation a little earlier or later
    });

    // Refresh AOS on window resize to trigger animations again for responsiveness
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  // Function to go to the next project in slideshow
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to go to the previous project in slideshow
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Function to open the modal with clicked image
  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null); // Reset the image when modal is closed
  };

  return (
    <section id="Project" className={`p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} data-aos="fade-up">
      <h2 className={`text-3xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up">
        Projects
      </h2>

      {/* Project Grid for Desktop */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            data-aos="fade-up"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain rounded-t-lg cursor-pointer"
              onClick={() => openModal(project.image)} // Click handler to open the modal
            />

            {/* Project Content */}
            <div className="p-4">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'} mb-2`} data-aos="fade-up">
                {project.title}
              </h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} data-aos="fade-up">
                {project.description}
              </p>

              {/* Button to open modal */}
        
            </div>
          </div>
        ))}
      </div>

      {/* Slideshow for Mobile */}
      <div className="sm:hidden relative w-full overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 p-4" data-aos="fade-up">
              <div className={`rounded-lg shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain rounded-t-lg cursor-pointer"
                  onClick={() => openModal(project.image)} // Click handler for mobile
                />

                {/* Project Content */}
                <div className="p-4">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'} mb-2`} data-aos="fade-up">
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up">
                    {project.description}
                  </p>

                  {/* Button to open modal */}
                 
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

      {/* Modal for displaying image in detail */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
            {/* Image inside modal */}
            <img
              src={modalImage} // Display the image clicked on the project card
              alt="Project Detail"
              className="w-full h-auto object-contain mb-4 rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
