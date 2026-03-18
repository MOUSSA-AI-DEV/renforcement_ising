<?php
/**
 * EXERCICE 2 — Revision heritage multi-niveau + logique metier
 *
 * Contexte :
 * Un systeme de ressources humaines gere les employes d une entreprise
 * avec differents contrats et regles de calcul.
 *
 * A implementer :
 *
 * Classe Employe
 *   Proprietes (protected) : id, nom, prenom, salaireBase (float)
 *   Constructeur + getters/setters (salaireBase > 0)
 *   Methode calculerSalaire() : float => retourne salaireBase
 *   Methode calculerPrime() : float => retourne 0 par defaut
 *   Methode genererFichePaie() : string
 *     => "Fiche de paie - Nom Prenom
  Salaire : X DH
  Prime : Y DH
  Net : Z DH"
 *
 * Classe EmployeCDI extends Employe
 *   Propriete : anciennete (int, en annees)
 *   calculerSalaire() : salaireBase + (anciennete * salaireBase * 0.03)
 *     => 3% par annee d anciennete
 *   calculerPrime() : 15% du salaire calcule si anciennete >= 5 ans, sinon 0
 *
 * Classe EmployeCDD extends Employe
 *   Proprietes : dureeMois (int), tauxMajoration (float)
 *   calculerSalaire() : salaireBase * (1 + tauxMajoration)
 *     => Le CDD a une majoration de precarite
 *   calculerPrime() : 0 (pas de prime pour les CDD)
 *
 * Classe Manager extends EmployeCDI
 *   Proprietes : nbSubordonnes (int), budget (float)
 *   calculerSalaire() : salaire CDI + (nbSubordonnes * 200)
 *     => Supplement par subordonnes
 *   calculerPrime() :
 *     - Prime CDI de base
 *     - + 5% du budget si budget > 500000 DH
 *
 * Classe Entreprise
 *   Proprietes : nom (string), employes (array)
 *   Methodes :
 *     ajouterEmploye(Employe $e) : void
 *     getMasseSalariale() : float => somme de tous les salaires
 *     getPrimesTotales() : float => somme de toutes les primes
 *     getEmployesPrime() : array => liste des employes ayant une prime > 0
 *     getRapportSalarial() : string
 *       => rapport multi-lignes avec tous les employes et leurs fiche de paie
 *
 * Tests a realiser :
 * 1. Creer une entreprise "TechCorp"
 * 2. Ajouter : CDI Amine (salaireBase=5000, anciennete=7 ans)
 * 3. Ajouter : CDD Sara (salaireBase=4000, dureeMois=6, tauxMajoration=0.10)
 * 4. Ajouter : Manager Karim (salaireBase=8000, anciennete=3 ans, 5 subordonnes, budget=800000)
 * 5. Afficher la masse salariale totale, les primes totales, et le rapport complet
 */

// Votre code ici
