import './App.css';
import { HeroSection } from './components/HeroSection.tsx'
import { StatsSection } from './components/StatsSection.tsx'
import { ServicesSection } from './components/ServicesSection.tsx'
import { AboutSection } from './components/AboutSection.tsx'
import { TestimonialsSection } from './components/TestimonialsSection.tsx'
import { ContactSection } from './components/ContactSection.tsx'
import { WhatsAppButton } from './components/WhatsAppButton.tsx'


function App() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}

export default App;
