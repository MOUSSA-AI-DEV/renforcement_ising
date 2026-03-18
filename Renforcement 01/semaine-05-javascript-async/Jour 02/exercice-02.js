/**
 * EXERCICE 2 — Recherche binaire et applications
 *
 * 1. rechercheBinaire(tableau, cible)
 *    Le tableau est DEJA TRIE en ordre croissant.
 *    Retourne l index de la cible, ou -1 si non trouvee.
 *    Complexite attendue : O(log n)
 *
 * 2. recherchePremiereOccurrence(tableau, cible)
 *    Comme la recherche binaire mais retourne l index de la PREMIERE occurrence
 *    si la cible apparait plusieurs fois.
 *    (Ex: [1, 2, 2, 2, 3] chercher 2 => index 1)
 *
 * 3. rechercheInsertionPosition(tableau, valeur)
 *    Trouver la position ou inserer valeur pour garder le tableau trie.
 *    Ne pas inserer, juste retourner l index.
 *    (Ex: [1, 3, 5, 7] inserer 4 => index 2)
 *
 * 4. rechercheRangeCondition(tableau, condition)
 *    Trouver le premier et le dernier index satisfaisant la condition.
 *    La condition est vraie pour un bloc contigu de valeurs.
 *    Retourne { debut: i, fin: j } ou null si aucun.
 *    Ex : tableau = [10, 20, 30, 40, 50, 60], condition = x => x >= 25 && x <= 55
 *    => { debut: 2, fin: 4 } (30 a 50)
 *
 * 5. Application : systeme de reservation de sieges
 *    Un cinema a 500 sieges numerotes de 1 a 500.
 *    Les sieges disponibles sont stockes dans un tableau TRIE.
 *    Implementer :
 *
 *    reserverSieges(disponibles, nombreSieges)
 *      => Trouver la premiere plage de `nombreSieges` sieges consecutifs disponibles
 *      => Retourner les numeros reserves ou null si impossible
 *      => Utiliser la recherche binaire pour optimiser
 *
 *    Ex : disponibles = [1, 2, 3, 7, 8, 9, 10, 15, 16]
 *         reserverSieges(disponibles, 3) => [1, 2, 3] ou [7, 8, 9] ou [8, 9, 10]
 *         (retourner la premiere plage trouvee)
 */

// Votre code ici
