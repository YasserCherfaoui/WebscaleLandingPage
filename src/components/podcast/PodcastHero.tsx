import { Clock, Headphones, Play, Users } from 'lucide-react';

const scrollToForm = () => {
  const element = document.querySelector('#register');
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export function PodcastHero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 px-4 bg-gradient-to-br from-[#fbbc05]/10 via-white to-[#fbbc05]/5 dark:from-[#fbbc05]/5 dark:via-neutral-900 dark:to-[#fbbc05]/10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fbbc05]/10 text-[#fbbc05] rounded-full text-sm font-medium mb-6" data-aos="fade-up">
          <Headphones className="w-4 h-4" />
          بودكاست مجاني
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide mb-6" data-aos="fade-up" data-aos-delay="100">
          <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">
            بودكاست WEBSCALE
          </span>
          <br />
          <span className="text-neutral-800 dark:text-neutral-100">
            "AFRICAN BUSINESS VOICE"
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          انضم إلى مجتمع حصري من أرباب الأعمال واستمع إلى أحدث الرؤى والتقنيات
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="300">
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-[#fbbc05] mb-2" />
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">+500</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">رجل أعمال</div>
          </div>
          <div className="flex flex-col items-center">
            <Play className="w-8 h-8 text-[#fbbc05] mb-2" />
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">+50</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">حلقة</div>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-[#fbbc05] mb-2" />
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">أسبوعياً</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">محتوى جديد</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="400">
          <button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#fbbc05] to-[#715a1a] hover:from-[#fbbc05]/90 hover:to-[#c89d1b]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            سجل الآن للحصول على الدعوة
          </button>
          <button 
            onClick={scrollToForm}
            className="border-2 border-[#fbbc05] text-[#fbbc05] hover:bg-[#fbbc05] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            استمع إلى عينة
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700" data-aos="fade-up" data-aos-delay="500">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">موثوق به من قبل:</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300">شركات ناشئة</div>
            <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
            <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300">شركات متوسطة</div>
            <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
            <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300">شركات كبيرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}
