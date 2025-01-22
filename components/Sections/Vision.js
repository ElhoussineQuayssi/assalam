"use client"; 
import { CardsDescription } from '../../Constants';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Vision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="w-full h-1/3 justify-center items-center flex flex-col gap-6 p-4 relative z-10 top-[-100px]"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold text-primary">Notre Vision</h1>
      <div className="w-full h-1/2 p-3 rounded-md gap-2 flex md:flex-row flex-col justify-center items-center bg-base-200 shadow-lg">
        {CardsDescription.map((card, index) => (
          <div key={index} className="card bg-base-100 shadow-md rounded-lg p-4 h-50 relative flex flex-col justify-between" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <div className="text-5xl text-primary">{card.icon}</div>
            <p className="text-[#1a1a2e]">{card.description}</p> {/* Dark blue text color */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;