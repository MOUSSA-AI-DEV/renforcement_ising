/**
 * EXERCICE 3 — Recursivite avancee
 *
 * 1. sommeDigitale(n)
 *    Somme recursive des chiffres d un nombre jusqu a obtenir un seul chiffre.
 *    Ex : sommeDigitale(9875) => 9+8+7+5=29 => 2+9=11 => 1+1=2 => retourner 2
 *
 * 2. aplatirProfond(tableau)
 *    Aplatir recursivement un tableau imbrique a profondeur quelconque.
 *    Sans utiliser Array.flat().
 *    Ex : aplatirProfond([1, [2, [3, [4, [5]]]]]) => [1, 2, 3, 4, 5]
 *         aplatirProfond([[1, 2], [3, [4, 5]], 6]) => [1, 2, 3, 4, 5, 6]
 *
 * 3. genererPermutations(tableau)
 *    Generer toutes les permutations d un tableau.
 *    Ex : genererPermutations([1, 2, 3]) => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 4. parcourirArbre(noeud)
 *    Structure d arbre :
 *    const arbre = {
 *      nom: "CEO",
 *      enfants: [
 *        { nom: "CTO", enfants: [
 *            { nom: "Dev1", enfants: [] },
 *            { nom: "Dev2", enfants: [] }
 *          ]
 *        },
 *        { nom: "CFO", enfants: [
 *            { nom: "Comptable", enfants: [] }
 *          ]
 *        }
 *      ]
 *    };
 *    Implementer :
 *    a. trouverNoeud(arbre, nom) => retourner le noeud avec ce nom, ou null
 *    b. profondeurMax(arbre) => retourner la profondeur maximale de l arbre
 *    c. listerFeuilles(arbre) => retourner les noeuds sans enfants
 *    d. compterNoeuds(arbre) => retourner le nombre total de noeuds
 *
 * 5. problemeSacADos(objets, capaciteMax)
 *    Algorithme du sac a dos recursif (force brute, pas d optimisation).
 *    Chaque objet a : { nom, poids, valeur }
 *    Trouver la combinaison qui maximise la valeur totale
 *    sans depasser capaciteMax en poids.
 *    Retourne : { objetsChoisis: [...], valeurTotale: N, poidsTotal: N }
 *
 *    objets = [
 *      { nom: "Laptop", poids: 3, valeur: 1500 },
 *      { nom: "Tablette", poids: 1, valeur: 600 },
 *      { nom: "Telephone", poids: 1, valeur: 800 },
 *      { nom: "Chargeur", poids: 1, valeur: 200 },
 *      { nom: "Livre", poids: 2, valeur: 100 },
 *    ];
 *    capaciteMax = 4
 */

// Votre code ici
