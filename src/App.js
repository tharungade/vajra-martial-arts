import './App.css';
import { HeroSection } from './components/HeroSection.tsx'
import { ServicesSection } from './components/ServicesSection.tsx'
import { AboutSection } from './components/AboutSection.tsx'
import { TestimonialsSection } from './components/TestimonialsSection.tsx'
import { ContactSection } from './components/ContactSection.tsx'


function App() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}

export default App;
