import { handlePodcastFormSubmission, PodcastFormData } from '../api/googleSheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'companyName', 'jobTitle', 'industry', 'employeesCount', 'experience', 'interests'];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return new Response(JSON.stringify({
          success: false,
          message: `الحقل ${field} مطلوب`
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'البريد الإلكتروني غير صحيح'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate phone format
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(body.phone)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'رقم الهاتف غير صحيح'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate interests array
    if (!Array.isArray(body.interests) || body.interests.length === 0) {
      return new Response(JSON.stringify({
        success: false,
        message: 'يجب اختيار اهتمام واحد على الأقل'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate terms agreement
    if (!body.agreeToTerms) {
      return new Response(JSON.stringify({
        success: false,
        message: 'يجب الموافقة على الشروط والأحكام'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare form data
    const formData: PodcastFormData = {
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      companyName: body.companyName.trim(),
      jobTitle: body.jobTitle.trim(),
      industry: body.industry,
      employeesCount: body.employeesCount,
      experience: body.experience,
      interests: body.interests,
      agreeToTerms: body.agreeToTerms,
      timestamp: body.timestamp || new Date().toISOString(),
      source: body.source || 'podcast-landing-page'
    };

    // Process the submission
    const result = await handlePodcastFormSubmission(formData);

    if (result.success) {
      return new Response(JSON.stringify({
        success: true,
        message: result.message
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: result.message
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('API Error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'حدث خطأ في الخادم. يرجى المحاولة مرة أخرى.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
