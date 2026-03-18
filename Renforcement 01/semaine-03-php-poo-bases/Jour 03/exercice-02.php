<?php
/**
 * EXERCICE 2 - Systeme de gestion des documents administratifs
 *
 * =====================================================================
 * Classe abstraite Document :
 *   Proprietes : id, titre, contenu (string), auteur (string),
 *                dateCreation, dateDerniereModif, statut, version (int)
 *   statut : 'brouillon' | 'soumis' | 'approuve' | 'rejete' | 'archive'
 *
 * Methodes abstraites :
 *   valider() : bool
 *     Chaque sous-classe definit ses propres criteres de validation.
 *
 *   getTypeDocument() : string
 *     Retourner le nom du type ('Contrat', 'Rapport', 'Facture', etc.)
 *
 * Methodes concretes :
 *   soumettre() : void
 *     Passer en 'soumis' si le document est valide ET en 'brouillon'.
 *     Lever LogicException si conditions non reunies.
 *
 *   approuver(string $approbateur) : void
 *     Possible uniquement si statut = 'soumis'.
 *
 *   rejeter(string $motif) : void
 *     Possible uniquement si statut = 'soumis'.
 *     Repasser en 'brouillon' pour correction.
 *
 *   archiver() : void
 *     Possible si statut = 'approuve'.
 *
 *   incrementerVersion() : void  (protected)
 *
 * =====================================================================
 * Classe Contrat extends Document :
 *   Proprietes supplementaires : partieA, partieB, dateDebut, dateFin,
 *                                 montant (float), typeContrat (CDI/CDD/Prestation)
 *
 *   valider() : bool
 *     Contenu >= 100 chars, partieA et partieB non vides,
 *     dateDebut < dateFin, montant > 0.
 *
 * =====================================================================
 * Classe RapportMensuel extends Document :
 *   Proprietes supplementaires : mois, annee, departement,
 *                                 kpis (array), fichierJoint (string|null)
 *
 *   valider() : bool
 *     Titre non vide, mois entre 1 et 12, annee entre 2020 et annee actuelle,
 *     au moins un KPI present.
 *
 *   ajouterKpi(string $nom, $valeur) : void
 *
 * =====================================================================
 * Classe Facture extends Document :
 *   Proprietes supplementaires : client, lignes (array), tauxTVA (float),
 *                                 estPayee (bool)
 *   ligne = { description, quantite, prixUnitaire }
 *
 *   ajouterLigne(string $desc, int $qte, float $pu) : void
 *
 *   calculerTotalHT() : float
 *   calculerTotalTTC() : float
 *
 *   valider() : bool
 *     Client non vide, au moins une ligne, totalHT > 0.
 *
 *   marquerPayee() : void
 *     Possible uniquement si statut = 'approuve'.
 *
 * =====================================================================
 * Classe GestionnaireDocuments :
 *   Methodes :
 *     ajouter(Document $d) : void
 *     getParType(string $type) : array
 *     getParStatut(string $statut) : array
 *     getDocumentsAApprouver() : array
 *     statistiques() : array
 */

// Votre implementation

// Tests
$gestionnaire = new GestionnaireDocuments();

$contrat = new Contrat(
    "Contrat de prestation IT", "Description complete du contrat de prestation pour le developpement d'une application web.",
    "Sys Admin",
    "TechCorp SARL", "Benali Consulting",
    "2024-01-01", "2024-12-31",
    120000.00, "Prestation"
);

$rapport = new RapportMensuel("Rapport Janvier 2024", "Bilan mensuel complet des operations", "RH Manager");
$rapport->ajouterKpi("Effectif", 145);
$rapport->ajouterKpi("Recrutements", 3);
$rapport->ajouterKpi("Departs", 1);
$rapport->setMoisAnnee(1, 2024);
$rapport->setDepartement("Ressources Humaines");

$facture = new Facture("Alami Hassan", "Dev Backend");
$facture->setTitre("Facture 2024-001");
$facture->ajouterLigne("Developpement API REST", 5, 1500);
$facture->ajouterLigne("Tests et documentation", 2, 800);

$gestionnaire->ajouter($contrat);
$gestionnaire->ajouter($rapport);
$gestionnaire->ajouter($facture);

$contrat->soumettre();
$contrat->approuver("Direction");
echo "Statut contrat : " . $contrat->getStatut() . PHP_EOL;

$facture->soumettre();
$facture->approuver("Comptabilite");
$facture->marquerPayee();
echo "Facture TTC : " . $facture->calculerTotalTTC() . " DH" . PHP_EOL;

print_r($gestionnaire->statistiques());
