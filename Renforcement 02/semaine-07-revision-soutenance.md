# 📅 SEMAINE 7 — Révision et Préparation à la Soutenance du Fil Rouge

> 📌 **Note** : Cette semaine, pas de nouveau contenu technique. L'objectif est de consolider, de s'entraîner à l'oral et de repartir avec un plan d'action clair pour la soutenance finale. Sois honnête dans ton auto-évaluation : c'est le meilleur outil que tu aies.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Diagnostic personnel

Réponds sans recherche ni documentation à ces questions (note tes réponses, elles ne sont pas notées) :

1. Quelle est la différence entre `INNER JOIN` et `LEFT JOIN` ? Donne un exemple d'usage pour chacun.
2. Écris de mémoire une requête SQL qui récupère les 3 clients avec le CA le plus élevé ce mois.
3. Quelle est la différence entre une interface et une classe abstraite en PHP ?
4. Que fait `password_hash()` et pourquoi ne pas utiliser MD5 ?
5. Explique en 2 phrases ce qu'est une Promise et pourquoi on en a besoin.
6. Qu'est-ce qu'un token CSRF et comment ça protège un formulaire ?

---

## S-Challenge 2 — Révision ciblée par lacune

En fonction de tes réponses au challenge précédent, travaille pendant 1h15 sur les points que tu n'as pas pu répondre. Pour chaque lacune identifiée : lis la documentation ou un tutoriel (15 min max), écris un exemple de code de 10 à 20 lignes qui illustre le concept, explique le concept à voix haute comme si tu l'expliquais à quelqu'un d'autre.

---

## S-Challenge 3 — Structure du dossier projet

