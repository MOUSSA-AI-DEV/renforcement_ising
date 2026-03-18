# 📅 SEMAINE 2 — UML et SQL : Modélisation et Bases de Données

> 📌 **Note** : Pour les diagrammes UML, utilise Draw.io (gratuit, en ligne) ou StarUML. Pour le SQL, utilise MySQL Workbench ou un environnement en ligne comme sqlfiddle.com. La documentation MySQL est sur dev.mysql.com/doc.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Mes premières tables

Crée une base de données `bibliotheque`. Dedans, crée une table `livres` avec les colonnes suivantes : id (clé primaire auto-incrémentée), titre, auteur, annee_parution, genre, disponible (booléen). Insère 8 livres de genres et d'années variés. Affiche toute la table, puis affiche seulement les livres disponibles, puis seulement les livres parus après 2000.

---

## S-Challenge 2 — SELECT et WHERE

Sur la base de la table `livres` créée précédemment, écris les requêtes pour : afficher les livres triés par année décroissante, afficher les livres dont le titre contient le mot "le" (insensible à la casse), compter combien de livres sont disponibles, trouver le livre le plus récent et le plus ancien, afficher les 3 premiers livres par ordre alphabétique du titre.

---

## S-Challenge 3 — Ma première jointure

Crée une deuxième table `emprunts` avec : id, livre_id (clé étrangère vers livres), nom_emprunteur, date_emprunt, date_retour_prevue, retourne (booléen). Insère 6 emprunts (certains retournés, certains en cours). Écris une jointure pour afficher le nom du livre ET le nom de l'emprunteur pour chaque emprunt. Filtre pour n'afficher que les emprunts non retournés.

---

## S-Challenge 4 — Lire un diagramme de cas d'utilisation

Observe le texte suivant et dessine le diagramme de cas d'utilisation correspondant sur Draw.io : Une application de cinéma permet aux visiteurs de consulter les films à l'affiche et les horaires. Les membres (visiteurs connectés) peuvent en plus réserver des places et noter les films. Le gérant peut ajouter des films, modifier les horaires et consulter les réservations. Le système envoie automatiquement des confirmations de réservation par email.

---

## S-Challenge 5 — Lire un diagramme de classes

À partir de cette description, dessine le diagramme de classes : Une école a des étudiants et des professeurs. Les étudiants sont inscrits à des cours. Chaque cours est animé par un professeur. Un cours a un intitulé, un nombre d'heures et un coefficient. Un étudiant a un numéro, un nom et peut passer des examens. Un examen est lié à un cours, a une date et une note.

---

✅ **Checklist sauvetage S2** : Je sais créer une table, insérer des données, faire un SELECT avec WHERE et ORDER BY, écrire une jointure simple, lire un diagramme UML basique.

---

---

# 🔴 MARDI — Renforcement : Diagrammes de cas d'utilisation (1h)

---

## R-Challenge 1 — La plateforme de réservation de billets de transport

Tu modélises le système d'une plateforme comme ONCF. Identifie les acteurs (voyageur, agent ONCF, administrateur, système de paiement) et modélise au minimum 12 cas d'utilisation. Utilise des relations `include` pour les comportements obligatoires partagés (ex: "Consulter les horaires" qui est inclus dans "Réserver un billet") et des relations `extend` pour les comportements optionnels (ex: "Sélectionner un siège" qui étend "Réserver un billet"). Rédige le scénario nominal et le scénario d'erreur pour le cas "Réserver un billet".

---

## R-Challenge 2 — Le système d'information hospitalier

Tu modélises la partie rendez-vous et dossiers patients d'un hôpital. Les acteurs sont : patient, médecin, infirmier, réceptionniste, système de rappel automatique. Identifie au moins 15 cas d'utilisation couvrant la prise de rendez-vous, la gestion du dossier médical, la prescription et la facturation. Identifie précisément 3 relations `include` et 3 relations `extend` que tu justifies dans un commentaire sur le diagramme.

---

## R-Challenge 3 — L'application de covoiturage 🔥

Tu modélises une application type BlaBlaCar. Les acteurs sont : conducteur, passager (un utilisateur peut être les deux), administrateur, système de géolocalisation, service de paiement. Identifie au minimum 14 cas d'utilisation. Un conducteur peut publier un trajet, gérer ses réservations et évaluer les passagers. Un passager peut rechercher un trajet avec filtres, réserver, payer et évaluer le conducteur. L'administrateur peut modérer les avis et gérer les litiges. Justifie par écrit pourquoi "Vérifier le permis de conduire" est en `include` de "Publier un trajet" et non en `extend`.

---

---

# 🔴 MERCREDI — Renforcement : Diagrammes de classes (1h)

---

## R-Challenge 4 — L'agence immobilière

Tu modélises le système d'une agence immobilière. L'agence gère des biens (appartements, maisons, terrains, locaux commerciaux). Chaque bien a des caractéristiques communes (surface, prix, adresse, statut) et des caractéristiques spécifiques selon son type. Des agents gèrent les visites avec des clients. Un bien peut faire l'objet d'une transaction (vente ou location). Crée un diagramme de classes avec au minimum 7 classes, en utilisant l'héritage pour les types de biens, des associations avec cardinalités correctes entre agent, client, bien et transaction.

---

## R-Challenge 5 — La plateforme LMS (Learning Management System)

