import AboutUs from '@/components/Sections/AboutUs';
import Actualites from '@/components/Sections/Actualites';
import Bar from '@/components/Sections/Bar';
import Hero from '@/components/Sections/Hero';
import Projects from '@/components/Sections/Projects';
import Vision from '@/components/Sections/Vision';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="vision" className="section">
        <Vision />
      </section>
      <section id="about" className="section">
        <AboutUs />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="actualites" className="section">
        <Actualites />
      </section>
      <section id="bar" className="section">
        <Bar />
      </section>
    </>
  );
} 