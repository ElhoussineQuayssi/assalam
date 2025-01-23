"use client"; 
import { ListAboutUs } from '../../Constants/index';
import React from 'react';
import ListItem from '../UIComponents/ListItem';

const AboutUs = () => {
  return (
    <div
      className="bg-[url('/bg1.jpg')] bg-cover bg-center w-full h-fit flex flex-col-reverse md:flex-row gap-8 p-5 md:p-28 relative top-[-150px] rounded-lg shadow-lg"
    >
      <div className="flex-1 gap-4 flex flex-col">
        <div className="text-4xl font-bold text-primary">À propos de nous</div>
        <div className="text-[#1a1a2e]"> {/* Dark blue text color */}
        Fondation Assalam pour le Développement Social, une association marocaine non gouvernementale qui contribue à améliorer et à enrichir la vie des individus et des familles en situation difficile, afin de préserver leur dignité humaine à travers des programmes de développement durables, avec des engagements clairs et des ressources humaines qualifiées, s'appuyant sur les valeurs de la compassion et de la solidarité, conformément aux normes de qualité et de professionnalisme, tout en visant l'excellence et le leadership        </div>
        <div className="flex flex-col gap-2" data-aos="fade-up">
          {ListAboutUs.map((item, index) => (
            <ListItem text={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex-1 w-full h-80 flex justify-center items-center">
        <iframe
          className="aspect-square w-full h-full rounded-tl-3xl rounded-br-3xl shadow-lg"
          src="https://www.youtube.com/embed/KrWPaJ-VjFo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          data-aos="flip-up"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;