Tu modélises une plateforme d'apprentissage en ligne. La plateforme a des apprenants, des formateurs et des administrateurs. Les formateurs créent des formations composées de modules, eux-mêmes composés de leçons (vidéo, texte, quiz). Les apprenants s'inscrivent aux formations, suivent leur progression leçon par leçon et obtiennent un certificat en fin de formation. Modélise au minimum 9 classes avec les bonnes relations (héritage pour les types d'utilisateurs et de leçons, composition pour formation→module→leçon, association pour inscription).

---

## R-Challenge 6 — Du diagramme de classes au schéma SQL 🔥

Prends le diagramme de classes que tu as créé pour l'exercice 4 ou 5. Transforme-le en schéma SQL complet : chaque classe devient une table, les associations deviennent des clés étrangères ou des tables de jointure, les héritages sont gérés par une colonne `type` ou par des tables séparées avec FK. Écris le script SQL de création de toutes les tables avec les contraintes (`NOT NULL`, `UNIQUE`, `FOREIGN KEY`, `ON DELETE`). Insère 10 lignes de données de test cohérentes.

---

---

# 🔴 JEUDI — Renforcement : Requêtes SQL avancées (1h)

---

## R-Challenge 7 — Le reporting d'une chaîne de restaurants

Tu travailles sur la base de données d'une chaîne de restaurants avec les tables : restaurants (id, nom, ville, date_ouverture), employes (id, restaurant_id, nom, poste, salaire), menus (id, restaurant_id, nom_plat, prix, categorie), clients (id, nom, email, ville), commandes (id, client_id, restaurant_id, date_commande, montant_total), lignes_commande (id, commande_id, menu_id, quantite, prix_unitaire).

Écris les requêtes pour : le chiffre d'affaires par restaurant ce mois-ci, la masse salariale par restaurant, les 5 plats les plus commandés toutes restaurants confondues, les clients qui ont commandé dans plus d'un restaurant, le panier moyen par ville de restaurant, les restaurants dont le CA est supérieur à la moyenne.

---

## R-Challenge 8 — Sous-requêtes et requêtes avancées

Sur la même base de la chaîne de restaurants, écris les requêtes suivantes en utilisant des sous-requêtes et des jointures complexes :

1. Les plats qui n'ont jamais été commandés
2. Pour chaque restaurant, le nom de l'employé le mieux payé
3. Les clients dont le montant total cumulé dépasse le panier moyen global
4. Le classement des restaurants par CA avec le rang (utilise une sous-requête corrélée ou RANK())
5. La croissance du CA mois par mois pour chaque restaurant (comparer avec le mois précédent)

---

## R-Challenge 9 — Vues et agrégations métier 🔥

Sur la même base, crée 3 vues utiles pour le management :

**Vue 1** : `vue_performance_restaurants` — Pour chaque restaurant : nom, ville, CA du mois, CA du mois précédent, croissance en %, nombre de commandes, panier moyen, nombre d'employés, masse salariale, ratio CA/masse salariale.

**Vue 2** : `vue_popularite_menus` — Pour chaque plat : nom, catégorie, restaurant, nombre de fois commandé, CA généré, rang dans sa catégorie.

**Vue 3** : `vue_fidelisation_clients` — Pour chaque client : nom, ville, nombre de commandes, montant total, dernière commande, nombre de restaurants différents fréquentés, statut (Bronze < 200€, Argent < 500€, Or ≥ 500€).

Ensuite, écris 3 requêtes qui utilisent ces vues pour répondre à des questions métier.

---

---

# 🏆 VENDREDI — Mini-Projet : La Bibliothèque Universitaire (2-3h)

> ✅ Validé (≥12/20) → S3 | ❌ Non validé → challenges weekend

---

## Brief

Tu es chargé de concevoir et implémenter la base de données d'une bibliothèque universitaire. Tu dois livrer la conception UML, le schéma SQL et un jeu de requêtes de reporting.

## Fonctionnalités

**1. Conception UML (4 pts)**

Crée un diagramme de cas d'utilisation (acteurs : étudiant, bibliothécaire, administrateur) avec au minimum 10 cas d'utilisation, des relations `include` et `extend` justifiées. Crée un diagramme de classes complet avec les entités : Livre, Exemplaire, Auteur, Membre, Emprunt, Categorie, Reservation. Utilise l'héritage pour distinguer Etudiant et Enseignant (deux types de membres).

**2. Schéma SQL (4 pts)**

Crée toutes les tables à partir de ton diagramme de classes. Ajoute les contraintes adaptées (clés étrangères, NOT NULL, UNIQUE, CHECK pour les statuts). Insère un jeu de données de test : au moins 20 livres, 3 exemplaires par livre en moyenne, 15 membres, 25 emprunts dont certains en retard.

**3. Requêtes de base (4 pts)**

Écris les requêtes pour : la liste des livres disponibles (avec au moins un exemplaire non emprunté), les emprunts en retard avec le nom du membre et le nombre de jours de retard, les livres les plus empruntés cette année, le nombre d'emprunts par membre et par mois.

**4. Reporting avancé (4 pts)**

Crée une vue `vue_tableau_de_bord` qui consolide pour chaque livre : le titre, l'auteur, la catégorie, le nombre d'exemplaires total, le nombre d'exemplaires disponibles, le nombre total d'emprunts historiques, la date du dernier emprunt. Écris ensuite une requête qui identifie les membres "à risque" (plus de 2 emprunts en retard dans les 6 derniers mois) et les membres les plus actifs par catégorie de livres.

## Barème : /20

Diagramme UC : /2 | Diagramme de classes : /2 | Schéma SQL correct : /4 | Données de test cohérentes : /2 | Requêtes de base : /4 | Vue et reporting avancé : /4 | Qualité (contraintes, nommage) : /2

## Challenges weekend (si non validé)

**Challenge 1** : Schéma simplifié (3 tables : livres, membres, emprunts) + 5 requêtes de base avec jointure.

**Challenge 2** : Refaire le diagramme de classes de l'exercice 5 (LMS) et écrire le script SQL correspondant.
