export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { prompt } = req.body;
  
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
  
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
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!openaiRes.ok) {
        const errorData = await openaiRes.json();
        console.error('OpenAI API Error:', errorData);
        return res.status(openaiRes.status).json({ error: errorData.error || 'OpenAI API error' });
      }
  
      const data = await openaiRes.json();
      
      // Log the response for debugging
      console.log('OpenAI Response:', JSON.stringify(data, null, 2));
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
  