# 📅 SEMAINE 5 — JavaScript : Logique, Algorithmes et Programmation Asynchrone

> 📌 **Note** : La documentation MDN sur les Promises est sur developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise. Pour Fetch, consulte developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch. Pour les algorithmes, javascript.info propose d'excellentes explications en français.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Révision des fonctions

Écris une fonction `calculerRemise(prix, taux)` qui retourne le prix après remise. Écris une fonction `formaterPrix(montant, devise)` qui retourne une chaîne formatée (ex: "1 250,00 MAD"). Écris une fonction `validerEmail(email)` qui retourne `true` si l'email est valide (contient @ et un point après). Écris une fonction `capitaliser(phrase)` qui met la première lettre de chaque mot en majuscule. Teste chaque fonction avec au moins 3 cas différents.

---

## S-Challenge 2 — Closures : une fonction qui se souvient

Écris une fonction `creerCompteur(depart, pas)` qui retourne un objet avec les méthodes `incrementer()`, `decrementer()` (minimum 0), `reset()` et `valeur()`. La valeur initiale et le pas sont "capturés" dans la closure. Crée deux compteurs indépendants et vérifie qu'ils ne partagent pas leur état. Écris ensuite une fonction `creerCalculatriceRemise(taux)` qui retourne une fonction : chaque appel prend un prix et retourne le prix remisé. Crée `remise10 = creerCalculatriceRemise(0.10)` et `remise20 = creerCalculatriceRemise(0.20)` et teste-les indépendamment.

---

## S-Challenge 3 — Ma première Promise

Écris une fonction `attendre(dureeMs)` qui retourne une Promise qui se résout après `dureeMs` millisecondes. Écris une fonction `simulerChargement(donnees, dureeMs)` qui retourne une Promise qui se résout avec les données après le délai. Écris une fonction `simulerErreur(message, dureeMs)` qui retourne une Promise qui rejette avec le message après le délai. Enchaîne ces Promises avec `.then()` et `.catch()` : charge des données, affiche-les, puis tente de charger des données qui échouent, gère l'erreur.

---

## S-Challenge 4 — setTimeout et callbacks

Sans utiliser les Promises, écris un compteur à rebours avec `setTimeout` : part de 5, affiche 5, 4, 3, 2, 1, "Terminé !" avec une seconde entre chaque. Ensuite, écris une fonction `retenterSiEchec(fn, nbTentatives, delaiMs)` qui appelle une fonction et, si elle lance une exception, la réessaie jusqu'à `nbTentatives` fois avec un délai entre chaque tentative. Teste avec une fonction qui échoue aléatoirement (Math.random() < 0.7).

---

## S-Challenge 5 — async/await basique

Réécris les exercices S-Challenge 3 en utilisant `async/await` au lieu de `.then()`. Crée une fonction `async` qui : charge un premier jeu de données (simulé avec un délai), affiche le résultat, charge un deuxième jeu de données qui peut échouer, gère l'erreur proprement avec `try/catch`, affiche un message final dans tous les cas (succès ou échec). Ajoute `console.log` avant et après l'appel `await` pour voir l'ordre d'exécution.

---

✅ **Checklist sauvetage S5** : Je comprends les closures, je sais créer et chaîner des Promises, je sais écrire une fonction async avec try/catch, je comprends l'ordre d'exécution asynchrone.

---

---

# 🔴 MARDI — Renforcement : Logique et algorithmes (1h)

---

## R-Challenge 1 — Algorithmes de tri et comparaison de performances

Implémente trois algorithmes de tri **sans utiliser `.sort()`** : le tri à bulles (avec optimisation : arrêter si aucun échange lors d'une passe), le tri par sélection (trouver le minimum à chaque passe), et le tri fusion (récursif, diviser pour mieux régner). Pour chaque algorithme, compte le nombre de comparaisons effectuées. Génère un tableau de 10 000 entiers aléatoires, exécute les 3 algorithmes sur des copies et compare les temps d'exécution et les nombres de comparaisons. Explique dans un commentaire pourquoi le tri fusion est plus efficace. Applique ensuite le tri fusion à un tableau d'objets commandes (montant décroissant, puis date ascendante en cas d'égalité).

---

## R-Challenge 2 — Recherche binaire et ses applications

