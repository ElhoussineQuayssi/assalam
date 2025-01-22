import ActualitesSection from '@/components/Sections/ActualitesSection';

export default function ActualitesPage() {
  return (
    <>
      <div className="h-36 w-full bg-slate-400 flex justify-center items-center">
        <h1 className="text-center text-slate-50 text-3xl font-bold">
        Découvrez les dernières actualités de notre fondation
        </h1>
      </div>
      <div className="min-h-screen w-full flex flex-col items-center p-6">
        <div className="w-full">
          <ActualitesSection />
        </div>
      </div>
    </>
  );
}