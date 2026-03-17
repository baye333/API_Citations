// Cette partie du code est responsable de la carte de citation.
// Il utilise la fonction quote pour afficher la citation.
// Il utilise la fonction author pour afficher l'auteur de la citation.
function QuoteCard({ quote }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500">
      <p className="text-lg text-gray-800 italic">"{quote.text}"</p>
      <p className="mt-4 text-right text-gray-600 font-bold text-indigo-500">
        — {quote.author}
      </p>
    </div>
  )
}

export default QuoteCard
