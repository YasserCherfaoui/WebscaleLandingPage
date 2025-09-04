import {
    BotMessageSquare,
    Globe,
    Headphones,
    ShieldHalf,
    TrendingUp,
    Users
} from 'lucide-react';

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

const features = [
  {
    icon: BotMessageSquare,
    title: "محتوى متخصص",
    description: "حلقات مخصصة لأرباب الأعمال حول في مواضيع متخصصة تهمهم"
  },
  {
    icon: ShieldHalf,
    title: "مجتمع حصري",
    description: "انضم إلى مجتمع مغلق من أرباب الأعمال فقط، حيث يمكنك مشاركة الخبرات وبناء شراكات استراتيجية"
  },
  {
    icon: Users,
    title: "شبكة علاقات",
    description: "تواصل مباشر مع الخبراء وأصحاب المشاريع الناجحة"
  },
  {
    icon: Headphones,
    title: "استماع مرن",
    description: "استمع إلى الحلقات في أي وقت ومن أي مكان"
  },
  {
    icon: TrendingUp,
    title: "نتائج عملية",
    description: "نحن لا نبيع حلاً جاهزًا، بل نمكّن القادة من الفهم العميق وصنع قرارات ذكية بأنفسهم."
  },
  {
    icon: Globe,
    title: "رؤى عالمية",
    description: "اطلع على أفضل الممارسات العالمية مع تطبيقها على السياق المحلي الجزائري"
  }
];

export function PodcastFeatures() {
  return (
    <section id="features" className="py-20 px-4 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            لماذا بودكاست <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">WEBSCALE</span>؟
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            اكتشف كيف يمكن لهذا البودكاست أن يحدث فرقاً حقيقياً في نمو أعمالك
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-neutral-200 dark:border-neutral-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              جاهز للانضمام إلى مجتمع WEBSCALE؟
            </h3>
            <p className="text-lg mb-6 opacity-90">
              سجل الآن واحصل على دعوة خاصة للانضمام إلى مجتمعنا الحصري
            </p>
            <button 
              onClick={scrollToForm}
              className="bg-white text-[#fbbc05] px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-300"
            >
              سجل الآن مجاناً
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
