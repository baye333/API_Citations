// Cette route est responsable de gérer les endpoints de la base de données
// de citations. Elle lit et écrit les données à partir d'un fichier JSON.
// Les endpoints disponibles sont :
// - GET /api/quotes : Récupérer toutes les citations
// - GET /api/quotes/random : Récupérer une citation aléatoire
// - POST /api/quotes : Ajouter une nouvelle citation

const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/quotes.json');
// Cette partie du code est responsable de lire et d'écrire les données à partir d'un fichier JSON.
// La fonction readQuotes lit les données du fichier JSON et les retourne sous forme d'objet JavaScript.
function readQuotes() {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
}
// La fonction writeQuotes prend un tableau de citations et les écrit dans le fichier JSON 
// en formatant les données avec une indentation de 2 espaces pour une meilleure lisibilité.

function writeQuotes(quotes) {
  fs.writeFileSync(dataPath, JSON.stringify(quotes, null, 2));
}
// Cette partie du code est responsable de définir les endpoints de l'API pour gérer les citations.
// Elle utilise la fonction router.get pour définir les endpoints GET /api/quotes et /api/quotes/random.
// Elle utilise la fonction router.post pour définir l'endpoint POST /api/quotes.
router.get('/', (req, res) => {
  const quotes = readQuotes();
  res.json(quotes);
});
// Cette partie du code est responsable de récupérer une citation aléatoire.
// Elle utilise la fonction readQuotes pour lire les données du fichier JSON.
// Elle utilise la fonction Math.random pour générer un nombre aléatoire entre 0 et la longueur de l'array.
// Elle utilise la fonction Math.floor pour arrondir le nombre aléatoire à l'entier le plus proche.
// Elle utilise la fonction res.json pour renvoyer la citation aléatoire au client.
router.get('/random', (req, res) => {
  const quotes = readQuotes();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Cette partie du code est responsable de ajouter une nouvelle citation.
// Elle utilise la fonction readQuotes pour lire les données du fichier JSON.
// Elle utilise la fonction req.body pour récupérer les données de la requête POST.
// Elle utilise la fonction writeQuotes pour écrire les données du fichier JSON.
// Elle utilise la fonction res.status pour renvoyer le statut HTTP 201 au client.
// Elle utilise la fonction res.json pour renvoyer la nouvelle citation au client.
router.post('/', (req, res) => {
  const quotes = readQuotes();
  const { text, author } = req.body;

  if (!text || !author) {
    return res.status(400).json({ error: 'text and author are required' });
  }

  const newQuote = {
    id: quotes.length + 1,
    text,
    author
  };

  quotes.push(newQuote);
  writeQuotes(quotes);

  res.status(201).json(newQuote);
});

module.exports = router;
