/**
 * EXERCICE 3 — File d attente asynchrone avec controle de concurrence
 *
 * Contexte :
 * Un systeme de traitement de commandes qui ne doit pas traiter plus
 * de N commandes simultanement (pour ne pas surcharger le serveur).
 *
 * A implementer :
 *
 * class AsyncQueue
 *   constructor(concurrenceMax)
 *     concurrenceMax : nombre maximum de taches en parallele
 *   enqueue(tacheFn)
 *     tacheFn est une fonction qui retourne une Promise
 *     Retourne une Promise qui resout avec le resultat de tacheFn
 *     Si le nombre de taches actives est < concurrenceMax, executer immediatement
 *     Sinon, mettre en attente et executer quand une place se libere
 *   getStats()
 *     Retourne { actives: N, enAttente: N, terminees: N }
 *
 * function traiterCommande(id, dureeMs)
 *   Simule le traitement d une commande
 *   Resout apres dureeMs ms avec { id, statut: "traitee", duree: dureeMs }
 *   10% de chance de rejeter avec "Erreur traitement commande #id"
 *
 * Scenario de test :
 * 1. Creer une AsyncQueue avec concurrenceMax = 2
 * 2. Enqueuer 8 commandes avec des durees aleatoires (100-500ms)
 * 3. Afficher les stats apres chaque enqueue (combien actives vs en attente)
 * 4. Gerer les erreurs individuellement (une commande qui echoue ne bloque pas les autres)
 * 5. Afficher les resultats au fur et a mesure que les commandes terminent
 * 6. Afficher les stats finales
 */

// Votre code ici