Passe en revue ton dossier de projet fil rouge. Vérifie que tu as bien : une présentation du contexte et des objectifs, les diagrammes UML (cas d'utilisation et classes), le schéma de la base de données, la description de l'architecture technique (MVC, structure des dossiers), les captures d'écran des fonctionnalités principales, les mesures de sécurité implémentées (avec du code), au moins 2 difficultés rencontrees et comment tu les as résolues. Identifie ce qui manque et priorise.

---

✅ **Checklist sauvetage S7** : J'ai identifié mes 3 principaux points faibles. J'ai un plan pour les travailler avant la soutenance. Mon dossier projet a au moins 5 sections complètes.

---

---

# 🔴 MARDI — Quiz de révision et mise en situation (1h)

---

## R-Challenge 1 — 20 questions flash

Réponds en moins de 2 minutes par question. L'objectif est la fluidité à l'oral, pas la perfection écrite.

1. Qu'est-ce que le polymorphisme ? Donne un exemple en PHP.
2. Pourquoi utiliser des requêtes préparées PDO ?
3. Quelle est la différence entre `Promise.all` et `Promise.allSettled` ?
4. Comment fonctionne l'event loop JavaScript ?
5. Qu'est-ce qu'une attaque XSS et comment la prévenir ?
6. Qu'est-ce qu'un index SQL et quand en créer un ?
7. Quelle est la différence entre composition et agrégation en UML ?
8. Comment fonctionne `async/await` sous le capot ?
9. Qu'est-ce qu'une transaction SQL et quelles propriétés doit-elle respecter (ACID) ?
10. Pourquoi `session_regenerate_id(true)` après la connexion ?
11. Qu'est-ce qu'une closure en JavaScript ?
12. Quelle est la différence entre `DELETE` et `TRUNCATE` ?
13. Comment valider les données côté serveur en PHP ?
14. Qu'est-ce que le pattern MVC ?
15. Comment fonctionne la recherche binaire et quelle est sa complexité ?
16. Qu'est-ce qu'une vue SQL et quelle est la différence avec une table ?
17. Comment représenter l'héritage dans un diagramme de classes ?
18. Qu'est-ce qu'un trigger SQL et dans quel cas en utiliser un ?
19. Quelle est la différence entre `abstract class` et `interface` ?
20. Qu'est-ce que le debouncing et pourquoi l'utiliser sur une barre de recherche ?

---

## R-Challenge 2 — Mise en situation : tirage au sort

Tire une des questions suivantes au hasard (ou demande au formateur d'en choisir une). Réponds **au tableau ou à l'oral** en 5 minutes maximum, comme si tu étais en soutenance.

- **SQL** : "Écris de mémoire une requête qui retourne, pour chaque département, le salarié le mieux payé."
- **PHP** : "Implémente une interface `Calculable` avec une méthode `calculer()` et 3 classes qui l'implémentent avec des logiques différentes."
- **JavaScript** : "Implémente un debounce de zéro et utilise-le pour une barre de recherche."
- **Conception** : "Dessine le diagramme de cas d'utilisation d'un site e-commerce simplifié avec 3 acteurs et 10 cas."
- **Architecture** : "Explique la différence entre un Repository et un Service dans une architecture MVC."

---

## R-Challenge 3 — Questions sur ton projet fil rouge 🔥

Prépare des réponses de 1 à 2 minutes pour les questions suivantes appliquées à **ton** projet :

1. Quelle est la requête SQL la plus complexe de ton application ? Explique-la ligne par ligne.
2. Comment as-tu géré l'authentification ? Montre le code du login.
3. Donne un exemple de requête préparée dans ton code et explique pourquoi elle protège contre les injections SQL.
4. Montre comment le token CSRF est généré et vérifié dans ton application.
5. Quelle partie de ton code es-tu le plus fier(e) et pourquoi ?
6. Si tu avais 2 semaines de plus, qu'est-ce que tu améliorerais en premier ?

---

---

# 🔴 MERCREDI — Entraînement oral et dossier projet (1h)

---

## R-Challenge 4 — Présentation du fil rouge (binômes)

Présente ton projet fil rouge à ton binôme en **10 minutes maximum** en suivant cette structure : contexte et objectif du projet (1 min), démonstration des fonctionnalités principales (5 min), architecture et choix techniques (2 min), difficultés rencontrées et solutions (2 min). Ton binôme joue le rôle du jury et note sur un papier : ce qui était clair et bien expliqué, ce qui manquait ou était confus, une question qu'il/elle poserait en vrai jury. Échangez les rôles.

---

## R-Challenge 5 — Intégrer les retours

Après la présentation croisée, identifie les **3 points** à améliorer dans ta présentation et dans ton dossier. Travaille-les pendant 30 minutes : ajoute les captures d'écran manquantes, renforce les justifications de choix, prépare une formulation plus claire pour les parties floues. Si ton code contient une partie que tu ne saurais pas expliquer (copié depuis un tutoriel sans comprendre), prends 15 minutes pour le comprendre ou le retirer et l'implémenter autrement.

---

## R-Challenge 6 — Quiz thématique ciblé 🔥

Selon les retours de ta simulation, choisis le quiz le plus pertinent pour toi et réponds aux 10 questions à l'écrit en 20 minutes :

**Quiz A — SQL** : jointures sur 3 tables, sous-requêtes corrélées, procédures stockées, transactions, index.

**Quiz B — PHP POO** : interfaces vs abstraites, polymorphisme, PDO préparé, CSRF, Singleton, MVC.

**Quiz C — JavaScript** : event loop, closures, Promise.all vs allSettled vs race, async/await, Fetch, LocalStorage.

**Quiz D — Conception** : include vs extend en UC, composition vs agrégation, cardinalités, transformer un texte en diagramme de classes.

---

---

# 🔴 JEUDI — Simulation de soutenance complète (1h)

---

## Simulation en conditions réelles

La simulation dure **20 minutes** par apprenant. Le formateur joue le rôle du jury et utilise la grille d'évaluation officielle.

**Déroulement** :
- 5 min : présentation du dossier projet (sans interruption)
- 5-8 min : démonstration live de l'application
- 7-10 min : questions techniques

**Questions types du jury** :

Sur la conception : "Pourquoi avoir utilisé une table de jointure ici plutôt qu'une clé étrangère directe ?" | "Si tu devais ajouter un système de notifications, comment modifierais-tu ton schéma ?"

Sur le code : "Montre-moi comment tu as empêché les injections SQL." | "Que se passe-t-il si la connexion à la base de données tombe pendant une transaction ?"

Sur les choix techniques : "Pourquoi une classe abstraite ici plutôt qu'une interface ?" | "Comment as-tu géré l'état de l'application côté JavaScript ?"

Sur la projection : "Qu'est-ce que tu ferais différemment si tu recommençais ce projet ?" | "Comment déploierais-tu cette application en production ?"

**Après la simulation** : le formateur donne un debriefing de 5 minutes avec les points forts, les 2-3 axes d'amélioration prioritaires pour demain et un plan d'action précis.

---

---

# 🏆 VENDREDI — Évaluation finale et bilan individuel

> Dernière journée du programme de renforcement

---

## Matinée — 2ème simulation améliorée (15 min)

Après avoir intégré les retours du jeudi, repasse une simulation. L'objectif est de mesurer la progression sur les points identifiés la veille. Concentre-toi particulièrement sur les 2-3 axes d'amélioration du debriefing.

---

## Après-midi — Bilan et projection

**Évaluation finale indicative** : 20 questions couvrant les 4 axes du programme (SQL, PHP, JS, UML). Note sur 20. Cette note est indicative — elle ne remplace pas la soutenance officielle mais permet de mesurer la progression depuis le début du programme.

**Bilan individuel** : Le formateur remet à chaque apprenant un document écrit incluant :

1. Les compétences maîtrisées (avec les exercices comme preuve)
2. Les compétences partiellement acquises et comment les consolider
3. Les points forts observés pendant le programme
4. Les 3 axes d'amélioration prioritaires avant la soutenance finale
5. La liste précise des sujets à réviser (pas générique — des sujets ciblés)
6. Les ressources recommandées selon les lacunes identifiées

**Ressources de révision finale** :

- javascript.info/async-await — le cours le plus clair sur async/await
- sqlbolt.com — exercices interactifs SQL progressifs
- php.net/manual/fr/language.oop5.php — référence officielle POO PHP
- use-the-index-luke.com — comprendre les index SQL en profondeur
- plantuml.com/fr — générer des diagrammes UML depuis du texte

---

## Checklist finale avant soutenance

- [ ] Mon diagramme de cas d'utilisation est complet (tous les acteurs, toutes les fonctionnalités)
- [ ] Mon diagramme de classes peut être transformé en schéma SQL sans ambiguïté
- [ ] Je peux expliquer chaque requête SQL de mon application ligne par ligne
- [ ] Je peux montrer une requête préparée PDO et expliquer pourquoi elle protège contre les injections
- [ ] Je peux démontrer la protection CSRF dans mon code
- [ ] Je peux expliquer le pattern MVC et le rôle de chaque composant dans mon projet
- [ ] Je peux montrer un appel fetch et expliquer comment la réponse JSON est traitée
- [ ] Je peux expliquer un choix architectural (pourquoi cette structure, ce pattern, cette technologie)
- [ ] Mon dossier projet est complet et lisible par quelqu'un qui ne connaît pas mon projet
- [ ] Je peux répondre à "Qu'est-ce que tu ferais différemment ?" avec des éléments concrets
