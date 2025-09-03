# Setup Guide for WEBSCALE Podcast Landing Page

## Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Platform Configuration
PLATFORM_URL=https://webscale.dz
```

**Note:** The Google Apps Script URL is now hardcoded in the form component, so no additional environment variables are needed for form submission.

## Google Sheets Setup Instructions

### Google Apps Script Setup (Required)

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Copy the code from `GOOGLE_APPS_SCRIPT_CODE.js`
4. **Important:** The Sheet ID is already set to `1JoTmycJwoLzwTGIOkWdeTQ0TxjgK8OADAK6JqA4p8-w`
5. Deploy as web app:
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the web app URL and update it in `src/components/podcast/PodcastForm.tsx`

### Google Sheet Setup

1. Create a new Google Sheet with ID: `1JoTmycJwoLzwTGIOkWdeTQ0TxjgK8OADAK6JqA4p8-w`
2. Set up headers (optional - the script will work without them):
   - Timestamp | Full Name | Email | Phone | Company Name | Job Title | Industry | Employees Count | Experience | Interests | Source

## Testing the Application

1. Start development server:
```bash
npm run dev
```

2. Navigate to `/` (the podcast page is now the home page)
3. Test form submission
4. Check your Google Sheet for the submission

## Production Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

## Troubleshooting

### Common Issues:
1. **CORS Error**: Ensure Google Apps Script is deployed as a web app with "Anyone" access
2. **Form Not Submitting**: Check network tab for API errors
3. **Build Errors**: Check TypeScript compilation

### CORS Issue Fix:
If you encounter CORS errors like "Response to preflight request doesn't pass access control check":

**Development (Local):**
- The project now includes a Vite proxy configuration that handles CORS automatically
- No additional setup needed for local development

**Production:**
1. **Deploy the serverless function** (`api/proxy-podcast-form.js`) to your hosting platform
2. **For Vercel:** Place the file in `/api/` directory
3. **For Netlify:** Place the file in `/functions/` directory
4. **The form automatically detects environment** and uses the appropriate endpoint

**Alternative: Redeploy Google Apps Script**
1. **Redeploy your Apps Script** with the updated code
2. **Make sure the Apps Script has the correct CORS headers** (already included in the code)
3. **Update the form URL** with the new deployment URL
4. **Clear browser cache** and try again

**The form includes a fallback mechanism** that tries alternative submission methods if the primary method fails. Both methods use JSON format with proper headers.

### Debug Mode:
Add `DEBUG=true` to environment variables for detailed logging.

## Support

For technical support:
- Email: support@webscale.dz
- Documentation: [docs.webscale.dz](https://docs.webscale.dz)
