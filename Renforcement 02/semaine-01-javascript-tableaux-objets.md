# 📅 SEMAINE 1 — JavaScript : Manipulation des Tableaux et des Objets

> 📌 **Note** : JavaScript possède des méthodes prédéfinies pour manipuler les tableaux et les objets. Avant de réinventer la roue, cherche dans la documentation MDN les méthodes disponibles sur `Array.prototype` et `Object`. Tu peux aussi utiliser une boucle classique si tu préfères.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — La liste des participants

Tu gères les inscriptions à un événement. Crée un tableau contenant 6 noms de participants. Affiche la liste complète, le premier inscrit, le dernier inscrit et le nombre total de participants. Ensuite, ajoute 2 nouveaux participants à la fin de la liste, retire le dernier de la liste et affiche l'élément retiré, puis retire le premier de la liste. Affiche l'état final.

---

## S-Challenge 2 — Le relevé de notes

Un professeur te donne les notes de 7 élèves dans un tableau : `[12, 8, 15, 6, 18, 9, 14]`. Parcours ce tableau et calcule : la somme de toutes les notes, la moyenne de la classe, la note la plus haute, la note la plus basse, le nombre d'élèves qui ont la moyenne (≥ 10). Affiche un bulletin de résultats formaté.

---

## S-Challenge 3 — La fiche d'identité

Crée un objet représentant une personne avec ses informations : nom, prénom, âge, ville et email. Affiche une phrase de présentation complète. Modifie la ville de la personne (elle a déménagé). Ajoute un numéro de téléphone à sa fiche. Affiche la liste de toutes les informations disponibles sur cette personne (les clés) et leurs valeurs.

---

## S-Challenge 4 — Le ticket de caisse

Tu travailles à la caisse d'un magasin. Crée un tableau de 5 articles achetés, chaque article est un objet avec un nom, une quantité et un prix unitaire. Affiche chaque ligne du ticket sous la forme "Lait x2 = 3.00€". Calcule et affiche le sous-total, la TVA (20%) et le total TTC.

---

## S-Challenge 5 — Le trombinoscope

Crée un tableau de 6 objets représentant des étudiants (nom, prénom, âge, moyenne). Parcours le tableau et affiche les étudiants qui ont une moyenne supérieure ou égale à 12. Ensuite, affiche les étudiants triés du plus jeune au plus âgé. Enfin, cherche un étudiant par son nom : s'il existe affiche ses informations, sinon affiche "Étudiant non trouvé".

---

✅ **Checklist sauvetage S1** : Je sais créer et parcourir un tableau, créer un objet, manipuler un tableau d'objets, faire des calculs et des recherches.

---

---

# 🔴 MARDI — Renforcement : Méthodes de tableaux (1h)

---

## R-Challenge 1 — Le gestionnaire de playlist

Tu développes un lecteur de musique. Tu as un tableau de 10 chansons (chaque chanson est un objet : titre, artiste, durée en secondes, genre).

1. Affiche uniquement les titres de toutes les chansons
2. Crée un nouveau tableau contenant uniquement les chansons de genre "Rock"
3. Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)
4. Calcule la durée totale de la playlist en minutes et secondes
5. Trouve la chanson la plus longue
6. Vérifie si toutes les chansons durent moins de 6 minutes
7. Vérifie si au moins une chanson est du genre "Jazz"
8. Trie les chansons par durée, de la plus courte à la plus longue

---

## R-Challenge 2 — L'analyse des ventes

Tu es data analyst dans un magasin. Tu as un tableau de 12 objets représentant les ventes mensuelles (mois, chiffre_affaires, nb_clients, ville).

1. Calcule le chiffre d'affaires total de l'année
2. Calcule le chiffre d'affaires moyen par mois
3. Trouve le mois avec le meilleur chiffre d'affaires
4. Trouve le mois avec le moins de clients
5. Crée un nouveau tableau avec uniquement les mois où le CA dépasse 50 000€
6. Crée un résumé par ville : pour chaque ville, le CA total et le nombre total de clients
7. Trie les mois par chiffre d'affaires décroissant
8. Calcule la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la

---

## R-Challenge 3 — Le système de notation 🔥

