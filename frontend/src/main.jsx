// cette partie du code est responsable de rendre l'application React dans le navigateur.
// Il importe les modules nécessaires, y compris React, ReactDOM, le composant App et les styles CSS.
// Ensuite, il utilise ReactDOM.createRoot pour créer une racine de rendu 
// et rend le composant App à l'intérieur de la balise <React.StrictMode> pour activer les vérifications supplémentaires en mode développement.  

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
