# 📅 SEMAINE 3 — PHP : Programmation Orientée Objet (Bases)

> 📌 **Note** : La documentation officielle PHP est sur php.net/manual/fr. Consulte en particulier les sections "Classes et Objets", "Constructeurs", "Visibilité" et "Héritage". Grafikart.fr propose aussi une excellente série vidéo sur la POO en PHP en français.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Ma première classe

Crée une classe `Voiture` avec les propriétés : marque, modele, annee, couleur, kilometrage. Ajoute un constructeur qui initialise toutes ces propriétés. Ajoute des getters et des setters pour chaque propriété. Ajoute une méthode `description()` qui retourne une phrase comme "Toyota Corolla (2020) - Bleue - 45 000 km". Crée 3 instances de Voiture et affiche leur description.

---

## S-Challenge 2 — Encapsulation et validation

Reprends la classe `Voiture`. Rends toutes les propriétés `private`. Dans le setter de `kilometrage`, ajoute une validation : le kilométrage ne peut pas être négatif ni inférieur au kilométrage actuel. Dans le setter de `annee`, valide que l'année est entre 1886 (première voiture de l'histoire) et l'année courante. Si la validation échoue, lance une `InvalidArgumentException` avec un message clair. Teste les cas valides et invalides.

---

## S-Challenge 3 — Méthodes métier

Dans la classe `Voiture`, ajoute les méthodes suivantes : `rouler(int $km)` qui augmente le kilométrage, `calculerAge()` qui retourne l'âge du véhicule en années, `estVintage()` qui retourne `true` si la voiture a plus de 25 ans, `estimerValeur()` qui calcule une valeur estimée selon la formule : valeur de base 200 000 MAD, moins 10% par année d'âge, moins 0.5% par tranche de 10 000 km. La valeur minimale est 5 000 MAD. Teste toutes les méthodes.

---

## S-Challenge 4 — Relations entre objets

Crée une classe `Proprietaire` avec nom, prenom, age, permis_de_conduire (booléen). Crée une classe `Garage` qui contient une liste de voitures (tableau). Le garage a une capacité maximale. Ajoute au Garage les méthodes : `ajouterVoiture(Voiture $v)` (vérifie la capacité), `retirerVoiture(string $immatriculation)`, `chercherParMarque(string $marque)`, `calculerValeurTotale()`. Crée un garage, ajoute 4 voitures et teste chaque méthode.

---

## S-Challenge 5 — Héritage simple

Crée une classe `Animal` avec les propriétés nom, espece, age et une méthode `sePresenter()`. Crée une classe `Chien` qui hérite d'Animal et ajoute la propriété race et une méthode `aboyer()`. Crée une classe `Chat` qui hérite d'Animal et ajoute la propriété couleur et une méthode `ronronner()`. Dans Chien et Chat, surcharge `sePresenter()` pour inclure les informations spécifiques. Crée des instances et teste l'héritage.

---

✅ **Checklist sauvetage S3** : Je sais créer une classe avec propriétés et méthodes, utiliser `private` et les getters/setters, valider dans les setters, faire hériter une classe et surcharger une méthode.

---

---

# 🔴 MARDI — Renforcement : Encapsulation et héritage (1h)

---

## R-Challenge 1 — La pharmacie

Tu modélises le système d'une pharmacie. Crée une classe `Medicament` avec : nom, reference, prix_unitaire, stock, ordonnance_requise, date_peremption. Les setters valident que le prix est positif, que le stock ne peut pas être négatif et que la date de péremption est dans le futur. Ajoute une méthode `estPerime()` et une méthode `dispenser(int $quantite)` qui vérifie le stock, l'ordonnance si nécessaire, et met à jour le stock. Crée une classe `Ordonnance` avec numero, medecin, patient, date et liste de médicaments prescrits. Crée une classe `Pharmacie` avec un stock de médicaments et une méthode `preparerOrdonnance(Ordonnance $o)` qui vérifie la disponibilité de tous les médicaments avant de les distribuer (tout ou rien).

---

## R-Challenge 2 — La flotte de véhicules

Tu gères la flotte de véhicules d'une entreprise de livraison. Crée une classe abstraite `Vehicule` avec immatriculation, marque, annee, kilometrage, statut (disponible, en_mission, en_maintenance). Crée trois sous-classes : `Scooter` (charge_max en kg, type_permis requis), `Camionnette` (volume_m3, nombre_places), `PoidLourd` (charge_max, nombre_essieux, permis_adr). Chaque sous-classe a sa propre méthode `calculerCoutMission(int $km)` avec une formule différente (scooter : 0.15€/km, camionnette : 0.45€/km, poids lourd : 0.85€/km + 50€ fixe). Crée une classe `Flotte` qui gère l'ensemble des véhicules avec des méthodes pour trouver un véhicule disponible selon le type, calculer le coût total de toutes les missions du mois et lister les véhicules en maintenance depuis plus de 7 jours.