Un site web de recettes a un tableau d'avis utilisateurs (pseudo, note de 1 à 5, commentaire, date). Tu as 15 avis.

1. Calcule la note moyenne arrondie à 1 décimale
2. Compte combien d'avis par note (combien de 1 étoile, combien de 2 étoiles, etc.)
3. Filtre les avis positifs (≥ 4) et les avis négatifs (≤ 2)
4. Trie les avis du plus récent au plus ancien
5. Trouve l'avis le plus long (en nombre de caractères dans le commentaire)
6. Crée un résumé : "4.2/5 basé sur 15 avis — 8 positifs, 3 négatifs, 4 neutres"

---

---

# 🔴 MERCREDI — Renforcement : Objets et tableaux d'objets (1h)

---

## R-Challenge 4 — Le carnet d'adresses professionnel

Tu crées un CRM simplifié. Chaque contact est un objet avec : nom, entreprise, email, telephone, ville, et un objet imbriqué `adresse` (rue, code_postal, ville, pays).

1. Crée 6 contacts avec des adresses complètes
2. Affiche le nom et la ville de chaque contact
3. Regroupe les contacts par ville : pour chaque ville, la liste des noms
4. Cherche tous les contacts d'une entreprise donnée
5. Modifie l'adresse d'un contact (il a déménagé)
6. Ajoute un champ "dernierContact" (date) à chaque contact
7. Affiche les contacts que tu n'as pas contactés depuis plus de 30 jours

---

## R-Challenge 5 — La gestion de stock d'un restaurant

Tu gères le stock d'ingrédients d'un restaurant. Chaque ingrédient est un objet : nom, quantite, unite (kg, litres, pièces), prix_unitaire, seuil_alerte, categorie (légume, viande, épice, boisson).

1. Crée 12 ingrédients de 4 catégories différentes
2. Affiche les ingrédients dont la quantité est en dessous du seuil d'alerte
3. Calcule la valeur totale du stock (quantité × prix unitaire)
4. Affiche la valeur du stock par catégorie
5. Simule une commande : vérifie si les ingrédients nécessaires sont disponibles. Si oui, décrémente le stock. Si non, affiche ce qui manque
6. Génère une liste de courses : tous les ingrédients sous le seuil d'alerte avec la quantité à commander pour revenir au double du seuil

---

## R-Challenge 6 — Le classement sportif 🔥

Tu gères le classement d'un tournoi de football. Chaque équipe est un objet : nom, points, buts_pour, buts_contre, matchs_joues.

1. Crée 8 équipes avec des statistiques variées
2. Calcule la différence de buts pour chaque équipe (buts_pour - buts_contre)
3. Trie le classement : d'abord par points décroissant, puis par différence de buts en cas d'égalité
4. Affiche le classement formaté avec le rang : "1. PSG — 45 pts (diff: +28)"
5. Simule un match entre 2 équipes : mets à jour les points (3 victoire, 1 nul, 0 défaite), les buts et les matchs joués
6. Après 5 matchs simulés, réaffiche le classement mis à jour

---

---

# 🔴 JEUDI — Renforcement : CRUD et logique métier (1h)

---

## R-Challenge 7 — Le système de réservation d'un restaurant

Tu développes le système de réservation d'un restaurant (30 places max).

1. Crée une structure pour gérer les réservations : chaque réservation a un id, un nom_client, un nombre_personnes, une date, une heure, un statut (confirmée, en attente, annulée) et un telephone
2. Écris la logique pour ajouter une réservation : vérifie que le total de personnes sur ce créneau (date + heure) ne dépasse pas 30. Si c'est plein, la réservation passe en "en attente"
3. Écris la logique d'annulation : change le statut en "annulée" et vérifie si des réservations en attente pour ce créneau peuvent maintenant être confirmées
4. Affiche les réservations d'une date donnée, triées par heure
5. Calcule le taux d'occupation d'une journée (places réservées / 30 par créneau)
6. Teste avec 8 réservations en incluant les cas limites : créneau plein, annulation qui libère une place

---

## R-Challenge 8 — Le panier e-commerce intelligent

Tu développes la logique du panier d'un site e-commerce.

