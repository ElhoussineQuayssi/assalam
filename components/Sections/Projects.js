"use client"; // Add this line
import Link from 'next/link';
import { ProjectsEx } from '../../Constants';
import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <div
      className="w-full h-fit justify-center items-center flex flex-col gap-4 p-4 md:p-28 relative top-[-150px]"
    >
      <h3 className="text-2xl font-bold text-primary" data-aos="fade-up">Nos Projets</h3>
      <h1 className="text-4xl font-bold text-center text-[#1a1a2e]" data-aos="fade-up"> {/* Dark blue text color */}
        Les Grands projets de notre fondation
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 w-full" data-aos="fade-up">
        {ProjectsEx.map((projet, index) => (
          <Tilt key={index} options={{ max: 15, scale: 1.0, speed: 1000 }}>
            <motion.div
              className="card bg-base-200 shadow-lg h-80 rounded-lg relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <figure className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${projet.image})` }}></figure>
              <div className="card-body relative z-10 bg-opacity-75 bg-black text-white p-4">
                <h2 className="text-lg font-bold h-fit mb-2">{projet.titre}</h2>
                <p className="text-sm h-32">{projet.description}</p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;