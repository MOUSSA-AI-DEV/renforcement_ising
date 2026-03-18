/**
 * EXERCICE 2 — CRUD complet avec LocalStorage et synchronisation API
 *
 * Contexte :
 * Une application de gestion de taches qui :
 * - Stocke les donnees localement (LocalStorage) pour un acces hors-ligne
 * - Synchronise avec l API JSONPlaceholder quand c est possible
 *
 * Note : pour simuler LocalStorage en Node.js, utiliser l implementation ci-dessous.
 */

// Simulation LocalStorage pour Node.js
const localStorage = (() => {
    const store = {};
    return {
        getItem: key => store[key] || null,
        setItem: (key, val) => { store[key] = String(val); },
        removeItem: key => { delete store[key]; },
        clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    };
})();

/**
 * A implementer :
 *
 * class TacheManager
 *   CLES_STORAGE : { TACHES: "taches", SYNC: "derniere_sync", PENDING: "pending_actions" }
 *
 *   constructor()
 *     Charger les taches depuis le LocalStorage au demarrage
 *     Initialiser la file d actions en attente de sync
 *
 *   async chargerDepuisAPI()
 *     GET https://jsonplaceholder.typicode.com/todos?_limit=10
 *     Transformer chaque todo en : { id, titre: title, complete, userId, source: "api" }
 *     Sauvegarder dans LocalStorage et dans la propriete locale
 *     Mettre a jour la date de derniere sync
 *
 *   async creerTache(titre, userId = 1)
 *     Creer localement avec un id temporaire "temp-{timestamp}"
 *     Sauvegarder dans LocalStorage
 *     Envoyer un POST a l API de facon asynchrone
 *     Si l API repond : remplacer l id temporaire par l id reel, mettre a jour LS
 *     Si l API echoue : marquer la tache comme "pending_sync: true" et ajouter a la file
 *     Retourner la tache (avec l id temporaire, pas besoin d attendre l API)
 *
 *   async basculerComplete(id)
 *     Inverser la propriete "complete" localement et dans LS
 *     Envoyer un PUT a l API (pas besoin d attendre)
 *
 *   async supprimerTache(id)
 *     Supprimer localement et de LS
 *     Envoyer un DELETE a l API (pas besoin d attendre)
 *
 *   getTaches(filtre = "toutes")
 *     "toutes" | "actives" | "completees" | "pending_sync"
 *
 *   getStatistiques()
 *     { total, completees, actives, pendingSync, derniereSynchronisation }
 *
 *   async synchroniserPending()
 *     Rejouer les actions en attente (pending_sync)
 *     Supprimer de la file si succes
 *
 * Scenario de test (en async IIFE) :
 * 1. Charger les taches depuis l API
 * 2. Afficher les statistiques
 * 3. Creer 2 nouvelles taches
 * 4. Basculer la premiere tache comme complete
 * 5. Supprimer la derniere tache
 * 6. Afficher les statistiques finales
 * 7. Afficher le contenu du LocalStorage
 */

// Votre code ici