1. Le panier contient un tableau d'articles. Chaque article référence un produit (id, nom, prix, stock_disponible) et une quantité
2. Logique d'ajout : si le produit est déjà dans le panier, augmente la quantité sans dépasser le stock. Sinon, ajoute-le
3. Logique de modification de quantité : vérifie que la nouvelle quantité ne dépasse pas le stock
4. Logique de suppression d'un article
5. Calculs : sous-total par article, total du panier, nombre total d'articles
6. Codes promo : "BIENVENUE" = -15%, "NOEL2025" = -10€ si total > 50€, "LIVGRATUITE" = -7€ de frais. Un seul code à la fois
7. Récapitulatif complet : lignes, remise, frais de livraison (7€, gratuits si total > 100€), TVA 20%, total TTC

---

## R-Challenge 9 — Le convertisseur de devises 🔥

Tu crées un convertisseur multi-devises pour une application de finance.

1. Crée un objet contenant les taux de change par rapport à l'euro : USD (1.08), GBP (0.86), MAD (10.85), JPY (162.5), CAD (1.47)
2. Écris la logique de conversion : convertit d'abord en euros puis dans la devise cible
3. Adapte-la pour convertir un panier entier (tableau de prix)
4. Affiche la valeur d'un montant dans TOUTES les devises disponibles simultanément
5. Stocke un historique des conversions (date, montants, devises). Affiche l'historique
6. Statistiques : devise la plus demandée, montant total converti, conversion la plus fréquente

---

---

# 🏆 VENDREDI — Mini-Projet : La Marketplace (2-3h)

> ✅ Validé (≥12/20) → S2 | ❌ Non validé → challenges weekend

---

## Brief

Tu es développeur dans une startup. On te demande de créer le prototype d'une marketplace de produits d'occasion en JavaScript (console).

## Fonctionnalités

**1. Gestion des utilisateurs (2 pts)**

La marketplace a des vendeurs et des acheteurs. Chaque utilisateur a : un id, un pseudo, un email, un rôle (vendeur/acheteur), une note moyenne, un solde (porte-monnaie virtuel). Crée au moins 5 utilisateurs.

**2. Gestion des annonces (4 pts)**

Un vendeur peut publier une annonce : id, vendeur_id, titre, description, prix, categorie (Électronique, Vêtement, Meuble, Sport, Autre), etat (neuf, très bon, bon, acceptable), statut (disponible, vendu, réservé), date_publication. Gère la publication (réservée aux vendeurs), la modification du prix et le retrait d'annonce.

**3. Recherche et filtrage (4 pts)**

Implémente la recherche par mot-clé (titre + description), par catégorie, par tranche de prix (min/max), par état et par vendeur. Les filtres doivent être combinables. Implémente aussi le tri par prix, par date et par note du vendeur.

**4. Système d'achat (4 pts)**

Un acheteur peut acheter une annonce : vérifie que l'annonce est disponible et que le solde est suffisant. Déduis le montant du solde acheteur, crédite le vendeur (moins 5% de commission) et passe l'annonce en "vendu". Garde un historique des transactions (date, acheteur, vendeur, annonce, montant, commission).

**5. Système d'avis (3 pts)**

Après un achat, l'acheteur peut noter le vendeur (1 à 5) avec un commentaire. Un acheteur ne peut noter qu'une seule fois par transaction. La note moyenne du vendeur se recalcule automatiquement. Affiche le profil complet d'un vendeur : note, nombre de ventes, avis reçus.

**6. Statistiques de la marketplace (3 pts)**

Nombre d'annonces par statut, chiffre d'affaires total, commission totale, top 3 des vendeurs par note, catégorie la plus populaire, prix moyen par catégorie.

## Barème : /20

Structure et données : /2 | Annonces CRUD : /4 | Recherche/filtres : /4 | Achat + solde : /4 | Avis + notation : /3 | Statistiques : /3

## Challenges weekend (si non validé)

**Challenge 1** : Crée un gestionnaire d'annonces simplifié : CRUD sur les annonces, 1 filtre par catégorie, 1 tri par prix.

**Challenge 2** : 5 katas Codewars niveau 7 sur la manipulation de tableaux d'objets.
