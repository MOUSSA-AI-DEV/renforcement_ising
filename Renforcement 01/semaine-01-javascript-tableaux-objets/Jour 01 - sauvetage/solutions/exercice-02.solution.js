/**
 * SOLUTION - Exercice 2
 */

const produits = [
  { id: 1, nom: 'Laptop Pro',      prix: 8500, stock: 12, categorie: 'Informatique' },
  { id: 2, nom: 'Souris sans fil', prix: 150,  stock: 3,  categorie: 'Informatique' },
  { id: 3, nom: 'Clavier mecanique',prix: 420, stock: 8,  categorie: 'Informatique' },
  { id: 4, nom: 'Bureau debout',   prix: 2200, stock: 5,  categorie: 'Mobilier'     },
  { id: 5, nom: 'Chaise ergonomique',prix:1800,stock: 2,  categorie: 'Mobilier'     },
  { id: 6, nom: 'Lampe LED',       prix: 180,  stock: 20, categorie: 'Mobilier'     },
  { id: 7, nom: 'Tapis de souris', prix: 80,   stock: 0,  categorie: 'Accessoires'  },
  { id: 8, nom: 'Support laptop',  prix: 350,  stock: 7,  categorie: 'Accessoires'  },
  { id: 9, nom: 'Webcam HD',       prix: 550,  stock: 4,  categorie: 'Informatique' },
];

function produitsEnRuptureOuCritique(produits) {
  return produits
    .filter(p => p.stock <= 5)
    .sort((a, b) => a.stock - b.stock);
}

function valeurTotaleParCategorie(produits) {
  return produits.reduce((acc, p) => {
    acc[p.categorie] = (acc[p.categorie] || 0) + p.stock * p.prix;
    return acc;
  }, {});
}

function produitLePlusCherParCategorie(produits) {
  return produits.reduce((acc, p) => {
    if (!acc[p.categorie] || p.prix > acc[p.categorie].prix) {
      acc[p.categorie] = p;
    }
    return acc;
  }, {});
}

function appliquerRemise(produits, categorie, pourcentage) {
  return produits.map(p => {
    if (p.categorie !== categorie) return p;
    return {
      ...p,
      prix: parseFloat((p.prix * (1 - pourcentage / 100)).toFixed(2))
    };
  });
}
