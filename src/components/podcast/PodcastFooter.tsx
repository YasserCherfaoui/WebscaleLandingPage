import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

export function PodcastFooter() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">
                WEBSCALE
              </span>
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              منصة رائدة في مجال التجارة الإلكترونية والذكاء الاصطناعي، مخصصة لأرباب الأعمال والمؤسسات. 
              نهدف إلى بناء مجتمع قوي من رواد الأعمال الذين يسعون إلى تطوير أعمالهم باستخدام أحدث التقنيات.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#fbbc05]" />
                <span className="text-neutral-300">info@webscale.dz</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#fbbc05]" />
                <span className="text-neutral-300">+213 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#fbbc05]" />
                <span className="text-neutral-300">الجزائر العاصمة، الجزائر</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  عن WEBSCALE
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  البودكاست
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  الفعاليات
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  الاستشارات
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  التدريب
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  المجتمع الحصري
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  المحتوى التعليمي
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-[#fbbc05] transition-colors duration-300">
                  الشراكات
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 space-x-reverse mb-4 md:mb-0">
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-[#fbbc05] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-[#fbbc05] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-[#fbbc05] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-[#fbbc05] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-[#fbbc05] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-neutral-400 text-sm">
                © 2024 WEBSCALE. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 p-6 bg-neutral-800 rounded-xl">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">ابق على اطلاع</h4>
            <p className="text-neutral-300 mb-4">
              اشترك في نشرتنا البريدية للحصول على آخر الأخبار والتحديثات
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-[#fbbc05] to-[#715a1a] hover:from-[#fbbc05]/90 hover:to-[#c89d1b]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
