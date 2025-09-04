import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>بودكاست WEBSCALE - AFRICAN BUSINESS VOICE | انضم إلى مجتمع أرباب الأعمال</title>
        <meta name="description" content="انضم إلى مجتمع WEBSCALE الحصري واحصل على وصول كامل للبودكاست مجاناً. بودكاست AFRICAN BUSINESS VOICE يقدم رؤى عملية وتجارب واقعية من خبراء في مختلف القطاعات." />
        <meta name="keywords" content="بودكاست, WEBSCALE, AFRICAN BUSINESS VOICE, أرباب الأعمال, مجتمع حصري, الجزائر, تجارة إلكترونية, ذكاء اصطناعي" />
        
        {/* Open Graph */}
        <meta property="og:title" content="بودكاست WEBSCALE - AFRICAN BUSINESS VOICE | انضم إلى مجتمع أرباب الأعمال" />
        <meta property="og:description" content="انضم إلى مجتمع WEBSCALE الحصري واحصل على وصول كامل للبودكاست مجاناً. بودكاست AFRICAN BUSINESS VOICE يقدم رؤى عملية وتجارب واقعية من خبراء في مختلف القطاعات." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webscale-landing-page.vercel.app/" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:site_name" content="WEBSCALE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="بودكاست WEBSCALE - AFRICAN BUSINESS VOICE | انضم إلى مجتمع أرباب الأعمال" />
        <meta name="twitter:description" content="انضم إلى مجتمع WEBSCALE الحصري واحصل على وصول كامل للبودكاست مجاناً. بودكاست AFRICAN BUSINESS VOICE يقدم رؤى عملية وتجارب واقعية من خبراء في مختلف القطاعات." />
        <meta name="twitter:image" content="/logo.png" />
        
        {/* Additional */}
        <meta name="theme-color" content="#fbbc05" />
        <meta name="msapplication-TileColor" content="#fbbc05" />
        <meta name="apple-mobile-web-app-title" content="WEBSCALE Podcast" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://webscale-landing-page.vercel.app/" />
      </Helmet>
      
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
    </>
  );
}
