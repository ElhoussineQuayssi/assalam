// components/Sections/ActualitesSection.js
import Link from "next/link";

export default function ActualitesSection() {
  const actualites = [
    {
      id: 1,
      title: "Titre de l'actualité 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
      date: "12 Octobre 2023",
    },
    {
      id: 2,
      title: "Titre de l'actualité 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
      date: "15 Octobre 2023",
    },
    {
      id: 3,
      title: "Titre de l'actualité 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.",
      date: "20 Octobre 2023",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        {actualites.map((actualite) => (
          <Link
            key={actualite.id}
            href={`/actualites/${actualite.id}`}
            passHref
          >
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {actualite.title}
              </h3>
              <p className="text-slate-600">{actualite.description}</p>
              <div className="mt-4 flex items-center text-sm text-slate-500">
                <span className="mr-2">📅</span>
                <span>{actualite.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}