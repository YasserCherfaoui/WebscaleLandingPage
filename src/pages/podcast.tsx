import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { PodcastAbout } from '../components/podcast/PodcastAbout';
import { PodcastFeatures } from '../components/podcast/PodcastFeatures';
import { PodcastFooter } from '../components/podcast/PodcastFooter';
import { PodcastForm } from '../components/podcast/PodcastForm';
import { PodcastHero } from '../components/podcast/PodcastHero';
import { PodcastNavbar } from '../components/podcast/PodcastNavbar';

export default function PodcastPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300 scroll-smooth" style={{ scrollBehavior: 'smooth' }} dir="rtl">
      {/* Sticky Navbar */}
      <PodcastNavbar />
      
      {/* Hero Section */}
      <PodcastHero />
      
      {/* Features Section */}
      <PodcastFeatures />
      
      {/* About Section */}
      <PodcastAbout />
      
      {/* Registration Form */}
      <PodcastForm />
      
      {/* Footer */}
      <PodcastFooter />
    </div>
  );
}
