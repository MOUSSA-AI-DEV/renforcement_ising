/**
 * EXERCICE 2 - Moteur de recherche et filtrage d'un catalogue RH
 *
 * Contexte :
 * Vous developpez le module de recherche d'un SIRH (Systeme d'Information
 * Ressources Humaines). Le RH doit pouvoir filtrer, trier et paginer les employes
 * selon plusieurs criteres simultanement.
 *
 * Travail demande :
 *
 * 1. rechercherEmployes(employes, criteres)
 *    criteres peut contenir : { departement, poste, salairMin, salaireMax, motCle }
 *    - motCle cherche dans nom ET prenom (insensible a la casse)
 *    - Tous les criteres present dans l'objet sont appliques simultanement (AND)
 *    - Retourner le tableau filtre
 *
 * 2. trierEmployes(employes, champ, ordre)
 *    ordre : 'asc' ou 'desc'
 *    champ : 'nom', 'salaire', 'anciennete' (en annees depuis dateEmbauche)
 *    Ne pas muter le tableau original.
 *
 * 3. paginer(employes, page, parPage)
 *    Retourner { donnees, page, parPage, total, totalPages }
 *    page commence a 1.
 *
 * 4. statistiquesParDepartement(employes)
 *    Retourner pour chaque departement :
 *    { departement, effectif, salaireMoyen, salaireMin, salaireMax, masseSalariale }
 *    Trier par effectif decroissant.
 */

const employes = [
  { id: 1,  nom: 'Alami',    prenom: 'Karim',   departement: 'Tech',    poste: 'Dev Backend',  salaire: 12000, dateEmbauche: '2019-03-15' },
  { id: 2,  nom: 'Benali',   prenom: 'Layla',   departement: 'Tech',    poste: 'Dev Frontend', salaire: 11000, dateEmbauche: '2020-07-01' },
  { id: 3,  nom: 'Chraibi',  prenom: 'Omar',    departement: 'Tech',    poste: 'DevOps',       salaire: 14000, dateEmbauche: '2018-01-10' },
  { id: 4,  nom: 'Drissi',   prenom: 'Hanane',  departement: 'RH',      poste: 'RH Manager',   salaire: 10500, dateEmbauche: '2021-04-20' },
  { id: 5,  nom: 'Ennaji',   prenom: 'Youssef', departement: 'RH',      poste: 'Recruteur',    salaire: 8500,  dateEmbauche: '2022-09-05' },
  { id: 6,  nom: 'Fassi',    prenom: 'Samira',  departement: 'Finance', poste: 'Comptable',    salaire: 9800,  dateEmbauche: '2020-02-14' },
  { id: 7,  nom: 'Ghazali',  prenom: 'Mehdi',   departement: 'Finance', poste: 'Analyste',     salaire: 11500, dateEmbauche: '2019-11-30' },
  { id: 8,  nom: 'Hamdaoui', prenom: 'Nadia',   departement: 'Tech',    poste: 'Dev Backend',  salaire: 12500, dateEmbauche: '2017-06-22' },
  { id: 9,  nom: 'Idrissi',  prenom: 'Karim',   departement: 'Marketing',poste:'Chef Projet',  salaire: 13000, dateEmbauche: '2020-05-18' },
  { id: 10, nom: 'Jalal',    prenom: 'Fatima',  departement: 'Marketing',poste:'Designer',     salaire: 9500,  dateEmbauche: '2021-08-03' },
  { id: 11, nom: 'Khalil',   prenom: 'Anas',    departement: 'Tech',    poste: 'Data Engineer',salaire: 15000, dateEmbauche: '2016-12-01' },
  { id: 12, nom: 'Lamrani',  prenom: 'Zineb',   departement: 'Finance', poste: 'DAF',          salaire: 22000, dateEmbauche: '2015-03-08' },
];

function rechercherEmployes(employes, criteres) {
  return employes.filter(e => {
    if (criteres.departement && e.departement !== criteres.departement) {
      return false;
    }
    if (criteres.poste && e.poste !== criteres.poste) {
      return false;
    }
    if (criteres.salaireMin && e.salaire < criteres.salaireMin) {
      return false;
    }
    if (criteres.salaireMax && e.salaire > criteres.salaireMax) {
      return false;
    }
    if (criteres.motCle) {
      const motCle = criteres.motCle.toLowerCase();
      if (!e.nom.toLowerCase().includes(motCle) && !e.prenom.toLowerCase().includes(motCle)) {
        return false;
      }
    }
    return true;
  });

}

function trierEmployes(employes, champ, ordre) {
 
}

function paginer(employes, page, parPage) {
  const total = employes.length;
  const totalPages = Math.ceil(total / parPage);
  const debut = (page - 1) * parPage;
  const donnees = employes.slice(debut, debut + parPage);
  
  return {
    donnees,
    page,
    parPage,
    total,
    totalPages
  };
}

function statistiquesParDepartement(employes) {
  const stats = {};
  
  employes.forEach(e => {
    if (!stats[e.departement]) {
      stats[e.departement] = {
        departement: e.departement,
        effectif: 0,
        salaires: [],
        masseSalariale: 0
      };
    }
    stats[e.departement].effectif++;
    stats[e.departement].salaires.push(e.salaire);
    stats[e.departement].masseSalariale += e.salaire;
  });
  
  const resultat = Object.values(stats).map(dept => ({
    departement: dept.departement,
    effectif: dept.effectif,
    salaireMoyen: Math.round(dept.masseSalariale / dept.effectif),
    salaireMin: Math.min(...dept.salaires),
    salaireMax: Math.max(...dept.salaires),
    masseSalariale: dept.masseSalariale
  }));
  
  return resultat.sort((a, b) => b.effectif - a.effectif);
}

// Tests
console.log(rechercherEmployes(employes, { departement: 'Tech', salaireMin: 12000 }));
console.log(rechercherEmployes(employes, { motCle: 'karim' }));
console.log(trierEmployes(employes, 'salaire', 'desc').map(e => e.nom + ' ' + e.salaire));
console.log(paginer(employes, 2, 4));
console.log(statistiquesParDepartement(employes));
