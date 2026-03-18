/**
 * EXERCICE 2 — async/await, Promise.all, Promise.race et Promise.allSettled
 *
 * Contexte :
 * Un systeme de monitoring qui interroge plusieurs services en parallele
 * et consolide les resultats.
 *
 * A implementer :
 *
 * 1. Simulateurs de services (utiliser setTimeout) :
 *
 *    serviceMeteo(ville) : resout apres 400ms
 *      => { ville, temperature: random(15,35), humidite: random(40,90), vent: random(0,50) }
 *      => Rejeter si ville === "Inconnu" avec "Ville non trouvee"
 *
 *    serviceTraffic(ville) : resout apres 600ms
 *      => { ville, niveauTrafic: "fluide"|"dense"|"bloqué", tempsEstime: random(5,60) }
 *
 *    serviceQualiteAir(ville) : resout apres 800ms
 *      => { ville, indiceQA: random(0,500), categorie: calcule selon indiceQA }
 *      => Categorier : 0-50 = "Bon", 51-100 = "Moyen", 101-200 = "Mauvais", > 200 = "Dangereux"
 *
 *    servicePrevision(ville) : resout apres 1200ms (lent)
 *      => { ville, previsions: [{ jour: "Jour 01", temp: N }, ...] pour 5 jours }
 *
 * 2. getDashboardVille(ville)
 *    Fonction async/await qui :
 *    a. Recupere meteo, traffic et qualite air EN PARALLELE avec Promise.all
 *    b. Si l un d eux echoue : gerer l erreur et continuer avec les autres (Promise.allSettled)
 *    c. Si la meteo ET le traffic sont disponibles ET que le niveau trafic est "bloqué"
 *       ET temperature > 30 : ajouter une alerte "Conditions difficiles"
 *    d. Retourner un objet consolide avec toutes les donnees disponibles
 *
 * 3. getDashboardRapide(ville)
 *    Utiliser Promise.race entre serviceMeteo et serviceTraffic.
 *    Retourner le resultat du service le plus rapide, avec son nom.
 *    Ex : { source: "meteo", donnees: { ... } }
 *
 * 4. chargerDashboardsMultiples(villes)
 *    Prend un tableau de villes (ex: ["Casablanca", "Rabat", "Marrakech"]).
 *    Charger tous les dashboards EN PARALLELE.
 *    Retourner un tableau d objets { ville, dashboard, erreur }.
 *    Ne pas s arreter si une ville echoue.
 *
 * 5. Tester avec :
 *    - getDashboardVille("Casablanca")
 *    - getDashboardRapide("Rabat")
 *    - chargerDashboardsMultiples(["Casablanca", "Rabat", "Inconnu", "Marrakech"])
 */

// Votre code ici
