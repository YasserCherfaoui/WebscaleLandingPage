import { yupResolver } from '@hookform/resolvers/yup';
import { AlertCircle, CheckCircle, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

// Validation schema
const schema = yup.object({
  fullName: yup.string().required('الاسم الكامل مطلوب').min(3, 'الاسم يجب أن يكون 3 أحرف على الأقل'),
  email: yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
  phone: yup.string().required('رقم الهاتف مطلوب').matches(/^[0-9+\-\s()]+$/, 'رقم الهاتف غير صحيح'),
  companyName: yup.string().required('اسم الشركة مطلوب'),
  jobTitle: yup.string().required('المسمى الوظيفي مطلوب'),
  industry: yup.string().required('القطاع مطلوب'),
  employeesCount: yup.string().required('عدد الموظفين مطلوب'),
  experience: yup.string().required('الخبرة مطلوبة'),
  interests: yup.array().min(1, 'يجب اختيار اهتمام واحد على الأقل').required(),
  agreeToTerms: yup.boolean().oneOf([true], 'يجب الموافقة على الشروط').required()
}).required();

type FormData = yup.InferType<typeof schema>;

const industries = [
  'التجارة الإلكترونية',
  'التكنولوجيا',
  'الخدمات المالية',
  'التعليم',
  'الصحة',
  'السياحة',
  'الزراعة',
  'التصنيع',
  'البيع بالتجزئة',
  'أخرى'
];

const employeeCounts = [
  '1-5 موظفين',
  '6-20 موظف',
  '21-50 موظف',
  '51-100 موظف',
  '101-500 موظف',
  'أكثر من 500 موظف'
];

const experienceLevels = [
  'أقل من سنة',
  '1-3 سنوات',
  '4-7 سنوات',
  '8-15 سنة',
  'أكثر من 15 سنة'
];

const interests = [
  'الذكاء الاصطناعي',
  'التجارة الإلكترونية',
  'التسويق الرقمي',
  'إدارة الأعمال',
  'التكنولوجيا المالية',
  'التحول الرقمي',
  'الابتكار',
  'الاستراتيجية'
];

export function PodcastForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      interests: [],
      agreeToTerms: false
    }
  });

  const selectedInterests = watch('interests') || [];

    const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Use proxy in development, direct URL in production
    const isDevelopment = import.meta.env.DEV;
    const baseUrl = isDevelopment 
      ? '/api/google-apps-script' 
      : '/api/proxy-podcast-form';
    const scriptPath = isDevelopment 
      ? '/macros/s/AKfycbwdFPTrJSBw7Nr92cFHq1tyh9b_c4UyAWED90OA1oUsS4OZGBY3lGH9FKJWb1DnGAv6Cg/exec'
      : '';

    try {
      // Try direct fetch first
      const response = await fetch(`${baseUrl}${scriptPath}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'submitPodcastForm',
          data: {
            ...data,
            timestamp: new Date().toISOString(),
            source: 'podcast-landing-page'
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(result.message || 'فشل في إرسال البيانات');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // If direct fetch fails, try alternative approach
      try {
        // Try with different headers and JSON format
        const response = await fetch(`${baseUrl}${scriptPath}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            action: 'submitPodcastForm',
            data: {
              ...data,
              timestamp: new Date().toISOString(),
              source: 'podcast-landing-page'
            }
          })
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setSubmitStatus('success');
            reset();
          } else {
            throw new Error(result.message || 'فشل في إرسال البيانات');
          }
        } else {
          throw new Error('فشل في إرسال البيانات');
        }
      } catch (fallbackError) {
        console.error('Fallback submission error:', fallbackError);
        setSubmitStatus('error');
        setErrorMessage('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى لاحقاً.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestChange = (interest: string) => {
    const currentInterests = selectedInterests;
    if (currentInterests.includes(interest)) {
      setValue('interests', currentInterests.filter(i => i !== interest));
    } else {
      setValue('interests', [...currentInterests, interest]);
    }
  };

  return (
    <section id="register" className="py-20 px-4 bg-gradient-to-br from-[#fbbc05]/5 to-[#e0bb57]/5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            سجل للحصول على <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">دعوة خاصة</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">
            انضم إلى مجتمع WEBSCALE الحصري واحصل على وصول كامل للبودكاست مجانا
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700" data-aos="fade-up">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                تم التسجيل بنجاح!
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                شكراً لك! سنرسل لك دعوة خاصة للانضمام إلى مجتمع WEBSCALE عبر البريد الإلكتروني خلال 24 ساعة.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-gradient-to-r from-[#fbbc05] to-[#715a1a] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#fbbc05]/90 hover:to-[#c89d1b]/90 transition-all duration-300"
              >
                تسجيل جديد
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
                    placeholder="example@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
                    placeholder="+213 XXX XXX XXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    اسم الشركة *
                  </label>
                  <input
                    {...register('companyName')}
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
                    placeholder="اسم شركتك"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    المسمى الوظيفي *
                  </label>
                  <select
                    {...register('jobTitle')}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
                  >
                    <option value="">اختر المسمى الوظيفي</option>
                    <option value="المدير التنفيذي/ صاحب العمل">المدير التنفيذي/ صاحب العمل</option>
                    <option value="وظيفة أخرى">وظيفة أخرى</option>
                  </select>
                  {errors.jobTitle && (
                    <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    القطاع *
                  </label>
                  <select
                    {...register('industry')}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
                  >
                    <option value="">اختر القطاع</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    عدد الموظفين *
                  </label>
                  <select
                    {...register('employeesCount')}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
                  >
                    <option value="">اختر عدد الموظفين</option>
                    {employeeCounts.map((count) => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                  {errors.employeesCount && (
                    <p className="text-red-500 text-sm mt-1">{errors.employeesCount.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    الخبرة في مجال الأعمال *
                  </label>
                  <select
                    {...register('experience')}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-[#fbbc05] focus:border-transparent"
                  >
                    <option value="">اختر مستوى الخبرة</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  الاهتمامات (اختر ما ينطبق) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="w-4 h-4 text-[#fbbc05] border-neutral-300 rounded focus:ring-[#fbbc05]"
                      />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{interest}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && (
                  <p className="text-red-500 text-sm mt-1">{errors.interests.message}</p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2 space-x-reverse">
                <input
                  {...register('agreeToTerms')}
                  type="checkbox"
                  className="w-4 h-4 mt-1 text-[#fbbc05] border-neutral-300 rounded focus:ring-[#fbbc05]"
                />
                <label className="text-sm text-neutral-700 dark:text-neutral-300">
                  أوافق على <a href="#" className="text-[#fbbc05] hover:underline">الشروط والأحكام</a> و 
                  <a href="#" className="text-[#fbbc05] hover:underline"> سياسة الخصوصية</a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms.message}</p>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-700 dark:text-red-300">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#fbbc05] to-[#715a1a] hover:from-[#fbbc05]/90 hover:to-[#c89d1b]/90 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    سجل الآن واحصل على الدعوة
                  </>
                )}
              </button>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                * ستتلقى دعوة خاصة للانضمام إلى مجتمع WEBSCALE خلال 24 ساعة
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
