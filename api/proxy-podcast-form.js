// Simple proxy function for production
// This can be deployed as a serverless function on Vercel, Netlify, etc.

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwdFPTrJSBw7Nr92cFHq1tyh9b_c4UyAWED90OA1oUsS4OZGBY3lGH9FKJWb1DnGAv6Cg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'حدث خطأ في معالجة البيانات' 
    });
  }
}
