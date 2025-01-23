// pages/nadi-assalam.js
import Head from 'next/head';

export default function NadiAssalam() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Nadi Assalam - Un avenir cousu d'espoir</title>
        <meta name="description" content="Découvrez Nadi Assalam, un centre de formation en couture pour les femmes en situation précaire." />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Nadi Assalam : Un avenir cousu d'espoir</h1>

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg">
            Nadi Assalam est un centre de formation dédié à l'apprentissage de la couture traditionnelle et moderne, conçu pour redonner espoir et opportunités aux femmes veuves ou en situation précaire. Ce projet offre bien plus qu'une formation : il permet à ces femmes de se réinventer, de retrouver une autonomie économique et de devenir actrices de leur propre avenir.
          </p>
        </section>

        {/* Section 2: Mission et objectifs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Mission et Objectifs</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Transmettre un savoir-faire en couture, mêlant traditions marocaines et techniques modernes.</li>
            <li>Favoriser l'autonomisation des femmes en difficulté grâce à une formation professionnalisante.</li>
            <li>Contribuer à l'épanouissement personnel et professionnel des participantes.</li>
          </ul>
        </section>

        {/* Section 3: Durée et déroulement de la formation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Durée et Déroulement de la Formation</h2>
          <p className="text-lg">
            La formation au sein de Nadi Assalam s'étale sur une période de <strong>9 mois</strong>, pendant lesquels les participantes apprennent :
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Les techniques de couture traditionnelle marocaine (caftans, djellabas, takchitas, etc.).</li>
            <li>Les bases et les avancées de la couture moderne (vêtements prêt-à-porter, accessoires, etc.).</li>
            <li>Des notions de design, de gestion et d'entrepreneuriat pour monter leur propre activité.</li>
          </ul>
        </section>

        {/* Section 4: Certification et reconnaissance */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Certification et Reconnaissance</h2>
          <p className="text-lg">
            À l'issue de la formation, un <strong>examen supervisé par l'Entraide Nationale</strong> est organisé. Les participantes qui réussissent obtiennent un diplôme officiel reconnu, ouvrant les portes d'un avenir prometteur dans le domaine de la couture.
          </p>
        </section>

        {/* Section 5: Après la formation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Après la Formation : Un Tremplin pour l'Autonomie</h2>
          <p className="text-lg">
            Le diplôme en main, les femmes formées par Nadi Assalam peuvent :
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Se regrouper en <strong>coopératives</strong> pour produire et vendre des créations artisanales et modernes.</li>
            <li>Lancer leurs propres projets depuis leur domicile, en proposant des services de couture adaptés aux besoins de leur communauté.</li>
          </ul>
        </section>

        {/* Section 6: Impact social et économique */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Impact Social et Économique</h2>
          <p className="text-lg">
            Le projet Nadi Assalam a un impact significatif :
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Il lutte contre la précarité en offrant aux femmes des opportunités concrètes de revenus.</li>
            <li>Il renforce la solidarité au sein des communautés en encourageant les collaborations locales.</li>
            <li>Il valorise le patrimoine vestimentaire marocain tout en intégrant des approches modernes.</li>
          </ul>
        </section>

        {/* Section 7: Conclusion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="text-lg">
            Avec Nadi Assalam, chaque femme formée devient une ambassadrice de la tradition et de la modernité, mais surtout, elle devient une actrice de changement. Ce projet, qui allie savoir-faire ancestral et innovation, transforme des vies et bâtit un avenir plus équitable.
          </p>
          <p className="text-lg font-semibold mt-4">
            Ensemble, soutenons ces femmes dans leur cheminement vers l'indépendance et l'épanouissement !
          </p>
        </section>
      </div>
    </div>
  );
}