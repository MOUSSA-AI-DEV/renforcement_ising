<?php
/**
 * EXERCICE 2 - Classe Produit avec gestion de stock
 *
 * Classe Produit :
 *   Proprietes : id, nom, description, prix, stock, categorie, actif
 *
 * Constructeur :
 *   __construct(string $nom, float $prix, int $stock, string $categorie)
 *   - prix doit etre > 0
 *   - stock doit etre >= 0
 *   - Lever InvalidArgumentException si invalide
 *
 * Methodes :
 *   approvisionner(int $quantite) : void
 *     Ajouter la quantite au stock. Lever InvalidArgumentException si quantite <= 0.
 *
 *   vendre(int $quantite) : float
 *     Verifier si le stock est suffisant.
 *     Lever une RuntimeException("Stock insuffisant") si non.
 *     Decremente le stock, retourne le montant total (prix * quantite).
 *
 *   appliquerRemise(float $pourcentage) : void
 *     Appliquer une remise. Pourcentage doit etre entre 1 et 50.
 *
 *   estDisponible() : bool
 *     Retourner true si actif ET stock > 0.
 *
 *   toArray() : array
 */

class Produit
{
    // TODO : implémenter la classe
}

// Tests
try {
    $p = new Produit('Laptop Pro', 8500.00, 10, 'Informatique');
    echo "Stock initial : " . $p->getStock() . PHP_EOL;

    $p->approvisionner(5);
    echo "Apres appro : " . $p->getStock() . PHP_EOL; // 15

    $montant = $p->vendre(3);
    echo "Vente 3 unites, montant : " . $montant . " DH" . PHP_EOL; // 25500

    $p->appliquerRemise(10);
    echo "Prix apres remise 10% : " . $p->getPrix() . PHP_EOL; // 7650

    // Test stock insuffisant
    $p->vendre(100);
} catch (RuntimeException $e) {
    echo 'Erreur stock : ' . $e->getMessage() . PHP_EOL;
}
