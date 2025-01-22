"use client"; // Add this line
import React, { useState } from 'react';
import { ActualitesData } from '../../Constants';
import Link from 'next/link';

const Actualites = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleVoirPlus = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className="relative flex gap-6 flex-col items-center justify-center h-fit top-[-100px] mt-3 w-5/6 mx-auto">
      <h1 className="text-2xl font-bold text-primary">Titre</h1>
      <h3 className="text-4xl font-bold text-[#1a1a2e]">Description</h3> {/* Dark blue text color */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {ActualitesData.slice(0, visibleCount).map((item, index) => (
          <Link href={`/actualites/${item.id}`} key={index}>
            <div className="card bg-base-200 shadow-lg rounded-lg w-full md:w-full" data-aos="fade-up">
              <div className="card-body">
                <h2 className="card-title text-primary">{item.title}</h2>
                <p className="text-[#1a1a2e]">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="btn btn-primary mt-5" onClick={handleVoirPlus}>Voir plus</button>
    </div>
  );
};

export default Actualites;