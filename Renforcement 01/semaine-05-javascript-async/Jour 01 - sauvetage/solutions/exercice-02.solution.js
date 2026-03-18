/**
 * SOLUTION — Exercice 2 : Introduction aux Promises
 */

const baseDeTaches = [
    { id: 1, titre: "Concevoir la BDD", statut: "terminee", priorite: 3 },
    { id: 2, titre: "Developper l API", statut: "en_cours", priorite: 5 },
    { id: 3, titre: "Ecrire les tests", statut: "a_faire", priorite: 4 },
    { id: 4, titre: "Deployer en prod", statut: "a_faire", priorite: 5 },
];

function simulerAppelAPI(donnees, delaiMs, doitEchouer = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (doitEchouer) {
                reject(new Error("Erreur reseau simulee"));
            } else {
                resolve(donnees);
            }
        }, delaiMs);
    });
}

function getTache(id) {
    const tache = baseDeTaches.find(t => t.id === id);
    if (!tache) {
        return simulerAppelAPI(null, 200, true).catch(() => {
            return Promise.reject(new Error(`Tache introuvable : id=${id}`));
        });
    }
    return simulerAppelAPI({ ...tache }, 200);
}

function marquerTacheTerminee(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tache = baseDeTaches.find(t => t.id === id);
            if (!tache) {
                reject(new Error(`Tache introuvable : id=${id}`));
                return;
            }
            if (tache.statut === "terminee") {
                reject(new Error(`La tache #${id} est deja terminee`));
                return;
            }
            tache.statut = "terminee";
            resolve({ ...tache });
        }, 150);
    });
}

function getTachesParPriorite(prioriteMin) {
    const filtrees = baseDeTaches
        .filter(t => t.priorite >= prioriteMin)
        .sort((a, b) => b.priorite - a.priorite);
    return simulerAppelAPI(filtrees, 100);
}

function scenarioComplet() {
    console.log("Debut du scenario...");

    getTache(2)
        .then(tache => {
            console.log("Tache recuperee:", tache.titre, "| Statut:", tache.statut);
            if (tache.statut === "en_cours") {
                return marquerTacheTerminee(tache.id);
            }
            return tache;
        })
        .then(tache => {
            console.log("Tache mise a jour:", tache.titre, "| Nouveau statut:", tache.statut);
            return getTachesParPriorite(4);
        })
        .then(taches => {
            console.log("\nTaches de priorite >= 4 :");
            taches.forEach(t => {
                console.log(`  - [${t.statut}] ${t.titre} (priorite: ${t.priorite})`);
            });
        })
        .catch(err => {
            console.error("Erreur dans le scenario:", err.message);
        });
}

scenarioComplet();
