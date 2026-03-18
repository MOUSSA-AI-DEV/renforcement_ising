/**
 * EXERCICE 2 — Introduction aux Promises
 *
 * Contexte :
 * Simuler des appels asynchrones a une API fictive de gestion de taches.
 * Utiliser des Promises pour gerer les delais et les erreurs.
 *
 * A implementer :
 *
 * 1. simulerAppelAPI(donnees, delaiMs, doitEchouer = false)
 *    Retourne une Promise qui :
 *    - Se resout apres delaiMs millisecondes avec les donnees
 *    - Rejette si doitEchouer est true avec une Error("Erreur reseau simulee")
 *
 * 2. getTache(id)
 *    Utilise simulerAppelAPI pour simuler la recuperation d une tache.
 *    Base de donnees locale (tableau d objets) :
 *    - id:1 titre:"Concevoir la BDD" statut:"terminee" priorite:3
 *    - id:2 titre:"Developper l API" statut:"en_cours" priorite:5
 *    - id:3 titre:"Ecrire les tests" statut:"a_faire" priorite:4
 *    - id:4 titre:"Deployer en prod" statut:"a_faire" priorite:5
 *    Si l id n existe pas : rejeter avec "Tache introuvable : id=X"
 *    Delai simule : 200ms
 *
 * 3. marquerTacheTerminee(id)
 *    Retourne une Promise qui met a jour le statut de la tache en "terminee".
 *    Echoue si la tache est deja "terminee".
 *    Delai simule : 150ms
 *
 * 4. getTachesParPriorite(prioriteMin)
 *    Retourne une Promise qui resout avec les taches ayant priorite >= prioriteMin,
 *    triees par priorite decroissante.
 *
 * 5. scenarioComplet()
 *    En utilisant .then() et .catch() (PAS async/await) :
 *    a. Recuperer la tache 2
 *    b. Si elle est "en_cours", la marquer comme terminee
 *    c. Recuperer toutes les taches de priorite >= 4
 *    d. Afficher un resume
 *    e. Gerer les erreurs avec .catch() global
 *
 * Lancer scenarioComplet() et observer l ordre d execution dans la console.
 */

// Votre code ici
