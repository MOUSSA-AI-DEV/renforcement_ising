/**
 * SOLUTION — Exercice 1 : Closures et fonctions d ordre superieur
 */

// 1. Calculateur de remise
function creerCalculateurRemise(taux) {
    return function(prix) {
        return prix * (1 - taux);
    };
}

const remise10 = creerCalculateurRemise(0.10);
const remise20 = creerCalculateurRemise(0.20);
console.log(remise10(1000)); // 900
console.log(remise20(1000)); // 800

// 2. Validateur
function creerValidateur(min, max) {
    return function(valeur) {
        return valeur >= min && valeur <= max;
    };
}

const validPrix = creerValidateur(10, 10000);
console.log(validPrix(500));  // true
console.log(validPrix(0));    // false
console.log(validPrix(15000)); // false

// 3. Compteur
function creerCompteur(initial = 0, pas = 1) {
    let valeurCourante = initial;
    const valeurInitiale = initial;

    return {
        incrementer() {
            valeurCourante += pas;
            return valeurCourante;
        },
        decrementer() {
            if (valeurCourante - pas >= 0) {
                valeurCourante -= pas;
            }
            return valeurCourante;
        },
        reset() {
            valeurCourante = valeurInitiale;
            return valeurCourante;
        },
        valeur() {
            return valeurCourante;
        }
    };
}

const c = creerCompteur(5, 2);
console.log(c.incrementer()); // 7
console.log(c.decrementer()); // 5
console.log(c.decrementer()); // 3
console.log(c.reset());       // 5

// 4. Memoize
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const cle = JSON.stringify(args);
        if (cache.has(cle)) {
            console.log("[CACHE HIT]");
            return cache.get(cle);
        }
        const resultat = fn.apply(this, args);
        cache.set(cle, resultat);
        return resultat;
    };
}

const fib = memoize(function(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
});

console.log(fib(10)); // 55 (calcule)
console.log(fib(10)); // 55 [CACHE HIT]
console.log(fib(8));  // 21 [CACHE HIT] - deja calcule lors de fib(10)

// 5. Pipeline
function creerPipeline(...fns) {
    return function(valeurInitiale) {
        return fns.reduce((valeur, fn) => fn(valeur), valeurInitiale);
    };
}

const pipeline = creerPipeline(
    x => x * 2,
    x => x + 10,
    x => x.toFixed(2)
);

console.log(pipeline(5));  // "20.00"
console.log(pipeline(15)); // "40.00"
