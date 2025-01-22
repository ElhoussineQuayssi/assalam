import { bgNous, bgNous1, bgNous2, bgNous3 } from '@/Constants/images';
import Image from 'next/image';
import React from 'react';

const images = [
  { src: bgNous, alt: 'Slide 1' },
  { src: bgNous1, alt: 'Slide 2' },
  { src: bgNous2, alt: 'Slide 3' },
  { src: bgNous3, alt: 'Slide 4' },
  // Add more images as needed
];

export default function ProjectPage({ params }) {
  const { ProjectId } = params;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full bg-white shadow-xl rounded-lg p-6">
        <section className="relative h-screen flex flex-col justify-center items-center bg-gray-100">
          <div className="absolute inset-0 bg-blue-500 opacity-10"></div>
          <header className="text-center mb-8 z-10">
            <h1 className="text-4xl font-bold text-primary mb-4">Fataer Al Baraka</h1>
            <h3 className="text-xl font-semibold text-secondary mb-4">Un projet d'espoir et de renouveau</h3>
          </header>
          <div className="flex flex-col md:flex-row justify-start items-start w-3/4 z-10">
            <section className="mb-8 w-full md:w-1/2">
              <p className="text-md">
                Fataer Al Baraka est un centre de formation dans la production de la pâtisserie et des
                gâteaux marocaines ; c'est aussi un tremplin vers l'autonomie et l'épanouissement personnel
                pour des femmes en situation précaire, en particulier des veuves ou des femmes vulnérables.
                Ce projet met à l'honneur la tradition culinaire marocaine, en permettant à ces femmes de
                transformer leur passion pour la pâtisserie en une réelle opportunité de vie.
              </p>
            </section>
            <section className="mb-8 w-full md:w-1/2">
              <ul className="list-disc ml-5">
                <li className="border p-2 hover:translate-x-[-5px] transition-transform duration-300">Les techniques de base et avancées de la pâtisserie marocaine.</li>
                <li className="border p-2 hover:translate-x-[-5px] transition-transform duration-300">Des compétences en gestion et en entrepreneuriat pour développer des projets individuels ou collectifs.</li>
              </ul>
            </section>
          </div>
        </section>
        <section className="mb-8 w-full h-fit md:h-[50vh] p-10">
          <h2 className="text-4xl font-semibold text-secondary mb-10 text-center">Mission et objectifs</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 hover:shadow-lg hover:shadow-blue-500 hover:scale-105 hover:rotate-1 hover:transition-all duration-300">
              <h3 className="text-lg font-bold mb-2">Formation Professionnelle</h3>
              <p>Offrir une formation professionnelle de qualité en pâtisserie et gâteaux marocains.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 hover:shadow-lg hover:shadow-blue-500 hover:scale-105 hover:rotate-1 hover:transition-all duration-300">
              <h3 className="text-lg font-bold mb-2">Autonomisation Économique</h3>
              <p>Contribuer à l'autonomisation économique des femmes en difficulté.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 hover:shadow-lg hover:shadow-blue-500 hover:scale-105 hover:rotate-1 hover:transition-all duration-300">
              <h3 className="text-lg font-bold mb-2">Valorisation Culinaire</h3>
              <p>Préserver et valoriser l'art culinaire marocain.</p>
            </div>
          </div>
        </section>

        <section className="mb-8 w-full md:h-[90vh] h-fit flex flex-col justify-center items-center p-10">
          <h2 className="text-4xl font-semibold text-secondary mb-10 text-center">Durée et déroulement de la formation</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 h-full">
            <div className="flex flex-col justify-between items-start gap-10 h-fit md:w-1/2">
              <p className="text-lg mb-8 md:mb-0">
                La formation au sein de Fataer Al Baraka s'étale sur une période de 9 mois, au cours
                desquels les participantes acquièrent :
              </p>
              <ul className="list-disc ml-5">
                <li className="border-b pb-2 mb-2">Les techniques de base et avancées de la pâtisserie marocaine.</li>
                <li className="border-b pb-2 mb-2">Des compétences en gestion et en entrepreneuriat pour développer des projets
                    individuels ou collectifs.</li>
              </ul>
            </div>
            <div className="carousel flex-1 rounded-box w-64">
              {images.map((image, index) => (
                <div key={index} className="carousel-item w-full">
                  <Image src={image.src} className="w-full" alt={image.alt} width={800} height={500} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Certification et reconnaissance</h2>
          <p className="text-lg">
            En fin de formation, un examen organisé et supervisé en partenariat par l'Entraide
            Nationale permet aux participantes d'obtenir un diplôme certifié et officiellement reconnu.
            Ce diplôme constitue un véritable passeport vers l'emploi et l'autonomie.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Après la formation : Un avenir prometteur</h2>
          <p className="text-lg">
            Grâce à cette formation, les participantes peuvent :
          </p>
          <ul className="list-disc ml-5">
            <li>Se regrouper pour former des coopératives dans le secteur culinaire.</li>
            <li>Lancer leurs propres projets à domicile, en proposant des pâtisseries traditionnelles
                aux particuliers et aux professionnels.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Impact social</h2>
          <p className="text-lg">
            Fataer Al Baraka contribue à :
          </p>
          <ul className="list-disc ml-5">
            <li>Lutter contre la précarité en offrant des opportunités professionnelles concrètes.</li>
            <li>Renforcer l'esprit de solidarité et de coopération au sein des communautés locales.</li>
            <li>Valoriser le rôle des femmes dans le développement économique et social.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Conclusion</h2>
          <p className="text-lg">
            En s'appuyant sur la richesse de la tradition culinaire marocaine, Fataer Al Baraka
            transforme les défis en opportunités et redonne espoir à des femmes qui aspirent à une vie
            meilleure. Ce projet illustre parfaitement l'alliance entre patrimoine, solidarité et
            développement durable.
          </p>
          <button className="mt-4 bg-primary text-white py-2 px-4 rounded">Soutenez-nous dans cette noble mission !</button>
        </section>
      </div>
    </div>
  );
}

