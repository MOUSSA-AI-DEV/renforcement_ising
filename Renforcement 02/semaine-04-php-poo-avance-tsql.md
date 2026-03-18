# 📅 SEMAINE 4 — PHP POO Avancé et T-SQL

> 📌 **Note** : Pour les interfaces, le mot-clé `implements`. Pour les classes finales, `final class`. Pour les méthodes statiques, `static` et l'appel via `NomClasse::methode()`. Pour T-SQL (MySQL), la documentation des procédures stockées est sur dev.mysql.com/doc/refman/8.0/fr/create-procedure.html.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Révision héritage et encapsulation

Crée une hiérarchie pour une agence de voyages. Une classe abstraite `Transport` (depart, destination, prixBase, méthode abstraite `calculerPrixFinal()`). Trois sous-classes : `Avion` (classeVoyage : économique ×1, business ×1.8, première ×3.2), `Train` (typeRail : régional ×1, rapide ×1.3, grande vitesse ×1.7), `Bus` (nbArrets, prix = base + 5 MAD par arrêt). Valide que `prixBase` est strictement positif dans le constructeur parent. Crée 2 instances de chaque type et affiche leur prix final formaté.

---

## S-Challenge 2 — Révision héritage multi-niveaux

Crée une hiérarchie RH : `Employe` (salaireBase, méthode `calculerSalaire()` retourne salaireBase), `EmployeCDI` hérite d'Employe (anciennete, calcul = base + 3% par année), `Manager` hérite d'EmployeCDI (nbSubordonnes, calcul = salaire CDI + 200 MAD par subordonné). Crée une classe `Entreprise` qui stocke des employés et calcule la masse salariale totale et affiche la fiche de paie de chacun.

---

## S-Challenge 3 — Révision jointures SQL sur 2 tables

Sur une base clients/commandes (à créer toi-même avec des données de test), écris les requêtes pour : le nombre de commandes par client, le montant total des commandes livrées par client, les clients sans aucune commande, la ville avec le panier moyen le plus élevé.

---

## S-Challenge 4 — Ma première interface

Crée une interface `Exportable` avec une seule méthode `exporter() : string`. Crée deux classes qui l'implémentent : `ExportCSV` (retourne les données séparées par des virgules) et `ExportJSON` (retourne un JSON bien formaté). Les deux classes reçoivent un tableau de données dans leur constructeur. Teste que tu peux stocker les deux dans le même tableau et appeler `exporter()` sans savoir quelle classe tu manipules.

---

## S-Challenge 5 — Static et compteur global

Crée une classe `Reference` qui génère des références uniques pour des commandes. La classe doit avoir une propriété statique `$compteur` initialisée à 1000. La méthode statique `generer(string $prefix)` retourne une chaîne comme "CMD-1001", "CMD-1002"... en incrémentant le compteur à chaque appel. Ajoute une méthode statique `reset()` pour les tests. Crée 5 références et vérifie qu'elles sont toutes différentes et dans le bon ordre.

---

✅ **Checklist sauvetage S4** : Je sais utiliser une classe abstraite, l'héritage multi-niveaux, implémenter une interface, utiliser des propriétés et méthodes statiques.

---

---

# 🔴 MARDI — Renforcement : Polymorphisme, interfaces et static (1h)

---

## R-Challenge 1 — Les exporteurs de rapports

Un système de gestion documentaire doit exporter les mêmes données dans plusieurs formats. Définis une interface `Exportable` avec `exporter(array $donnees, string $titre) : string` et `getFormatLabel() : string`. Crée trois classes qui implémentent cette interface : `ExporteurPDF` (simule un tableau ASCII avec bordures), `ExporteurCSV` (entêtes en première ligne, valeurs séparées par des virgules), `ExporteurJSON` (JSON indenté avec les clés "titre" et "data"). Crée une classe `RapportService` qui accepte n'importe quel tableau d'`Exportable`, charge des données et appelle `exporter()` sur chacun. Teste avec un rapport de ventes (produit, quantité, total) et affiche les 3 formats générés.

---

## R-Challenge 2 — La configuration statique de l'application

Crée une classe `Config` entièrement statique (toutes les propriétés et méthodes sont statiques) qui gère la configuration d'une application web. Elle supporte la notation pointée : `Config::set('database.host', 'localhost')` crée la structure imbriquée correspondante dans le tableau interne, et `Config::get('database.host')` la récupère. Ajoute une méthode `load(array $config)` qui charge un tableau entier de configuration, `has(string $cle) : bool`, `all() : array` et `reset()`. Crée une classe `final DatabaseConfig` qui utilise `Config` pour stocker les paramètres de connexion et expose une méthode `getDSN()`. Le mot-clé `final` empêche toute extension de cette classe — explique dans un commentaire pourquoi c'est souhaitable ici.

