<p align="center">
  <img src="https://www.me-mines-saint-etienne.org/wp-content/uploads/2017/11/logo-ecole-des-mines-saint-etienne.png"/></a>
</p>

## 🚀 Installation

```bash
$ npm install
```


## ▶️ Exécuter l'application (sans guillotine)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 📖 Lire les données avec Postman

- 👩‍🚀 Lancer Postman
- 📑 Importer le fichier `Station.postman_collection.json` dans Postman
-  🌳 Ouvrir l'onglet `Environnement` et choisir l'url de provenance des données
    - `url local` : locale
    - `url` : API déployée
- Lancer une requête préenregistrée
- Croiser les doigts 🤞


## ✍ Description

#### Voici notre réutilisation d'une [base de données](https://data.economie.gouv.fr/api/records/1.0/download/?dataset=prix-carburants-fichier-instantane-test-ods-copie%40opendatamef&q=&format=json&refine.ville=Paris) contenant les stations essences en Île de France

###### 📊 Données disponibles
Parmi les informations disponibles dans la base de données, nous avons retenu les suivantes : 
- `id` l'identifiant de la station,
- `address` son adresse,
- `city` la ville,
- `brand` la marque de la station,
- `pc` le code postal,
- les différents types de carbuants avec :
  - `price_name` son nom,
  - `price_val` son prix, 
  - `update` la date de la dernière actualisation,
  - `shortage` les carburants subissant une pénurie,
- `service` les services disponibles dans la station,
- ses coordonnées :
  - `lat` la latitude,
  - `long` la longitude.
  
Nous avons par ailleurs ajouté un attribut : 
- `fav` le statut favori (oui/non)

###### 📈 Fonctionnalités 
- GET 
  - `getAllStations` affiche toutes les stations
  - `getAllStationsPaginated` affiche toutes les stations en version paginée
  - `getStationInfo` affiche les informations à propos d'une station
- POST 
  - `createStation` crée une station
  - `searchStation` cherche une station
- PUT 
  - `setFavoriteStation` met une station en favori
- DELETE 
  - `deleteStation` supprime une station

# Auteurs

👨‍🦰 Niels POTIE (niels.potie@etu.emse.fr)

👩 Elise VERDIER (elise.verdier@etu.emse.fr)
