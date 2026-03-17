const express = require('express');
const cors = require('cors');
const quotesRoutes = require('./routes/quotes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use('/api/quotes', quotesRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur la Developer Quotes API' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
