// import Footer from '../../components/UIComponents/Footer';
// import Navbar from '../../components/UIComponents/Navbar';
import ProjectSection from '../../components/Forms/ProjectSection';

export default function page(){
    return(
        <>
            <div className="h-36 w-full bg-slate-400 flex justify-center items-center">
                <h1 className="text-center text-slate-50 text-3xl font-bold">Projets de la fondation</h1>
            </div>
            <div className="h-screen gap-6 w-full flex flex-col items-center p-6">
                <div className="flex flex-wrap justify-center gap-4">
                    <ProjectSection 
                        title="Project 1" 
                        description="Description of Project 1" 
                        backgroundImage="/path/to/image1.jpg" 
                    />
                    <ProjectSection 
                        title="Project 2" 
                        description="Description of Project 2" 
                        backgroundImage="/path/to/image2.jpg" 
                    />
                    <ProjectSection 
                        title="Project 3" 
                        description="Description of Project 3" 
                        backgroundImage="/path/to/image3.jpg" 
                    />
                    <ProjectSection 
                        title="Project 4" 
                        description="Description of Project 4" 
                        backgroundImage="/path/to/image4.jpg" 
                    />
                    <ProjectSection 
                        title="Project 5" 
                        description="Description of Project 5" 
                        backgroundImage="/path/to/image5.jpg" 
                    />
                    <ProjectSection 
                        title="Project 6" 
                        description="Description of Project 6" 
                        backgroundImage="/path/to/image6.jpg" 
                    />
                </div>
            </div>
        </>
    )
}

export const metadata = {
  title: 'Projets | Assalam',
  description: 'Découvrez les projets de la fondation Assalam',
};