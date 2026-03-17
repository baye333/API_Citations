const express = require('express');
const cors = require('cors');
const path = require('path');
const quotesRoutes = require('./routes/quotes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/quotes', quotesRoutes);

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Fallback to index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
