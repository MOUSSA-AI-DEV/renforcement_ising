<?php
/**
 * EXERCICE 1 — Revision encapsulation et heritage
 *
 * Contexte :
 * Une agence de voyages gere differents types de transports.
 * Chaque transport a un prix de base et peut calculer son prix final
 * selon des regles specifiques.
 *
 * A implementer :
 *
 * Classe abstraite Transport
 *   Proprietes (protected) : id, depart, destination, prixBase
 *   Constructeur : initialise toutes les proprietes
 *   Getter/setter pour chaque propriete (avec validation : prixBase > 0)
 *   Methode abstraite : calculerPrixFinal() : float
 *   Methode concrte : afficherInfos() : string
 *     => retourne "Transport #id : depart -> destination | Prix final : X DH"
 *
 * Classe Avion extends Transport
 *   Propriete supplementaire (private) : classeVoyage (string : "economique", "business", "premiere")
 *   calculerPrixFinal() :
 *     - economique : prixBase
 *     - business : prixBase * 1.8
 *     - premiere : prixBase * 3.2
 *     - Si classe invalide, lever une InvalidArgumentException
 *
 * Classe Train extends Transport
 *   Propriete supplementaire (private) : typeRail (string : "regional", "rapide", "grande_vitesse")
 *   calculerPrixFinal() :
 *     - regional : prixBase
 *     - rapide : prixBase * 1.3
 *     - grande_vitesse : prixBase * 1.7
 *
 * Classe Bus extends Transport
 *   Propriete supplementaire (private) : nbArrets (int)
 *   calculerPrixFinal() :
 *     - prixBase + (nbArrets * 5) DH par arret intermediaire
 *     - Reduction de 10% si nbArrets == 0 (trajet direct)
 *
 * Tests a realiser :
 * 1. Creer un Avion Casablanca->Paris, prixBase 2500, classe "business"
 *    => afficherInfos() doit retourner le bon prix (4500 DH)
 * 2. Creer un Train Casablanca->Rabat, prixBase 80, type "grande_vitesse"
 *    => prix final = 136 DH
 * 3. Creer un Bus Marrakech->Agadir, prixBase 120, 3 arrets
 *    => prix final = 135 DH
 * 4. Creer un Bus direct (0 arret), prixBase 120
 *    => prix final = 108 DH
 * 5. Tenter de creer un Avion avec classe "cargo" => verifier l exception
 */

// Votre code ici
