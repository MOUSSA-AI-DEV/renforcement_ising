/**
 * EXERCICE 1 — Algorithmes de tri : implementation et comparaison
 *
 * Implementer trois algorithmes de tri. Pour chaque tri :
 * - Implementer la fonction
 * - Compter le nombre de comparaisons effectuees
 * - Mesurer le temps d execution sur un tableau de 10 000 elements
 *
 * 1. bubbleSort(tableau)
 *    Tri a bulles. Optimise : s arreter si aucun echange n a eu lieu pendant une passe.
 *    Retourne : { triee: [...], comparaisons: N }
 *
 * 2. selectionSort(tableau)
 *    Tri par selection : trouver le minimum a chaque passe et le placer en tete.
 *    Retourne : { triee: [...], comparaisons: N }
 *
 * 3. mergeSort(tableau)
 *    Tri fusion recursif.
 *    Retourne le tableau trie (pas besoin de compter les comparaisons ici).
 *
 * 4. benchmarkTri()
 *    Generer un tableau de 10 000 entiers aleatoires entre 0 et 100 000.
 *    Executer les 3 algorithmes (sur des copies du tableau).
 *    Afficher pour chaque algo : temps d execution (ms) et nombre de comparaisons.
 *    Conclure sur l algo le plus efficace et pourquoi.
 *
 * 5. Application metier :
 *    Trier le tableau de commandes suivant par montant decroissant,
 *    puis par date ascendante en cas d egalite de montant.
 *    Utiliser mergeSort adapte pour les objets.
 *
 *    const commandes = [
 *      { id: 1, client: "Alpha", montant: 4500, date: "2024-03-15" },
 *      { id: 2, client: "Beta",  montant: 1200, date: "2024-01-20" },
 *      { id: 3, client: "Gamma", montant: 4500, date: "2024-01-10" },
 *      { id: 4, client: "Delta", montant: 8900, date: "2024-02-28" },
 *      { id: 5, client: "Epsilon", montant: 1200, date: "2024-03-01" },
 *    ];
 *    Resultat attendu : Delta (8900), Alpha (4500, mars), Gamma (4500, janv), ...
 */

// Votre code ici
