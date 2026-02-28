import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection.tsx'
import { StatsSection } from './components/StatsSection.tsx'
import { ServicesSection } from './components/ServicesSection.tsx'
import { AboutSection } from './components/AboutSection.tsx'
import { TestimonialsSection } from './components/TestimonialsSection.tsx'
import { ContactSection } from './components/ContactSection.tsx'
import { WhatsAppButton } from './components/WhatsAppButton.tsx'
import { GalleryPage } from './components/GalleryPage.tsx'


function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </main>
  );
}

export default App;
