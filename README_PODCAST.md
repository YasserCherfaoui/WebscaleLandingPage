# WEBSCALE Podcast Landing Page

صفحة هبوط مخصصة لبودكاست WEBSCALE مع نظام تسجيل متكامل يربط مع Google Sheets.

## المميزات

- ✅ تصميم متجاوب مع دعم RTL للغة العربية
- ✅ نموذج تسجيل شامل مع التحقق من صحة البيانات
- ✅ ربط مباشر مع Google Sheets لحفظ البيانات
- ✅ إرسال دعوات تلقائية عبر البريد الإلكتروني
- ✅ دعم الوضع المظلم/الفاتح
- ✅ رسوم متحركة سلسة
- ✅ تحسين SEO

## المتطلبات

- Node.js 18+
- npm أو yarn
- حساب Google مع Google Sheets API مفعل
- خدمة بريد إلكتروني (SendGrid, Mailgun, إلخ)

## التثبيت

1. استنسخ المشروع:
```bash
git clone <repository-url>
cd webscale
```

2. ثبت التبعيات:
```bash
npm install
```

3. أنشئ ملف `.env.local`:
```env
# Google Sheets Configuration
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_API_KEY=your_google_api_key
GOOGLE_APPS_SCRIPT_URL=your_apps_script_url

# Platform Configuration
PLATFORM_URL=https://webscale.dz

# Email Configuration
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_email_api_key
EMAIL_DOMAIN=your_domain
EMAIL_FROM=noreply@webscale.dz
EMAIL_FROM_NAME=WEBSCALE Team
```

## إعداد Google Sheets

### الطريقة الأولى: Google Sheets API

1. اذهب إلى [Google Cloud Console](https://console.cloud.google.com/)
2. أنشئ مشروع جديد أو اختر مشروع موجود
3. فعّل Google Sheets API
4. أنشئ مفتاح API واحفظه في `GOOGLE_API_KEY`
5. أنشئ جدول بيانات جديد واحفظ ID في `GOOGLE_SHEET_ID`

### الطريقة الثانية: Google Apps Script (مستحسن)

1. اذهب إلى [Google Apps Script](https://script.google.com/)
2. أنشئ مشروع جديد
3. انسخ الكود من `src/config/podcast.ts` (googleAppsScriptTemplate)
4. استبدل `YOUR_SHEET_ID` بمعرف جدول البيانات الخاص بك
5. انشر المشروع كتطبيق ويب
6. احفظ URL في `GOOGLE_APPS_SCRIPT_URL`

## تشغيل المشروع

### التطوير
```bash
npm run dev
```

### البناء للإنتاج
```bash
npm run build
```

### معاينة الإنتاج
```bash
npm run preview
```

## هيكل المشروع

```
src/
├── pages/
│   └── podcast.tsx              # الصفحة الرئيسية للبودكاست
├── components/
│   └── podcast/
│       ├── PodcastHero.tsx       # قسم الترحيب
│       ├── PodcastFeatures.tsx   # مميزات البودكاست
│       ├── PodcastAbout.tsx     # معلومات عن المنصة
│       ├── PodcastForm.tsx       # نموذج التسجيل
│       └── PodcastFooter.tsx    # تذييل الصفحة
├── api/
│   ├── googleSheets.ts          # خدمة Google Sheets
│   └── submit-podcast-form.ts   # نقطة نهاية API
├── config/
│   └── podcast.ts              # إعدادات التطبيق
└── types/
    └── podcast.ts              # أنواع TypeScript
```

## حقول النموذج

| الحقل | النوع | مطلوب | الوصف |
|-------|-------|-------|-------|
| fullName | نص | ✅ | الاسم الكامل |
| email | بريد إلكتروني | ✅ | البريد الإلكتروني |
| phone | هاتف | ✅ | رقم الهاتف |
| companyName | نص | ✅ | اسم الشركة |
| jobTitle | نص | ✅ | المسمى الوظيفي |
| industry | قائمة | ✅ | القطاع/المجال |
| employeesCount | قائمة | ✅ | عدد الموظفين |
| experience | قائمة | ✅ | الخبرة في مجال الأعمال |
| interests | قائمة متعددة | ✅ | الاهتمامات |
| agreeToTerms | منطقي | ✅ | الموافقة على الشروط |

## تخصيص التصميم

### الألوان
```css
--primary: #fbbc05;
--primary-gradient: linear-gradient(to right, #fbbc05, #e0bb57);
--dark-bg: #111827;
--light-bg: #f9fafb;
```

### الخطوط
- Poppins (الخط الرئيسي)
- دعم كامل للغة العربية

### الاستجابة
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## النشر

### Vercel (مستحسن)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# ارفع مجلد dist إلى Netlify
```

### Docker
```bash
docker build -t webscale-podcast .
docker run -p 3000:3000 webscale-podcast
```

## الأمان

- ✅ التحقق من صحة البيانات على العميل والخادم
- ✅ حماية من CSRF
- ✅ تشفير البيانات الحساسة
- ✅ تقييد معدل الطلبات
- ✅ فلترة المدخلات

## المراقبة والتحليلات

### Google Analytics
```javascript
// أضف في index.html
gtag('config', 'GA_MEASUREMENT_ID');
```

### Error Tracking
```javascript
// أضف في main.tsx
window.addEventListener('error', (e) => {
  // إرسال الأخطاء إلى خدمة المراقبة
});
```

## الدعم

للمساعدة والدعم التقني:
- البريد الإلكتروني: support@webscale.dz
- التوثيق: [docs.webscale.dz](https://docs.webscale.dz)

## الترخيص

هذا المشروع مرخص تحت رخصة MIT. راجع ملف `LICENSE` للتفاصيل.

## المساهمة

نرحب بالمساهمات! يرجى:

1. Fork المشروع
2. أنشئ فرع للميزة الجديدة
3. اكتب الاختبارات
4. أرسل Pull Request

## التحديثات

### v1.0.0
- ✅ إطلاق أولي
- ✅ نموذج تسجيل كامل
- ✅ ربط Google Sheets
- ✅ دعم RTL
- ✅ تصميم متجاوب


.