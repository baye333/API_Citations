import { useState } from 'react'

function QuoteForm({ onAddQuote }) {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim() || !author.trim()) return

    setLoading(true)
    await onAddQuote({ text, author })
    setText('')
    setAuthor('')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">➕ Ajouter une citation</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Citation</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Entrez votre citation..."
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Auteur</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Nom de l'auteur..."
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
      >
        {loading ? 'Ajout en cours...' : 'Ajouter'}
      </button>
    </form>
  )
}

export default QuoteForm
