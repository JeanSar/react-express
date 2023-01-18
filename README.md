# Web Temps réels et multi-dispositifs



## Etat actuel de l'app

Fonctionnel et déployé sur GitLab Pages.

## Dépendances

Version de NodeJS : v18.13.0

Les dépendances sont listées dans les package.json

## Setup
Pour installer les dépendances et faire un bundle du client React :
```
cd client
yarn install
yarn build
cd ../server
yarn install
```
## Utilisation
Pour lancer le serveur Express en local sur le port 3000 :
```
cd server
yarn start
```
Pour tester eslint sur les fichiers .ts et .tsx :
```
yarn run eslint src/*.tsx
```

