import { useState, useEffect } from 'react'
import Header from './components/Header'
import QuoteCard from './components/QuoteCard'
import QuoteForm from './components/QuoteForm'

const API_URL = 'http://localhost:3002/api/quotes'
// Cette partie du code est le composant principal de l'application React.
// Il gère l'état de l'application, y compris les citations, la citation aléatoire, le mode d'affichage et le chargement.
// Il utilise useEffect pour charger les citations et la citation aléatoire au démarrage de l'application.
// Il définit des fonctions pour récupérer les citations, récupérer une citation aléatoire, afficher toutes les citations et ajouter une nouvelle citation.
// Enfin, il rend l'interface utilisateur en fonction du mode d'affichage sélectionné (aléatoire ou tout afficher) et inclut le formulaire pour ajouter une nouvelle citation.
function App() {
  const [quotes, setQuotes] = useState([])
  const [randomQuote, setRandomQuote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('random')
// Cette partie du code est responsable de récupérer les citations et la citation aléatoire.
// Il utilise la fonction fetch pour envoyer une requête HTTP GET à l'URL spécifiée.
// Il utilise la fonction useEffect pour exécuter la fonction fetchQuotes lorsque l'état de l'application change.
// Il utilise la fonction useState pour stocker les citations et la citation aléatoire.
// Il utilise la fonction setLoading pour définir le chargement des citations et la citation aléatoire.
// Il utilise la fonction setQuotes pour définir les citations.
// Il utilise la fonction setRandomQuote pour définir la citation aléatoire.
// Il utilise la fonction catch pour gérer les erreurs de récupération des citations et la citation aléatoire.
// Il utilise la fonction finally pour définir le chargement des citations et la citation aléatoire.
  const fetchQuotes = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      setQuotes(data)
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }
// Cette partie du code est responsable de récupérer une citation aléatoire.
// Il utilise la fonction fetch pour envoyer une requête HTTP GET à l'URL spécifiée.
// Il utilise la fonction useEffect pour exécuter la fonction fetchRandomQuote lorsque l'état de l'application change.
// Il utilise la fonction useState pour stocker la citation aléatoire.
// Il utilise la fonction setLoading pour définir le chargement de la citation aléatoire.
// Il utilise la fonction setRandomQuote pour définir la citation aléatoire.
// Il utilise la fonction catch pour gérer les erreurs de récupération de la citation aléatoire.
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch(`${API_URL}/random`)
      const data = await response.json()
      setRandomQuote(data)
      setViewMode('random')
    } catch (error) {
      console.error('Erreur:', error)
    }
  }
// Cette partie du code est responsable d'afficher toutes les citations.
// Il utilise la fonction setViewMode pour définir le mode d'affichage sur "all" 
// lorsque l'utilisateur clique sur le bouton "Tout afficher".
  const showAllQuotes = () => {
    setViewMode('all')
    fetchQuotes()
  }
// Cette partie du code est responsable d'ajouter une nouvelle citation.
// Il utilise la fonction fetch pour envoyer une requête POST à l'URL de l'API.
// Il utilise la fonction useEffect pour exécuter la fonction fetchRandomQuote lorsque l'état de l'application change.
// Il utilise la fonction useState pour stocker la citation aléatoire.
// Il utilise la fonction setLoading pour définir le chargement de la citation aléatoire.
// Il utilise la fonction setRandomQuote pour définir la citation aléatoire.
  const addQuote = async (newQuote) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newQuote)
      })
      const data = await response.json()
      setQuotes([...quotes, data])
      setRandomQuote(data)
      setViewMode('random')
    } catch (error) {
      console.error('Erreur:', error)
    }
  }
// Cette partie du code est responsable de l'état de l'application.
// Il utilise la fonction useState pour stocker les citations et la citation aléatoire.
// Il utilise la fonction useEffect pour exécuter la fonction fetchQuotes lorsque l'état de l'application change.
// Il utilise la fonction useEffect pour exécuter la fonction fetchRandomQuote lorsque l'état de l'application change.
  useEffect(() => {
    fetchQuotes()
    fetchRandomQuote()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {viewMode === 'random' ? '🎲 Citation du moment' : `📚 Toutes les citations (${quotes.length})`}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={fetchRandomQuote}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'random' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  🎲 Aléatoire
                </button>
                <button
                  onClick={showAllQuotes}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'all' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  📚 Tout afficher
                </button>
              </div>
            </div>

            {viewMode === 'random' ? (
              loading ? (
                <p className="text-center text-gray-500">Chargement...</p>
              ) : randomQuote ? (
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg p-8">
                  <p className="text-xl italic">"{randomQuote.text}"</p>
                  <p className="mt-4 text-right font-medium text-lg">— {randomQuote.author}</p>
                  <button
                    onClick={fetchRandomQuote}
                    className="mt-6 bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    🔄 Nouvelle citation
                  </button>
                </div>
              ) : null
            ) : (
              loading ? (
                <p className="text-center text-gray-500">Chargement...</p>
              ) : (
                <div className="grid gap-4">
                  {quotes.map((quote) => (
                    <QuoteCard key={quote.id} quote={quote} />
                  ))}
                </div>
              )
            )}
          </div>

          <div className="md:col-span-1">
            <QuoteForm onAddQuote={addQuote} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
