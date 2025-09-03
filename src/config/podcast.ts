// Environment configuration for the podcast landing page
export const config = {
  // Google Sheets Configuration
  googleSheets: {
    sheetId: process.env.GOOGLE_SHEET_ID || '',
    apiKey: process.env.GOOGLE_API_KEY || '',
    appsScriptUrl: process.env.GOOGLE_APPS_SCRIPT_URL || '',
  },

  // Platform Configuration
  platform: {
    url: process.env.PLATFORM_URL || 'https://webscale.dz',
    name: 'WEBSCALE',
    description: 'منصة التجارة الإلكترونية والذكاء الاصطناعي',
  },

  // Form Configuration
  form: {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    allowedFileTypes: ['pdf', 'doc', 'docx'],
    maxInterests: 8,
    minNameLength: 3,
    maxNameLength: 100,
  },

  // Validation Messages
  validation: {
    required: 'هذا الحقل مطلوب',
    email: 'البريد الإلكتروني غير صحيح',
    phone: 'رقم الهاتف غير صحيح',
    minLength: (field: string, length: number) => `${field} يجب أن يكون ${length} أحرف على الأقل`,
    maxLength: (field: string, length: number) => `${field} يجب أن يكون ${length} أحرف كحد أقصى`,
    fileSize: 'حجم الملف يجب أن يكون أقل من 5 ميجابايت',
    fileType: 'نوع الملف غير مسموح به',
  },

  // Success Messages
  success: {
    formSubmission: 'تم التسجيل بنجاح! ستتلقى دعوة خاصة عبر البريد الإلكتروني خلال 24 ساعة.',
  },

  // Error Messages
  error: {
    formSubmission: 'فشل في إرسال البيانات. يرجى المحاولة مرة أخرى.',
    serverError: 'حدث خطأ في الخادم. يرجى المحاولة مرة أخرى.',
    networkError: 'خطأ في الاتصال. يرجى التحقق من اتصالك بالإنترنت.',
  },
};

// Google Apps Script Code Template
export const googleAppsScriptTemplate = `
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    if (data.action === 'submitPodcastForm') {
      const formData = data.data;
      
      // Get the active spreadsheet
      const sheet = SpreadsheetApp.openById('${config.googleSheets.sheetId}').getActiveSheet();
      
      // Prepare row data
      const rowData = [
        formData.timestamp || new Date().toISOString(),
        formData.fullName,
        formData.email,
        formData.phone,
        formData.companyName,
        formData.jobTitle,
        formData.industry,
        formData.employeesCount,
        formData.experience,
        formData.interests.join(', '),
        formData.source || 'podcast-landing-page'
      ];
      
      // Append to sheet
      sheet.appendRow(rowData);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'تم التسجيل بنجاح'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'حدث خطأ في معالجة البيانات'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
`;

// Environment variables documentation
export const environmentVariables = {
  GOOGLE_SHEET_ID: 'Google Sheets spreadsheet ID for form submissions',
  GOOGLE_API_KEY: 'Google API key for Sheets API access',
  GOOGLE_APPS_SCRIPT_URL: 'Google Apps Script web app URL (optional fallback)',
  PLATFORM_URL: 'Main platform URL for invitation links',
};
