import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Proxy endpoint for NewsAPI
app.get('/api/news', async (req, res) => {
  try {
    const { q = 'dholera', from = '2026-02-17', sortBy = 'publishedAt' } = req.query;
    const apiKey = 'f6b55aa8e8d64f69ba580d57524a4b5f';
    
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&from=${from}&sortBy=${sortBy}&apiKey=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      return res.status(400).json(data);
    }
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to fetch news from NewsAPI' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`News API proxy available at http://localhost:${PORT}/api/news`);
});
