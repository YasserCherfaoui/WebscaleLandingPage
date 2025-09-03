import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function PodcastNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المميزات', href: '#features' },
    { label: 'عن WEBSCALE', href: '#about' },
    { label: 'التسجيل', href: '#register' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // 20 * 4 = 80px (h-20)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-700 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <img 
              src="/logo.png" 
              alt="WEBSCALE Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">
              WEBSCALE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-[#fbbc05] dark:hover:text-[#fbbc05] transition-all duration-300 font-medium text-lg hover:scale-105"
              >
                {item.label}
              </button>
            ))}
            <div className="mr-8"></div>
            <button 
              onClick={() => handleNavClick('#register')}
              className="bg-gradient-to-r from-[#fbbc05] to-[#715a1a] hover:from-[#fbbc05]/90 hover:to-[#c89d1b]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              سجل الآن
            </button>
          </div>

          {/* Tablet Navigation (simplified) */}
          <div className="hidden md:flex lg:hidden items-center space-x-8 space-x-reverse">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-[#fbbc05] dark:hover:text-[#fbbc05] transition-all duration-300 font-medium hover:scale-105"
              >
                {item.label}
              </button>
            ))}
            <div className="mr-6"></div>
            <button 
              onClick={() => handleNavClick('#register')}
              className="bg-gradient-to-r from-[#fbbc05] to-[#715a1a] hover:from-[#fbbc05]/90 hover:to-[#c89d1b]/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              سجل الآن
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-right text-neutral-700 dark:text-neutral-300 hover:text-[#fbbc05] dark:hover:text-[#fbbc05] transition-all duration-300 font-medium py-3 text-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg px-4"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('#register')}
                className="w-full bg-gradient-to-r from-[#fbbc05] to-[#715a1a] hover:from-[#fbbc05]/90 hover:to-[#c89d1b]/90 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-lg"
              >
                سجل الآن
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
