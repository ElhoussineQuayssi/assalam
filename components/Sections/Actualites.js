"use client"; 
import React, { useState } from 'react';
import { ActualitesData } from '../../Constants';
import Link from 'next/link';

const Actualites = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleVoirPlus = () => {
    setVisibleCount(prevCount => prevCount + 2);
  };

  return (
    <div className="relative flex gap-6 flex-col items-center justify-center h-fit top-[-100px] mt-3 w-5/6 mx-auto">
      <h1 className="text-2xl font-bold text-primary">Restez Informé</h1>
      <h3 className="text-4xl mb-5 text-[#1a1a2e] text-center">Découvrez nos initiatives récentes et nos événements communautaires.
      </h3> {/* Dark blue text color */}
      <div className="grid grid-cols-1 gap-8 w-full">
        {ActualitesData.slice(0, visibleCount).map((item, index) => (
          <div key={index}>
            <Link href={`/actualites/${item.id}`}>
              <div className="card bg-base-200 shadow-lg rounded-lg w-full hover:shadow-xl transition-shadow duration-300 ease-in-out" data-aos="fade-up">
                <div className="card-body flex flex-col md:flex-row items-center">
                  <img src={item.image} alt={item.title} className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0" />
                  <div className="ml-4">
                    <h2 className="card-title text-primary text-2xl font-semibold hover:text-blue-600 transition-colors duration-200">{item.title}</h2>
                    <p className="text-gray-500 text-sm italic">12-06-2023</p>
                    <p className="text-[#1a1a2e] text-lg mt-2">{item.description}</p>
                    <Link href={`/actualites/${item.id}`} className="btn bg-blue-500 text-white hover:bg-green-500 relative overflow-hidden transition-all duration-300 ease-in-out">
                      <span className="absolute inset-0 bg-green-500 transform scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100"></span>
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-5" onClick={handleVoirPlus}>Voir plus</button>
    </div>
  );
};

export default Actualites;