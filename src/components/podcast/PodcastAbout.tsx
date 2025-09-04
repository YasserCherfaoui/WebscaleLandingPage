import { Building2, Target, Users } from 'lucide-react';

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
              هي مجتمع حصري خصصناه لأرباب العمل انطلاقا من قناعتنا بأن تسريع نمو المؤسسات الجزائرية لا يتحقق إلا من خلال ابتكار المقاول في استخدام التكنولوجيا. ومن هذا المنطلق، تهدف المبادرة إلى مرافقة المقاول الجزائري وتمكينه من فهم وتبنّي الأدوات التكنولوجية الحديثة، بما يُمكّنه من مضاعفة أثر مشاريعه ورفع قدرته التنافسية، كما نهدف لتطوير الفكر والقدرات العقلية لاصحاب المؤسسات والمسيرين من اجل نجاح مشاريعهم بشكل أفضل واسرع وان تصبح واب سكايل مرجع لبيئة الاعمال في الجزائر
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
                    تواصل مع الخبراء وأصحاب المشاريع الناجحة بشكل مباشر
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
                واب سكايل هي المنصة الجزائرية التي تمكّن أصحاب المؤسسات و مسيريها من تنمية قدراتهم الفكرية وتحويل التكنولوجيا والذكاء الاصطناعي إلى ابتكار عملي يضاعف أثر مشاريعهم ويعزز تنافسيتهم
              </p>
            </div>
          </div>

          {/* Podcast Info */}
          <div data-aos="fade-left">
            <div className="bg-gradient-to-br from-[#fbbc05]/10 to-[#e0bb57]/10 rounded-2xl p-8 border border-[#fbbc05]/20">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 text-center">
                عن البودكاست
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                بالإضافة إلى الخدمات المتنوعة التي نقدمها لمجتمعنا الخاص، نقدم لكم بودكاست <strong>"AFRICAN BUSINESS VOICE"</strong> لنغوص بكم في التجارب العملية والمحتوى العملي المباشر مع مجموعة من الخبراء في مختلف القطاعات
              </p>

              <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-3">حلقات البودكاست</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  بمناسبة معرض التجارة البينية الافريقية خصصنا لكم الحلقات الاولى من البودكاست حول اهمية المشاركة في هذا المعرض وفرص ولوج الاسواق الافريقية وتصدير المنتجات والسلع وحتى الخدمات الجزائرية نحو مختلف دول قارتنا الافريقية
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] rounded-lg p-4 text-white text-center">
                <p className="font-semibold">
                  هذا البودكاست يأتيكم برعاية وزارة اقتصاد المعرفة والشركات الناشئة والشركات المصغرة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
