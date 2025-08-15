export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { prompt } = req.body;
  
    const apiKey = process.env.OPENAI_API_KEY;
  
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }
  
    try {
      const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }]
        })
      });
  
      const data = await openaiRes.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
  