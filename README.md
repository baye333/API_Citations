# 🚀 Developer Quotes API

Une API REST minimaliste et performante construite avec **Node.js** et **Express**. Ce projet permet de gérer une collection de citations inspirantes pour les développeurs, avec un stockage persistant via un système de fichiers JSON.

---

## 📋 Fonctionnalités

L'API propose trois points d'entrée (endpoints) principaux :

* **🎲 Citation Aléatoire** : Récupérez une dose d'inspiration au hasard.
* **📚 Catalogue Complet** : Accédez à l'intégralité des citations stockées.
* **✍️ Contribution** : Ajoutez vos propres citations à la base de données.

---

## 🛠️ Technologies Utilisées

* **Runtime** : Node.js
* **Framework** : Express.js
* **Base de données** : Fichier JSON local (File System)
* **Format des données** : JSON

---

## 🚀 Installation et Démarrage

Suivez ces étapes pour lancer le projet localement :

1. **Cloner le dépôt** :
   ```bash
   git clone <url-du-depot>
   cd <nom-du-dossier>
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrer le serveur** :
   ```bash
   npm start
   ```

Le serveur sera accessible à l'adresse : `http://localhost:3002`

---

## 📡 API Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| `GET` | `/api/quotes` | Récupérer toutes les citations |
| `GET` | `/api/quotes/random` | Récupérer une citation aléatoire |
| `POST` | `/api/quotes` | Ajouter une nouvelle citation |

---

## 📦 Format des Données

### Citation

```json
{
  "id": 1,
  "text": "Code is like humor. When you have to explain it, it's bad.",
  "author": "Cory House"
}
```

### Ajouter une citation (POST)

```json
{
  "text": "Votre citation ici",
  "author": "Nom de l'auteur"
}
```

---

## 💡 Exemples d'Utilisation

### Récupérer toutes les citations

```bash
curl http://localhost:3002/api/quotes
```

### Récupérer une citation aléatoire

```bash
curl http://localhost:3002/api/quotes/random
```

### Ajouter une citation

```bash
curl -X POST http://localhost:3002/api/quotes \
  -H "Content-Type: application/json" \
  -d '{"text": "Premier pas vers le succès", "author": "Vous"}'
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour participer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.
