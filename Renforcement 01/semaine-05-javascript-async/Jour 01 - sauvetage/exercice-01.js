/**
 * EXERCICE 1 — Closures et fonctions d ordre superieur
 *
 * Contexte :
 * Un systeme de calcul de prix avec des regles de remise configurables.
 * Vous allez utiliser les closures pour "capturer" une configuration
 * et retourner des fonctions specialisees.
 *
 * A implementer :
 *
 * 1. creerCalculateurRemise(taux)
 *    Retourne une fonction qui prend un prix et applique le taux de remise capture.
 *    Ex : const remise10 = creerCalculateurRemise(0.10)
 *         remise10(1000) => 900
 *
 * 2. creerValidateur(min, max)
 *    Retourne une fonction qui verifie si une valeur est dans l intervalle [min, max].
 *    Ex : const validPrix = creerValidateur(10, 10000)
 *         validPrix(500) => true
 *         validPrix(0)   => false
 *
 * 3. creerCompteur(initial = 0, pas = 1)
 *    Retourne un objet avec les methodes : incrementer(), decrementer(), reset(), valeur()
 *    La valeur ne peut pas descendre sous 0.
 *    Ex : const c = creerCompteur(5, 2)
 *         c.incrementer() => 7
 *         c.decrementer() => 5
 *         c.reset()       => revient a 5 (valeur initiale)
 *
 * 4. memoize(fn)
 *    Prend une fonction et retourne une version "memoizee" qui met en cache les resultats.
 *    Si la fonction est appelee avec les memes arguments, retourner le resultat cache.
 *    Afficher "[CACHE HIT]" si le resultat vient du cache.
 *    Ex : const fib = memoize((n) => n <= 1 ? n : fib(n-1) + fib(n-2))
 *         fib(10) => 55 (calcule)
 *         fib(10) => 55 [CACHE HIT]
 *
 * 5. creerPipeline(...fns)
 *    Retourne une fonction qui applique les fonctions dans l ordre, en passant
 *    le resultat de l une a l autre.
 *    Ex : const pipeline = creerPipeline(
 *           x => x * 2,
 *           x => x + 10,
 *           x => x.toFixed(2)
 *         )
 *         pipeline(5) => "20.00"
 *
 * Tests : ecrire les appels de test sous chaque implementation.
 */

// Votre code ici