---

## R-Challenge 3 — Le système de notifications multi-canal 🔥

Une plateforme e-learning notifie les apprenants via différents canaux selon leurs préférences. Crée une interface `Sendable` avec `envoyer() : string`, `getCanal() : string`, `getPriorite() : int` (1=basse, 4=urgente). Crée une classe abstraite `Notification` qui implémente partiellement `Sendable` (stocke id, destinataire, sujet, contenu). Crée les sous-classes concrètes : `NotificationEmail` (priorité 2, peut avoir une pièce jointe), `NotificationSMS` (priorité 3, contenu tronqué à 160 chars automatiquement), `NotificationPush` (priorité 2, avec icône). Crée une sous-classe `AlerteCritique` qui hérite de `NotificationEmail` et a la priorité 4. Crée un `NotificationService` qui maintient une file triée par priorité décroissante, envoie tout avec `envoyerTout()`, peut filtrer par canal, et retourne des statistiques (combien par canal, combien en attente).

---

---

# 🔴 MERCREDI — Renforcement : T-SQL — Procédures et transactions (1h)

---

## R-Challenge 4 — Approvisionner et annuler des commandes

Sur une base de gestion de stock (tables : produits, clients, commandes, lignes_commande, mouvements_stock), écris deux procédures stockées :

**Procédure 1** — `sp_approvisionner` : prend une référence produit, une quantité et un motif. Valide que le produit existe et est actif, que la quantité est > 0. Met à jour le stock du produit. Insère un mouvement de type "entrée". Retourne le nouveau stock et un message de confirmation via des paramètres OUT.

**Procédure 2** — `sp_annuler_commande` : prend un id de commande et un motif. Valide que la commande existe et que son statut est "en_attente" ou "confirmée" (pas annulable si expédiée). Pour chaque ligne de la commande, restaure le stock du produit et insère un mouvement "entrée". Change le statut de la commande en "annulée". Retourne un booléen de succès et un message.

---

## R-Challenge 5 — Passer une commande en transaction

