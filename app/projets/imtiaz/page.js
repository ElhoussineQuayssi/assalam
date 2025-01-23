// pages/imtiaz.js
import Head from 'next/head';

export default function Imtiaz() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Projet Imtiaz - Parrainage des Étudiants Brillants</title>
        <meta name="description" content="Découvrez le projet Imtiaz pour le parrainage des étudiants brillants issus de milieux défavorisés." />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Projet Imtiaz</h1>

        {/* Section 1: Objectif Général */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Objectif Général du Projet</h2>
          <p className="text-lg">
            Le projet Imtiaz a pour mission d’accompagner les étudiants les plus brillants vivant en situation difficile ou issus de milieux défavorisés jusqu’à leur insertion professionnelle. L’objectif principal est d’insuffler un esprit d'appartenance et d'initiative, et de les activer dans la réforme et le développement.
          </p>
        </section>

        {/* Section 2: Objectifs Spécifiques */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Objectifs Spécifiques</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Développer le niveau éducatif et l'aspect éthique des jeunes.</li>
            <li>Œuvrer pour le développement des compétences éducatives, comportementales et relationnelles.</li>
            <li>Enseigner des compétences pour interagir avec soi-même et avec les autres.</li>
            <li>Autonomiser les jeunes à travers le coaching et des conseils individuels.</li>
            <li>Aider dans l’acquisition des besoins nécessaires des étudiants (fournitures scolaires, PC, connexion Internet...).</li>
          </ul>
        </section>

        {/* Section 3: Attentes des Étudiants */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Attentes des Étudiants</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Information et orientation des futurs bacheliers.</li>
            <li>Accéder à des établissements de formation de qualité.</li>
            <li>Soutien financier pour subvenir à leurs besoins.</li>
            <li>Accompagnement et conseil pour les choix d’option et l’insertion professionnelle.</li>
            <li>Coaching individuel et séances de développement personnel.</li>
            <li>Soutien en langues.</li>
          </ul>
        </section>

        {/* Section 4: Notre Engagement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Notre Engagement</h2>
          <p className="text-lg mb-4">
            Nous nous engageons à accompagner les étudiants à travers plusieurs actions :
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Rencontres d’information et d’orientation pour les candidats au Baccalauréat.</li>
            <li>Plan de formation annuel sur les différents axes de la vie.</li>
            <li>Bourse mensuelle pour subvenir aux besoins minimaux (transport, nourriture...).</li>
            <li>Accompagnement pour l’accès au logement en cas de problèmes majeurs.</li>
            <li>Équipement informatique selon les disponibilités.</li>
            <li>Coaching ou accompagnement psychologique par un professionnel.</li>
            <li>Mise à niveau linguistique.</li>
            <li>Aide à la recherche de stages et d’emplois.</li>
            <li>Renforcement du leadership.</li>
          </ul>
        </section>

        {/* Section 5: Critères d’Éligibilité */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Critères d’Éligibilité et de Sélection</h2>
          <p className="text-lg mb-4">
            Le programme Imtiaz cible les étudiants méritants avec un potentiel académique fort et issus de milieux défavorisés. Les critères sont les suivants :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Critère Académique</h3>
                <ul className="list-disc list-inside">
                  <li>La note</li>
                  <li>La filière</li>
                  <li>Le projet de vie</li>
                </ul>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Critère Social</h3>
                <ul className="list-disc list-inside">
                  <li>Orphelins ou étudiants issus de structures de protection sociale.</li>
                  <li>Étudiants démunis en situation de handicap.</li>
                  <li>Étudiants en situations difficiles (pauvreté, exclusion sociale, parents divorcés ou malades...).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}