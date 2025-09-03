// Google Apps Script for WEBSCALE Podcast Form Submissions
// Deploy this as a web app and use the URL in your environment variables

function doPost(e) {
  try {
    // Set CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    if (data.action === 'submitPodcastForm') {
      const formData = data.data;
      
      // Get the active spreadsheet
      const sheet = SpreadsheetApp.openById('1JoTmycJwoLzwTGIOkWdeTQ0TxjgK8OADAK6JqA4p8-w').getActiveSheet();
      
      // Prepare row data in the correct order
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
      
      // Log the submission for debugging
      console.log('Form submission received:', formData);
      
      // Return success response with CORS headers
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'تم التسجيل بنجاح'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
    }
    
  } catch (error) {
    // Log error for debugging
    console.error('Error processing form submission:', error);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'حدث خطأ في معالجة البيانات'
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
  }
}

// Handle OPTIONS requests for CORS preflight
function doOptions() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  return ContentService.createTextOutput('')
    .setHeaders(headers);
}

// Optional: Function to set up the sheet headers
function setupSheetHeaders() {
  const sheet = SpreadsheetApp.openById('1JoTmycJwoLzwTGIOkWdeTQ0TxjgK8OADAK6JqA4p8-w').getActiveSheet();
  
  const headers = [
    'Timestamp',
    'Full Name',
    'Email',
    'Phone',
    'Company Name',
    'Job Title',
    'Industry',
    'Employees Count',
    'Experience',
    'Interests',
    'Source'
  ];
  
  // Set headers in the first row
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#fbbc05');
  
  console.log('Sheet headers set up successfully');
}

// Optional: Function to test the connection
function testConnection() {
  try {
    const sheet = SpreadsheetApp.openById('1JoTmycJwoLzwTGIOkWdeTQ0TxjgK8OADAK6JqA4p8-w').getActiveSheet();
    const lastRow = sheet.getLastRow();
    console.log('Connection successful. Last row:', lastRow);
    return true;
  } catch (error) {
    console.error('Connection failed:', error);
    return false;
  }
}
