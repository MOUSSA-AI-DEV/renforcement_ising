/**
 * EXERCICE 1 — Chainer des Promises et gerer les erreurs
 *
 * Contexte :
 * Un pipeline de traitement de donnees RH qui :
 * 1. Recupere les employes depuis une API
 * 2. Enrichit les donnees avec les departements
 * 3. Calcule les statistiques
 * 4. Genere un rapport
 * Chaque etape peut echouer pour des raisons specifiques.
 *
 * Donnees simulees (a utiliser comme base) :
 */

const DB = {
    employes: [
        { id: 1, nom: "Amine", dept_id: 1, salaire: 8500, anciennete: 5 },
        { id: 2, nom: "Sara",  dept_id: 2, salaire: 6200, anciennete: 2 },
        { id: 3, nom: "Karim", dept_id: 1, salaire: 12000, anciennete: 8 },
        { id: 4, nom: "Nadia", dept_id: 3, salaire: 7800, anciennete: 3 },
        { id: 5, nom: "Omar",  dept_id: 2, salaire: 5500, anciennete: 1 },
    ],
    departements: [
        { id: 1, nom: "Technique", budget: 500000 },
        { id: 2, nom: "Marketing", budget: 200000 },
        { id: 3, nom: "Finance",   budget: 300000 },
    ],
};

/**
 * Fonctions a implementer :
 *
 * 1. fetchEmployes(filtreActifs = true)
 *    Retourne une Promise qui resout avec les employes apres 300ms.
 *    Si filtreActifs, ne retourner que ceux avec anciennete >= 1.
 *    Rejeter si DB.employes est vide avec "Aucun employe en base".
 *
 * 2. fetchDepartement(deptId)
 *    Retourne une Promise qui resout avec le departement apres 150ms.
 *    Rejeter avec "Departement introuvable : id=X" si non trouve.
 *
 * 3. enrichirEmployes(employes)
 *    Retourne une Promise qui ajoute l objet departement a chaque employe.
 *    Utiliser Promise.all pour fetcher tous les departements en parallele.
 *    (Pas d appel sequentiel — tout en parallele)
 *
 * 4. calculerStatistiques(employesEnrichis)
 *    Calcul SYNCHRONE (mais retourner une Promise pour l uniformite) :
 *    - salaireMoyen
 *    - salaireMin et salaireMax
 *    - repartitionParDept : { "Technique": 2, "Marketing": 2, ... }
 *    - massesSalarialesParDept : { "Technique": 20500, ... }
 *    - tauxOccupationBudget : { "Technique": "4.10%", ... }
 *      (masse salariale / budget du dept * 100)
 *
 * 5. genererRapportHTML(stats, employes)
 *    Retourne une Promise qui resout avec une chaine HTML :
 *    - Tableau HTML des employes (nom, dept, salaire, anciennete)
 *    - Section statistiques
 *    Rejeter si employes est vide.
 *
 * 6. pipelineRH()
 *    Chainer les 5 fonctions avec .then() uniquement (PAS async/await).
 *    Ajouter un .catch() final qui affiche l erreur et retourne un rapport vide.
 *    Afficher le rapport HTML dans la console.
 */

// Votre code ici
