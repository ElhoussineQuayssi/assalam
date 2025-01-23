"use client";
import Navbar from '../../components/UIComponents/Navbar';
import Image from 'next/image';
import Footer from '../../components/UIComponents/Footer';
import photo from '../../public/logo.png';
import { useState, useEffect } from 'react';
import Screen from '../../components/UIComponents/Screen';
import { fondateursData, gridData, tawajohatona } from '@/Constants';
import { motion } from 'framer-motion';
import AOS from 'aos'
import "aos/dist/aos.css"




const NousSommes = () => {
  useEffect(() => { 
    AOS.init({duration: 1000})
   })

  const [Button, setButton] = useState(1);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative isolate h-screen bg-[url('/bg-nous.jpg')] bg-fixed bg-no-repeat bg-cover bg-right text-slate-800 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto max-w-2xl lg:mx-0 text-slate-800"
          >
            <h2 className="text-5xl font-bold tracking-tight text-blue-900 sm:text-7xl font-serif">
              Assalam Fondation
            </h2>
            <p className="mt-8 text-pretty text-lg font-semibold text-blue-800 sm:text-xl/8">
            Nous croyons en un monde où chaque individu, peu importe où il vit, a accès aux ressources essentielles pour s’épanouir.
            </p>
          </div>
          <div
            className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
          >
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {[{ label: 'Benevole', value: '+300' }, { label: 'Branches', value: '+35' }, { label: 'Famille Beneficiaire', value: '+450' }, { label: 'Programmes Termines', value: '90%' }].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col-reverse gap-1 justify-center rounded-lg bg-blue-900 bg-opacity-25 hover:bg-opacity-75 transition-all duration-500 p-6"
                >
                  <dt className="text-base/7 text-slate-400 text-center">{item.label}</dt>
                  <dd className="text-4xl font-bold tracking-tight text-slate-300 text-center">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Message, Vision, But Section */}
      <div
        data-aos="fade-up"
        className={`${Button == 1 ? 'bg-[url("/bg-nous1.jpeg")]' : Button == 2 ? 'bg-[url("/bg-nous2.JPG")]' : 'bg-[url("/bg-nous3.jpg")]'} relative rounded-tr-3xl rounded-bl-3xl w-5/6 mx-auto bg-transparent flex md:flex-row flex-col items-center justify-evenly bg-cover bg-slate-800 gap-4 p-4 top-[-50px] shadow-inner shadow-black h-screen`}
      >
        <div className="relative z-10 flex-1 flex md:flex-col justify-evenly items-start gap-1 w-full top-[-50px]" >
          {['notre-message', 'notre-vision', 'notre-buts'].map((text, index) => (
            <button
              data-aos="fade-up"
              key={index}
              aria-label={`Button for ${text}`}
              className={`btn md:w-1/2 bg-gray-200 relative hover:left-0 transition-all duration-500 ease-out ${Button == index + 1 ? 'md:left-0 md:bottom-0 bottom-[-25px]' : "md:left-[-50px]"}`}
              onClick={() => setButton(index + 1)}
            >
              {text}
            </button>
          ))}
        </div>
        <div
          data-aos="fade-up"
          className="relative z-10 flex-1 transition-all duration-700 ease-out md:left-[-50px]"
        >
          {Button == 1 ? <Screen data-aos="fade-up" description={'hello'} /> : Button == 2 ? <Screen description={'hello1'} /> : <Screen description={'hello2'} />}
        </div>
      </div>

      {/* Nos Valeurs Section */}
      <div
        className="py-10 w-full flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <div
          data-aos="fade-up"
          className="text-lg w-2/3 md:w-1/2 font-semibold text-center text-blue-900"
        >
          {'etre-benevole'}
        </div>
        <h1
          data-aos="fade-up"
          className="text-6xl font-bold text-blue-900"
        >
          {'nos-valeurs'}
        </h1>
        <div
          className="w-3/4 overflow-hidden mx-auto grid grid-cols-2 md:grid-cols-4 h-full gap-4 p-4 rounded-xl"
        >
          {gridData.map((item, index) => {
            return (<div data-aos="fade-up" data-aos-delay={`${index > 3 ? (index - 3)*100 : index  * 100}`}
              key={index}
              className="flex flex-col rounded-lg shadow-lg shadow-black drop-shadow justify-evenly hover:bg-white hover:skew-y-2 transition-all h-48 duration-700 p-6 bg-blue-100"
            >
              <span className="flex justify-center">
                <Image src={item.icon} alt="icon" width={80} height={80} />
              </span>
              <p className="text-center text-sm font-semibold capitalize text-blue-900">{item.text}</p>
            </div>)
      }   )}
        </div>
      </div>

      {/* Nos Orientations Stratégiques Section */}
      <div className="p-10 bg-transparent flex flex-col justify-center items-center gap-10 h-fit">
        <h1 className="text-bold z-10 text-3xl text-green-900 font-bold mb-10">
          nos-orientations-strategiques
        </h1>
        <div className="grid grid-rows-2 relative md:grid-cols-4 gap-12 md:h-72  items-center">
        {tawajohatona.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl p-4 transition-shadow duration-300 flex flex-col items-center" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <figure className="mb-2">
                    <Image src={item.icon} alt={item.description} width={80} height={80} />
                </figure>
                <div className="text-center">
                    <p className="text-md font-semibold">{item.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Membres du Bureau National Section */}
      <div
        className="w-full flex flex-col items-center gap-14 p-6 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <h1
          className="text-3xl font-bold text-blue-900"
        >
          Membres du bureau national
        </h1>
        <div
          className="w-full md:w-5/6 p-4 md:p-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 border border-blue-500 rounded-lg bg-white"
        >
          {fondateursData.map((item, index) => (
            <div
              data-aos="flip-up" data-aos-delay={`${index * 100}`}
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Photo */}
              <Image
                src={item.photo}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-48 md:h-48 lg:h-48 object-cover"
              />

              {/* Overlay with Name and Job */}
              <div
                className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NousSommes;