Écris une procédure `sp_passer_commande` qui crée une commande complète de manière atomique. Elle prend un client_id et une liste de produits avec quantités. Dans une seule transaction : vérifie que le client existe, vérifie pour chaque produit que le stock est suffisant (si non : ROLLBACK immédiat avec un message d'erreur indiquant quel produit est en rupture), crée la commande en statut "confirmée", insère toutes les lignes de commande, décrémente les stocks, insère les mouvements de sortie, met à jour le montant total. COMMIT uniquement si tout s'est bien passé. Teste avec une commande qui doit réussir et une qui doit échouer (stock insuffisant).

---

## R-Challenge 6 — Triggers pour la cohérence des données 🔥

Sur la même base de stock, crée trois triggers :

**Trigger 1** : Avant chaque UPDATE sur la table `produits`, vérifie que `stock_actuel` ne passe jamais en dessous de 0. Si c'est le cas, lève une erreur SQL avec un message explicite.

**Trigger 2** : Après chaque INSERT dans `lignes_commande`, recalcule et met à jour automatiquement le `montant_total` de la commande correspondante.

**Trigger 3** : Après chaque UPDATE du stock d'un produit, si le nouveau stock est inférieur au `stock_minimum`, insère automatiquement une alerte dans une table `stock_alertes` (à créer) avec la date, le produit concerné et l'écart.

Teste chaque trigger en provoquant volontairement chaque situation.

---

---

# 🔴 JEUDI — Renforcement : T-SQL — Fonctions, index et vues (1h)

---

## R-Challenge 7 — Fonctions métier réutilisables

Sur la base de gestion de stock, crée trois fonctions utilisateur :

**Fonction 1** : `fn_calculer_remise(montant)` — Retourne le taux de remise en pourcentage selon le montant : 0% si < 1 000 MAD, 5% si entre 1 000 et 4 999, 10% si entre 5 000 et 19 999, 15% au-delà. Teste avec 4 valeurs couvrant chaque tranche.

**Fonction 2** : `fn_statut_stock(produit_id)` — Retourne un label textuel selon le niveau de stock du produit : "RUPTURE" (stock = 0), "CRITIQUE" (stock < minimum), "FAIBLE" (stock < minimum × 2), "NORMAL" (stock < minimum × 5), "ABONDANT" sinon.

**Fonction 3** : `fn_ca_client(client_id, date_debut, date_fin)` — Calcule le chiffre d'affaires d'un client sur une période donnée (seulement les commandes confirmées et expédiées).

---

## R-Challenge 8 — Index et optimisation

Sur la base de stock, analyse les performances de deux requêtes complexes (reporting CA par client + top produits) en utilisant `EXPLAIN`. Pour chaque requête : note le type d'accès actuel (ALL, REF, RANGE...), crée le ou les index appropriés, relance `EXPLAIN` et compare. Documente dans des commentaires SQL : quelle colonne tu as indexée, pourquoi ce choix, et quelle amélioration tu observes. Crée ensuite un index composite sur `(client_id, statut, date_commande)` dans la table commandes et écris une requête qui en bénéficie spécifiquement. Explique dans un commentaire pourquoi l'ordre des colonnes dans l'index est important.

---

## R-Challenge 9 — Vues pour le tableau de bord 🔥

Crée trois vues qui servent de base au tableau de bord de l'application :

**Vue 1** : `vue_dashboard_stock` — Pour chaque produit actif : référence, nom, catégorie, prix, stock actuel, stock minimum, statut du stock (utilise `fn_statut_stock`), valeur en stock (stock × prix). Trier par valeur décroissante.

**Vue 2** : `vue_performance_clients` — Pour chaque client : nom, email, nombre de commandes (toutes), nombre de commandes livrées, CA total livré, panier moyen, date de la dernière commande, remise applicable (utilise `fn_calculer_remise` sur le CA total).

**Vue 3** : `vue_reapprovisionnement` — Seulement les produits dont le stock actuel est inférieur au stock minimum : référence, nom, catégorie, stock actuel, stock minimum, écart, quantité à commander (pour atteindre 3 × le minimum), coût estimé de réapprovisionnement (quantité × prix).

Ensuite, écris 3 requêtes métier qui utilisent ces vues (ex: budget total de réapprovisionnement, top 3 clients par CA, produits en rupture par catégorie).

---

---

# 🏆 VENDREDI — Mini-Projet : Système de Commandes (2-3h)

> ✅ Validé (≥12/20) → S5 | ❌ Non validé → challenges weekend  
> ⚠️ **Soutenance orale de 5 minutes obligatoire**

---

## Brief

MarketPro gère des commandes avec différents types (standard et export) et différents modes de paiement. Tu dois implémenter le tout en PHP POO avancé avec des interfaces, du polymorphisme, des attributs statiques, et fournir les procédures T-SQL correspondantes.

## Fonctionnalités

**1. Interfaces et contrats (3 pts)**

Définis une interface `Taxable` (calculerTaxe, getTaux, getLabelTaxe) et une interface `Payable` (payer, getModePaiement, getReference). Ces interfaces définissent les contrats que les classes concrètes doivent respecter.

**2. Hiérarchie des commandes (3 pts)**

Une classe abstraite `Commande` gère les lignes de commande, le numéro (format "CMD-YYYY-XXXXX" généré automatiquement), le statut avec des transitions validées (en_attente → confirmée → expédiée → livrée), et expose le montant HT. Deux sous-classes : `CommandeStandard` (implémente Taxable, TVA 20%) et `CommandeExport` (TVA 0%, propriété paysDestination, compteur statique du nombre de commandes export).

**3. Modes de paiement (3 pts)**

Trois classes implémentent `Payable` : `PaiementCarte` (valide que la carte n'est pas expirée avant d'autoriser le paiement, génère une référence unique), `PaiementVirement` (génère une référence de virement, toujours accepté), `PaiementCheque` (valide que le montant est positif). Le code qui traite le paiement ne sait pas quelle implémentation il utilise.

**4. Génération de facture (3 pts)**

Une classe `Facture` prend une `Commande` et un `Payable` et génère un récapitulatif formaté complet : lignes de commande, montant HT, taxe détaillée, montant TTC, mode de paiement, référence de transaction, statut du paiement.

**5. T-SQL (4 pts)**

Crée le schéma SQL correspondant (tables commandes, lignes_commande, paiements). Écris une vue `vue_rapport_commandes` (numéro, client, type, montants, statut paiement, remise applicable). Écris une procédure `sp_enregistrer_commande` qui insère la commande et ses lignes dans une transaction, génère le paiement et fait un ROLLBACK si le paiement échoue.

**6. Soutenance (4 pts)**

Explique à l'oral : pourquoi une interface plutôt qu'une classe abstraite pour Payable, comment le polymorphisme permet à `Facture` de ne pas connaître le mode de paiement, quel est l'intérêt du compteur statique sur CommandeExport.

## Barème : /20

Interfaces : /3 | Commandes + statuts : /3 | Paiements polymorphes : /3 | Facture : /3 | T-SQL : /4 | Soutenance : /4

## Challenges weekend (si non validé)

**Challenge 1** : Implémente seulement `CommandeStandard` + `PaiementCarte` + `Facture`. Pas d'export, pas de Factory.

**Challenge 2** : Reprends l'exercice R-Challenge 1 (exporteurs) et ajoute une 4ème classe `ExporteurXML` qui implémente la même interface.