Implémente la recherche binaire sur un tableau **déjà trié** : retourne l'index de la cible ou -1. Complexity attendue : O(log n). Adapte-la pour retourner l'index de la **première occurrence** si la cible apparaît plusieurs fois. Écris une variante qui retourne la **position d'insertion** pour garder le tableau trié (sans insérer, juste l'index). Applique la recherche binaire à un problème métier : un cinéma a 500 sièges numérotés stockés dans un tableau trié. Trouve la première série de `n` sièges consécutifs disponibles. Teste avec `n = 3` sur différentes configurations de sièges libres.

---

## R-Challenge 3 — Récursivité avancée 🔥

Résous ces 4 problèmes récursivement :

1. `sommeDigitale(n)` : additionne récursivement les chiffres d'un nombre jusqu'à obtenir un seul chiffre (9875 → 29 → 11 → 2).
2. `aplatirProfond(tableau)` : aplatit un tableau imbriqué à profondeur quelconque sans utiliser `.flat()`.
3. `genererPermutations(tableau)` : génère toutes les permutations d'un tableau.
4. Parcours d'arbre : sur une structure d'arbre hiérarchique (ex: organigramme d'entreprise avec `{nom, enfants: []}`), implémente `trouverNoeud(nom)`, `profondeurMax()`, `listerFeuilles()` et `compterNoeuds()`.

Bonus : résous le problème du sac à dos par force brute récursive — trouvela combinaison d'objets (chacun avec un poids et une valeur) qui maximise la valeur sans dépasser une capacité en poids.

---

---

# 🔴 MERCREDI — Renforcement : Promises et async/await (1h)

---

## R-Challenge 4 — Pipeline de traitement de données RH

Tu as un tableau de données d'employés et de départements stocké localement. Crée une série de fonctions qui retournent toutes des Promises (même si la donnée est locale — simule un délai de quelques ms pour pratiquer l'enchaînement). Le pipeline doit : charger les employés, enrichir chaque employé avec les données de son département (en parallèle pour tous les employés avec `Promise.all`), calculer les statistiques (salaire moyen, min, max, masse salariale par département, taux d'occupation du budget par département), générer un rapport HTML. Enchaîne tout avec `.then()` uniquement (pas d'`async/await` pour cet exercice), gère les erreurs avec un `.catch()` global.

---

## R-Challenge 5 — Monitoring multi-services avec async/await

Simule 4 services qui retournent des données météo, trafic, qualité de l'air et prévisions (délais différents : 400ms, 600ms, 800ms, 1200ms). Crée une fonction `getDashboard(ville)` en `async/await` qui :
1. Récupère météo, trafic et qualité de l'air **en parallèle** avec `Promise.all`
2. Si l'un d'eux échoue, utilise `Promise.allSettled` pour continuer avec les autres
3. Ajoute une alerte si température > 30°C ET trafic bloqué
4. Utilise `Promise.race` entre météo et trafic pour identifier le service le plus rapide
5. Charge le dashboard pour 3 villes **en parallèle** sans s'arrêter si une ville échoue

---

## R-Challenge 6 — File d'attente asynchrone avec limite de concurrence 🔥

