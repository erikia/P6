# P6
Projet 6 : Développez une interface utilisateur pour une application web Python

Ce projet a pour but de créer une application web (JustSteamIt) permettant de visualiser en temps réel un classement de films. 

# Processus
## API : OCMovies-API-EN-FR
Ce projet utilise une API version locale pour pouvoir faciliter la réalisation du front-end de l'application. 
Cette version de test de OCMovies-API se trouve sur le dépôt : [https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR]. L’objectif est de récupérer les données des films depuis l’API à l’aide de requêtes ajax et de les afficher sur une interface web. 

## Critères 
L'application filtre les données en fonction des critères :
- Catégorie : Film mieux notés/Trending
- Catégorie : Romance
- Catégorie : Animation
- Catégorie : Triller
- Catégorie : Adventure
- Catégorie : Comedy

## Infomation
La mise à jour des données doit se faire automatiquement. 
Chaque film possède ces propres informations : Title, Genre, Year, Imdb Score, Director et Actors



# Utilisation
## Installation de l'API OCMovies servant de base de données et serveur local :
Cloner et suivre les instructions du README.md de ce dépot github

Récupération du projet
        
        $ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git

Executer l'API dans le dossier de OCMovies-API-EN-FR ouvrir un terminal et démarrer le serveur avec la commande pipenv

        $ pipenv run python manage.py runserver


### Installation de l'application web sur Windows/Mac/Linux:
Dans le Windows Powershell il faudra cloner le git.

Récupération du projet
        
        $ git clone hhttps://github.com/erikia/P6.git

Dans le dossier P6 ouvrez un live server à partir d'index.html
