# Mise en situation — Questions techniques au tableau

## Principe

Chaque apprenant tire une question au hasard (ou choisit parmi une liste)
et y repond au tableau devant le groupe en 5 minutes maximum.
Le formateur et les autres apprenants posent des questions complementaires.

## Questions de mise en situation

### Categorie : Conception

A. "Un client vous demande de concevoir une application de livraison de repas.
    Dessinez le diagramme de cas d utilisation principal (4 acteurs, 10 cas minimum)."

B. "Transformer ce texte en diagramme de classes :
    Une banque a des comptes. Chaque compte appartient a un client.
    Il existe des comptes courants et des comptes epargne.
    Un client peut avoir plusieurs comptes. Un compte peut avoir plusieurs operations."

### Categorie : SQL

C. "Ecrire la requete qui retourne, pour chaque departement, le salaire moyen,
    le nombre d employes et le nom de l employe le mieux paye."

D. "Ecrire une procedure stockee qui transfere un montant d un compte a un autre
    de facon securisee (avec transaction et gestion des erreurs)."

### Categorie : PHP POO

E. "Implementer une interface `Calculable` avec une methode `calculer() : float`.
    Creer 3 classes qui l implementent : TaxeFR (20%), TaxeMA (10%), TaxeExonere (0%).
    Ecrire une fonction qui prend un tableau de Calculable et retourne la somme des taxes."

F. "Expliquer et coder le pattern Observer en PHP :
    un EventEmitter avec on(event, callback) et emit(event, data).
    Montrer l utilisation avec un exemple."

### Categorie : JavaScript

G. "Implementer une fonction `debounce(fn, delai)` de zero.
    L expliquer, puis l utiliser pour une barre de recherche."

H. "Expliquer async/await avec un exemple : fetcher des donnees,
    les transformer, les afficher dans le DOM. Gerer les erreurs."
