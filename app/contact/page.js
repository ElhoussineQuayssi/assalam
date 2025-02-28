"use client"; // Required for client-side interactivity (e.g., animations, forms)
import React from 'react';
import emailjs from '@/node_modules/emailjs-com';
import { MdEmail, MdPhone, MdLocationOn } from '@/node_modules/react-icons/md'; // Import icons from react-icons

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

export default function Page() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tmz1uwe', // Replace with your EmailJS service ID
      'template_da817bm', // Replace with your EmailJS template ID
      e.target,
      'kqHtjYA7blA1A6YQh' // Replace with your EmailJS user ID
    )
      .then((result) => {
          alert('Message sent successfully!');
      }, (error) => {
          alert('An error occurred, please try again.');
      });
  };

  return (
    <div>
      {/* Section de titre avec animation */}
      <div
        className='flex flex-col justify-center items-center text-center p-6 h-40 w-full font-bold text-2xl bg-blue-500 text-white'
      >
        Écrivez-Nous : Ensemble, Tout Est Possible
      </div>

      {/* Section de contact avec animation */}
      <div
        className="flex flex-col md:flex-row justify-between p-6 max-w-6xl mx-auto gap-8"
      >
        {/* Formulaire de contact */}
        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-500 font-serif">Contactez-Nous</h2>
          <form onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              className="input input-bordered w-full bg-gray-100 focus:bg-white focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              className="input input-bordered w-full bg-gray-100 focus:bg-white focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Votre Message"
              className="textarea textarea-bordered h-48 w-full bg-gray-100 focus:bg-white focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            >
              Envoyer le Message
            </button>
          </form>
        </div>

        {/* Informations de contact */}
        <div
          className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-500 font-serif">Nos Coordonnées</h2>
          <div className="space-y-4 text-gray-700 w-full">
            {/* Email */}
            <div className="flex items-start gap-2 font-bold justify-center">
              <MdEmail className="h-6 w-6 text-blue-500" />
              <span>Email : assalam@mail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-2 font-bold justify-center">
              <MdPhone className="h-6 w-6 text-blue-500" />
              <span>Téléphone : 02 345 6789</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 font-bold justify-center">
              <MdLocationOn className="h-6 w-6 text-blue-500" />
              <span>Adresse : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}