---

## R-Challenge 3 — La salle de sport 🔥

Tu développes le système de gestion d'une salle de sport. Crée une classe `TypeAbonnement` avec nom (mensuel, trimestriel, annuel), prix, nombre_seances_incluses (-1 pour illimité), acces_cours_collectifs (booléen). Crée une classe `Membre` avec id, nom, prenom, email, date_inscription et une instance de TypeAbonnement. Ajoute des méthodes : `enregistrerSeance()` qui décrémente le compteur (ou lance une exception si quota atteint), `nombreSeancesRestantes()`, `calculerPrixRenouvellement()` qui applique une remise de 10% si le membre a plus d'un an d'ancienneté. Crée une classe `SalleSport` qui gère les membres avec des méthodes pour : ajouter un membre, enregistrer une séance (avec validation), générer un rapport d'utilisation par type d'abonnement et trouver les membres dont l'abonnement expire dans les 7 prochains jours.

---

---

# 🔴 MERCREDI — Renforcement : Classes abstraites et héritage avancé (1h)

---

## R-Challenge 4 — Le système de notifications

Une plateforme e-learning envoie des notifications aux apprenants. Crée une classe abstraite `Notification` avec id, destinataire, sujet, contenu, date_creation et une méthode abstraite `envoyer()` qui retourne une description de l'envoi. Crée trois sous-classes concrètes : `NotificationEmail` (avec champ adresse_email, peut avoir une pièce jointe), `NotificationSMS` (avec numero_telephone, contenu limité à 160 caractères automatiquement), `NotificationPush` (avec device_token, icône). Chaque sous-classe implémente `envoyer()` avec un format différent. Crée une classe `NotificationService` qui gère une file de notifications et peut les envoyer toutes, les filtrer par canal ou les envoyer uniquement pour un destinataire donné. Ajoute une méthode `resumer()` qui retourne des statistiques (combien par canal, combien envoyées).

---

## R-Challenge 5 — Les documents administratifs

Un service RH gère différents types de documents. Crée une classe abstraite `Document` avec id, titre, auteur, date_creation, statut (brouillon, soumis, validé, rejeté, archivé). Définis les transitions de statut autorisées : on peut passer de brouillon à soumis, de soumis à validé ou rejeté, de validé à archivé. Toute autre transition lance une exception. Crée trois sous-classes : `Contrat` (type_contrat, date_debut, date_fin, salaire), `RapportMensuel` (mois, annee, kpis sous forme de tableau), `Facture` (numero_facture, client, lignes_facture, tva). Chaque sous-classe a une méthode `genererResume()` qui retourne un résumé formaté. Crée une classe `GestionnaireDocuments` qui stocke et classe les documents par type et par statut.

---

## R-Challenge 6 — Le système de livraison 🔥

Une entreprise logistique gère des livraisons avec différents types de véhicules. Crée une classe abstraite `VehiculeLivraison` avec immatriculation, conducteur, capacite_kg, methode abstraite `calculerCout(float $distance, float $poids)` et methode abstraite `getTypeLabel()`. Crée quatre sous-classes : `Velo` (électrique ou non, coût = 0.05€/km), `Scooter` (cylindree, coût = 0.20€/km), `Camionnette` (volume_m3, coût = 0.40€/km + 0.01€/kg), `Poids Lourd` (nb_palettes, ADR, coût = 0.90€/km + 0.02€/kg + 100€ si ADR). Crée une classe `DispatcheurLivraisons` qui, pour une livraison donnée (poids, distance, type_marchandise), sélectionne automatiquement le véhicule le plus adapté et le moins cher parmi ceux disponibles, et calcule le coût total d'une tournée.

---

---

# 🔴 JEUDI — Renforcement : SQL avancé côté PHP (1h)

> Ces exercices combinent PHP et SQL. Utilise PDO avec des requêtes préparées pour tout accès à la base de données.

---

## R-Challenge 7 — Le système scolaire : requêtes métier

Sur une base de données d'école (tables : promotions, formateurs, modules, apprenants, presences, notes), écris les requêtes suivantes :

