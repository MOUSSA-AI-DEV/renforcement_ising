# Jour 05 — Mini-projet : Systeme de gestion de commandes

Duree : 2h30 | Note : /20 | Soutenance orale : 5 minutes obligatoire

## Contexte

L entreprise MarketPro gere des commandes clients et des fournisseurs.
Elle a besoin d un systeme PHP permettant de traiter des commandes,
de calculer des factures avec differents modes de paiement,
et de generer des rapports de performance.

Vous devez implementer le tout en PHP POO avance (interfaces, polymorphisme, static)
et fournir les requetes T-SQL correspondantes pour la persistance.

## Partie 1 — PHP POO (12 points)

### Interface Taxable
- calculerTaxe(float $montantHT) : float
- getTauxTaxe() : float
- getLabelTaxe() : string

### Interface Payable
- payer(float $montant) : bool
- getModePaiement() : string
- getReference() : string (reference de transaction unique)

### Classe abstraite Commande
- Proprietes (protected) : id, numero, client, lignes (array), dateCreation, statut
- Methodes concretes :
  - ajouterLigne(string $produit, int $qte, float $prixUnitaire) : void
  - getMontantHT() : float
  - getNumero() : string (format "CMD-YYYY-XXXXX")
  - changerStatut(string $statut) : void (valider les transitions : en_attente -> confirmee -> expediee -> livree)
- Methodes abstraites :
  - getMontantTTC() : float
  - getTypeCommande() : string

### Classe CommandeStandard extends Commande implements Taxable
- Taux de TVA : 20%
- getMontantTTC() : montantHT + taxe
- calculerTaxe() / getTauxTaxe() / getLabelTaxe() : implementation

### Classe CommandeExport extends Commande implements Taxable
- Taux de TVA : 0% (exonere a l export)
- Propriete supplementaire : paysDestination (string)
- getMontantTTC() : montantHT (pas de taxe)
- Propriete statique : $totalCommandesExport (compteur)
- Methode statique : getTotalCommandesExport() : int

### Classe PaiementCarte implements Payable
- Proprietes : numeroCarte (masque : "XXXX-XXXX-XXXX-1234"), dateExpiration, cvv
- payer() : valider que la carte n est pas expiree (comparaison avec date actuelle)
  => Si expiree : return false
  => Si valide : generer une reference "CARTE-{timestamp}-{random4}"
- getReference() : retourner la reference generee (null si pas encore paye)

### Classe PaiementVirement implements Payable
- Proprietes : iban, banque, nomBeneficiaire
- payer() : simuler un virement (toujours true)
  => Generer une reference "VIR-{YYYYMMDD}-{random6}"
- getModePaiement() : "Virement bancaire"

### Classe PaiementCheque implements Payable
- Proprietes : numeroCheque, banqueEmettrice
- payer(float $montant) : valider que montant > 0
- getModePaiement() : "Cheque"

### Classe Facture
- Constructeur : prend une Commande et un Payable
- generer() : string => retourne la facture complete formatee :
  ```
  ==================== FACTURE ====================
  Numero commande : CMD-2024-00001
  Type            : Standard
  Date            : 15/01/2024
  Client          : Nom du client
  -------------------------------------------------
  Ligne 1 : Produit A  x2  @ 500 DH  = 1000 DH
  Ligne 2 : Produit B  x1  @ 200 DH  =  200 DH
  -------------------------------------------------
  Montant HT      :  1200.00 DH
  TVA (20%)       :   240.00 DH
  Montant TTC     :  1440.00 DH
  -------------------------------------------------
  Mode de paiement : Carte bancaire
  Reference       : CARTE-1705312245-4821
  Statut paiement : PAYE
  =================================================
  ```
- payer() : appelle Payable::payer() et retourne bool

### Classe statique CommandeFactory
- creerStandard(string $client) : CommandeStandard
- creerExport(string $client, string $pays) : CommandeExport
- Tenir a jour un compteur statique pour les numeros de commande

## Partie 2 — T-SQL (8 points)

Sur la base du schema ci-dessous, ecrire :

Schema :
- commandes : id, numero, client, type, montant_ht, montant_ttc, statut, date_creation
- lignes_commande : id, commande_id, produit, quantite, prix_unitaire
- paiements : id, commande_id, mode, reference, montant, date_paiement, statut

Requetes et procedures a ecrire :

1. Vue `vue_rapport_commandes` :
   - numero, client, type, montant_ht, montant_ttc, statut,
     nb_lignes, montant_paye, statut_paiement (paye/partiel/impaye),
     remise_applicable (fn_calculer_remise)

2. Procedure `sp_enregistrer_commande` :
   - Prend : client (string), type (standard/export), JSON des lignes, mode_paiement
   - Insere la commande, les lignes, genere le paiement, le tout en transaction
   - ROLLBACK si le paiement echoue (montant <= 0 ou mode invalide)

3. Procedure `sp_rapport_mensuel` :
   - Prend : annee (INT), mois (INT)
   - Retourne : nb_commandes, montant_ht_total, montant_ttc_total,
     nb_standard, nb_export, top_client (celui avec le plus grand CA)

## Livrables

- `commande.php` : tout le code PHP
- `schema.sql` : creation des tables
- `procedures.sql` : vues et procedures T-SQL

## Grille d evaluation

| Critere | Points |
|---------|--------|
| Interfaces correctement implementees | 2 |
| Polymorphisme (Commande abstraite, sous-classes) | 2 |
| Logique metier (taxes, transitions statut, references) | 2 |
| Classe Facture : format et paiement | 2 |
| Methodes et compteurs statiques | 1 |
| CommandeFactory | 1 |
| Vue SQL complete et correcte | 2 |
| Procedures T-SQL avec transactions | 3 |
| Soutenance (explication des choix) | 5 |
| **Total** | **20** |

## Si non valide

Challenge de rattrapage :
- Implementer seulement CommandeStandard + PaiementCarte + Facture (sans Export ni Factory)
- Une seule procedure SQL : sp_enregistrer_commande_simple (sans transaction)
