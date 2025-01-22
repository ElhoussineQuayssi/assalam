import Image from "next/image";
import logo from '../Assets/logo.png';
import Link from "next/link";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";

function FooterComponent() {
  return (
    <footer className="footer p-10 bg-gray-900 text-gray-300 flex flex-col min-h-[400px]" role="contentinfo">
      {/* Section du logo et description */}
      <div className="flex flex-col items-center justify-center w-full mb-8">
        <Image src={logo} width={150} height={50} alt="Association Assalam" className="mb-4" />
        <p className="text-center text-xl font-serif">
          Association Assalam - Agissons ensemble pour un monde meilleur.
        </p>
      </div>

      {/* Sections de liens, contact et réseaux sociaux */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-4">
        {/* Section des pages */}
        <div className="flex w-full flex-col items-center md:items-start">
          <h6 className="footer-title text-xl font-bold mb-4 font-serif text-gray-100">Pages</h6>
          <Link href="/" className="link link-hover text-lg">Accueil</Link>
          <Link href="/nous_sommes" className="link link-hover text-lg">Nous Sommes</Link>
          <Link href="/projets" className="link link-hover text-lg">Projets</Link>
          <Link href="/actualites" className="link link-hover text-lg">Actualités</Link>
          <Link href="/contact" className="link link-hover text-lg">Contact</Link>
        </div>

        {/* Section de contact */}
        <div className="flex w-full flex-col items-center md:items-start">
          <h6 className="footer-title text-xl font-bold mb-4 font-serif text-gray-100">Contact</h6>
          <p className="text-lg"><span className="font-semibold">Mail</span> : Assalam@mail.com</p>
          <p className="text-lg"><span className="font-semibold">Tel</span> : +33 612 234 567</p>
          <p className="text-lg"><span className="font-semibold">Adresse</span> : 12 rue de la Légion d'Honneur, Paris, 75009</p>
        </div>

        {/* Section des réseaux sociaux */}
        <div className="flex w-full flex-col items-center md:items-start">
          <h6 className="footer-title text-xl text-gray-100 font-bold mb-4 font-serif">Réseaux Sociaux</h6>
          <div className="flex gap-4">
            <Link href="#" className="btn btn-ghost btn-circle">
              <IoLogoFacebook className="w-8 h-8" />
            </Link>
            <Link href="#" className="btn btn-ghost btn-circle">
              <IoLogoInstagram className="w-8 h-8" />
            </Link>
            <Link href="#" className="btn btn-ghost btn-circle">
              <IoLogoTwitter className="w-8 h-8" />
            </Link>
            <Link href="#" className="btn btn-ghost btn-circle">
              <IoLogoYoutube className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>

      {/* Section du copyright en bas */}
      <div className="mt-auto w-full bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-lg font-serif">Designed by Quayssi</p>
          <p className="text-lg font-serif">Copyright &copy; 2024 Assalam. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;