Crée une classe `AsyncQueue` qui prend un `concurrenceMax` en paramètre. La méthode `enqueue(tacheFn)` accepte une fonction qui retourne une Promise. Si le nombre de tâches actives est inférieur à `concurrenceMax`, la tâche démarre immédiatement. Sinon, elle attend dans une file. Quand une tâche se termine, la suivante démarre automatiquement. La méthode `getStats()` retourne le nombre de tâches actives, en attente et terminées. Teste avec 8 "commandes" à traiter (délais aléatoires, 10% de chance d'échec), limite de 2 tâches simultanées. Affiche les stats au fil de l'exécution.

---

---

# 🔴 JEUDI — Renforcement : Fetch API, DOM et LocalStorage (1h)

---

## R-Challenge 7 — Client HTTP robuste

Crée une classe `HttpClient` qui encapsule `fetch`. Elle prend une URL de base en paramètre et expose les méthodes `get(endpoint, params)`, `post(endpoint, body)`, `put(endpoint, body)` et `delete(endpoint)`. La méthode centrale gère : les headers `Content-Type: application/json`, les codes d'erreur HTTP avec des messages différents selon le code (400, 401, 403, 404, 500), et un timeout de 5 secondes (utilise `Promise.race` avec un `setTimeout` qui rejette). Teste sur JSONPlaceholder (jsonplaceholder.typicode.com) : récupère les posts de l'utilisateur 1, crée un nouveau post, modifie-le, supprime-le, et tente d'accéder à un post inexistant pour tester la gestion du 404.

---

## R-Challenge 8 — CRUD avec LocalStorage et synchronisation API

Crée un gestionnaire de tâches qui stocke les données dans le LocalStorage et se synchronise avec l'API JSONPlaceholder. La création locale est immédiate (avec un id temporaire "temp-timestamp"). En arrière-plan, un POST est envoyé à l'API ; si l'API répond, l'id temporaire est remplacé par l'id réel. Si l'API échoue, la tâche est marquée "pending_sync". La bascule de statut (complète/incomplète) se fait localement puis un PUT est envoyé en arrière-plan. La suppression est locale immédiate + DELETE en arrière-plan. Une méthode `synchroniserPending()` rejoue les actions non synchronisées. Affiche les statistiques : total, complètes, actives, en attente de synchro, date de dernière synchronisation.

---

## R-Challenge 9 — Dashboard dynamique avec DOM 🔥

Sans framework, crée une interface HTML complète qui consomme l'API JSONPlaceholder. La page affiche des utilisateurs sous forme de cartes. Cliquer sur une carte affiche ses posts dans un panneau latéral (sans rechargement). Chaque post peut être déplié pour voir ses commentaires (chargés à la demande, pas au démarrage). Un champ de recherche avec debounce (attendre 400ms) filtre les posts en temps réel côté client. Un bouton "Rafraîchir" recharge les données et met à jour l'affichage. Un loader s'affiche pendant chaque requête. Les erreurs réseau sont affichées à l'utilisateur (pas juste dans la console). L'utilisateur sélectionné et les posts dépliés sont mémorisés dans le LocalStorage et restaurés au rechargement de la page.

---

---

# 🏆 VENDREDI — Mini-Projet : Dashboard avec API Publique (3h)

> ✅ Validé (≥12/20) → S6 | ❌ Non validé → challenges weekend

---

## Brief

Crée une application web complète en JavaScript vanilla qui consomme une API publique et offre une interface interactive. Choisis l'une des deux options.

## Option A — Dashboard Films (API TVMaze)

API gratuite, sans clé : `https://api.tvmaze.com`

L'application permet de rechercher des séries TV, d'afficher les résultats en cartes avec le poster et la note, de cliquer sur une série pour voir ses détails (résumé, genres, statut, réseau), de gérer une liste de favoris (LocalStorage), de filtrer les résultats par genre, et d'afficher des statistiques sur les résultats : note moyenne, répartition par statut (En cours / Terminée / À venir), genre le plus représenté. La recherche utilise un debounce de 500ms.

## Option B — Dashboard Recettes (API TheMealDB)

API gratuite, sans clé : `https://www.themealdb.com/api/json/v1/1/`

L'application affiche les catégories de plats au chargement. Cliquer sur une catégorie charge les plats de cette catégorie. Cliquer sur un plat affiche ses détails : liste des ingrédients avec mesures, instructions et lien vidéo YouTube. Un système de favoris (LocalStorage) permet de sauvegarder des plats. Un panier de courses consolide les ingrédients de plusieurs plats avec dédoublonnage. Un bouton copie le panier dans le presse-papier. La recherche par nom de plat utilise un debounce de 400ms.

## Contraintes techniques (communes)

JavaScript vanilla uniquement (pas de React, Vue, jQuery). Tout appel API en `async/await` avec `try/catch`. Interface responsive (mobile-friendly). Gestion du cas "pas de résultat", du loader pendant les requêtes, et des erreurs réseau affichées à l'utilisateur.

## Barème : /20

Fonctionnalités de base (recherche + affichage) : /4 | Gestion erreurs + loader : /2 | Favoris fonctionnels : /3 | Filtres ou statistiques : /3 | Qualité du code (async/await, organisation) : /3 | Interface responsive et lisible : /3 | Bonus (pagination, mode sombre, historique...) : /2

## Challenges weekend (si non validé)

**Challenge 1** : Réalise seulement la recherche + affichage de cartes + un filtre statique sur les résultats. Pas de favoris ni de statistiques.

**Challenge 2** : Reprends R-Challenge 7 et écris un test manuel de chaque méthode HTTP avec des assertions (`if (résultat !== attendu) throw new Error(...)`) documentées dans la console.
