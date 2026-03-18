# Semaine 2 - UML et SQL

## Objectifs

- Modeliser des systemes avec les diagrammes UML (cas d'utilisation, classes)
- Ecrire des requetes SQL de complexite intermediaire a avancee (jointures, agregations, sous-requetes)
- Etablir le lien entre le modele objet et le schema relationnel

## Outils

- UML : Draw.io (gratuit, en ligne) ou StarUML
- SQL : MySQL Workbench, DBeaver ou terminal MySQL/PostgreSQL
- PlantUML : les exercices UML fournissent des stubs `.puml` a completer

## Rappels PlantUML

```
@startuml
actor Utilisateur
usecase "Se connecter" as UC1
Utilisateur --> UC1
@enduml
```

## Organisation

| Jour     | Theme                                   |
|----------|-----------------------------------------|
| Jour 01    | Sauvetage : SQL basique (avec solutions)|
| Jour 02    | UML - Diagrammes de cas d'utilisation   |
| Jour 03 | UML - Diagrammes de classes             |
| Jour 04    | SQL - Jointures et agregations avancees |
| Jour 05 | Mini-projet : Bibliotheque numerique    |
