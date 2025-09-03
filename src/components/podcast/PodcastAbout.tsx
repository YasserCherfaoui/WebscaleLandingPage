import { Award, Building2, Target, Users } from 'lucide-react';

export function PodcastAbout() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
              عن منصة <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">WEBSCALE</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              WEBSCALE هي منصة رائدة في مجال التجارة الإلكترونية والذكاء الاصطناعي، مخصصة حصرياً لأرباب الأعمال والمؤسسات. 
              نهدف إلى بناء مجتمع قوي من رواد الأعمال الذين يسعون إلى تطوير أعمالهم باستخدام أحدث التقنيات.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-[#fbbc05] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                    مجتمع حصري لأرباب الأعمال
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    منصة مخصصة فقط لأصحاب المؤسسات والمدراء التنفيذيين
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#fbbc05] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                    شبكة علاقات قوية
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    تواصل مع خبراء الصناعة وأصحاب المشاريع الناجحة
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[#fbbc05] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                    محتوى عملي وقابل للتطبيق
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    استراتيجيات وأدوات يمكن تطبيقها فوراً في أعمالك
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#fbbc05]/10 to-[#e0bb57]/10 rounded-xl p-6 border border-[#fbbc05]/20">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                🎯 مهمتنا
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                تمكين أرباب الأعمال من الاستفادة من قوة الذكاء الاصطناعي والتجارة الإلكترونية لبناء أعمال مستدامة ومربحة
              </p>
            </div>
          </div>

          {/* Stats */}
          <div data-aos="fade-left">
            <div className="bg-gradient-to-br from-[#fbbc05]/10 to-[#e0bb57]/10 rounded-2xl p-8 border border-[#fbbc05]/20">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8 text-center">
                إحصائيات WEBSCALE
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#fbbc05] mb-2">+1000</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">عضو نشط</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#fbbc05] mb-2">+200</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">شركة مشاركة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#fbbc05] mb-2">+50</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">خبير متعاون</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#fbbc05] mb-2">+100</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">ورشة عمل</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#fbbc05]/20">
                <div className="flex items-center justify-center gap-2 text-[#fbbc05]">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">منصة معتمدة من وزارة التجارة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
