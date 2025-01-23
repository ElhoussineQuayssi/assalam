// pages/parrainage.js
import Head from 'next/head';

export default function Parrainage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Projet Parrainage d'Orphelins - Fondation Assalam</title>
        <meta name="description" content="Découvrez le projet de parrainage d'orphelins de la Fondation Assalam pour le développement social." />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Projet Parrainage d'Orphelins</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Objectif Général du Projet</h2>
          <p className="text-lg">
            Offrir une égide globale aux orphelins au sein de leurs familles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Formules de Parrainages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Parrainage Global</h3>
                <p>Besoins de Base + Besoins Ponctuels</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Parrainage de Base</h3>
                <p>Pour couvrir les besoins de base de l’orphelin (nourriture, éducation et santé)</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Parrainage Scolaire</h3>
                <p>Le parrain peut choisir que l'orphelin poursuive sa scolarité primaire dans une école privée</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Parrainage Famille</h3>
                <p>Couvrir les besoins de base d'une famille d'orphelins (2 et plus)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projets Annexes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Rentrée Scolaire</h3>
                <p>Distribution de cartables scolaires pour encourager la poursuite des études</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Panier du Ramadan</h3>
                <p>Fournir des paniers contenant des aliments de base pour le mois sacré du Ramadan</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Campings d'Été</h3>
                <p>Organisation de campings d'été pour les orphelins et les démunis</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Farhat Al Aid</h3>
                <p>Offrir des vêtements neufs et des chaussures à l'occasion de Aïd El Fitr</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Farhat Aid El Adha</h3>
                <p>Offrir des aides pour l'achat du mouton de l’Aid</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}