1. La moyenne pondérée de chaque apprenant (chaque module a un coefficient)
2. Le taux de réussite par module (% d'apprenants avec note ≥ 10)
3. Les apprenants en situation critique : note < 8 ET taux de présence < 70%
4. Le classement des apprenants avec leur mention (TB ≥ 16, B ≥ 14, AB ≥ 12, P ≥ 10, R < 10)
5. La comparaison notes QCM vs notes projet par module

---

## R-Challenge 8 — Présences et alertes automatiques

Sur la même base, écris les requêtes pour :

1. Le taux d'absentéisme par apprenant et par semaine (sur les 4 dernières semaines)
2. La corrélation présence/performance : regrouper les apprenants par tranche de présence (0-60%, 61-80%, 81-100%) et calculer la note moyenne par tranche
3. Une vue `bulletin_apprenant` qui consolide pour chaque apprenant : nom, toutes ses notes par module avec le coefficient, sa moyenne générale et son rang dans la promotion
4. Les apprenants ayant eu des absences consécutives sur 3 jours ou plus

---

## R-Challenge 9 — Procédures stockées et transactions 🔥

Écris les procédures stockées suivantes :

**Procédure 1** : `sp_ajouter_note` — Prend un apprenant_id, module_id, type_evaluation (qcm/projet), note et commentaire. Valide que la note est entre 0 et 20. Vérifie que l'apprenant existe et est bien inscrit dans le module. Insère la note. Si une note du même type pour ce module existait déjà, met à jour au lieu d'insérer.

**Procédure 2** : `sp_bilan_apprenant` — Génère le bilan complet d'un apprenant : toutes ses notes, sa moyenne, son rang, son taux de présence, et retourne un statut "admis" (moyenne ≥ 10 et présence ≥ 75%) ou "non admis".

**Procédure 3** : `sp_passage_annee` — Dans une transaction, fait passer tous les apprenants admis à la promotion suivante, archive les apprenants non admis avec leur bilan, et génère un rapport. Fait un ROLLBACK si une étape échoue.

---

---

# 🏆 VENDREDI — Mini-Projet : Le Système Scolaire PHP POO (2-3h)

> ✅ Validé (≥12/20) → S4 | ❌ Non validé → challenges weekend

---

## Brief

Tu développes un système de gestion scolaire en PHP avec PDO. L'application doit être structurée selon une architecture en couches (Models / Services / Repositories) et exposer les données via des méthodes bien séparées.

## Fonctionnalités

**1. Architecture et modèles (3 pts)**

Structure ton projet avec : un dossier `Models/` (classes Apprenant, Module, Note, Presence), un dossier `Repositories/` (accès base de données PDO), un dossier `Services/` (logique métier). Chaque Model a ses propriétés privées avec getters/setters validants. Les Repositories contiennent exclusivement les requêtes SQL préparées. Les Services contiennent la logique métier et appellent les Repositories.

**2. Gestion des apprenants (3 pts)**

Un apprenant peut être ajouté, modifié, supprimé. La suppression est impossible s'il a des notes. L'email doit être unique et valide. Le service `ApprenantService` expose : `inscrire()`, `modifier()`, `supprimer()`, `listerParPromotion()`, `rechercherParNom()`.

**3. Gestion des notes (4 pts)**

Le service `NoteService` gère l'ajout de notes (validation 0-20, vérification inscription, mise à jour si déjà existante), le calcul de moyenne pondérée par apprenant, la génération du bulletin complet, le classement de la promotion.

**4. Alertes et rapports (4 pts)**

Le service `AlerteService` génère : la liste des apprenants en situation critique (note < 8 OU présence < 70%), les modules avec taux d'échec > 40%, un rapport hebdomadaire de présence avec détection des absences de 3 jours consécutifs ou plus.

**5. Qualité du code (6 pts)**

Toutes les requêtes SQL utilisent des requêtes préparées PDO (pas de concaténation de variables dans le SQL). Les exceptions sont gérées et remontées correctement. Le code est commenté aux endroits clés. La classe `Database` est un Singleton. Les méthodes ont des types déclarés (PHP 7.4+).

## Barème : /20

Architecture MVC : /3 | Modèles et validation : /3 | NoteService : /4 | AlerteService : /4 | Qualité du code (PDO, exceptions, types) : /6 (évalué à la revue de code)

## Challenges weekend (si non validé)

**Challenge 1** : Crée seulement la classe `Apprenant` avec ses validations + une classe `ApprenantRepository` avec findAll(), findById(), create() en PDO. Teste les 3 méthodes.

**Challenge 2** : Reprends les exercices R-Challenge 1 et 2 de mardi et ajoute des requêtes préparées PDO pour persister les médicaments et les véhicules en base de données.
