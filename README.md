# Argent Bank - Application Bancaire avec React et Redux

Le projet **Argent Bank** est une application bancaire développée avec **React** et **Redux** pour offrir une expérience utilisateur fluide et moderne. Ce projet met également en avant l'utilisation de **Swagger** pour la documentation des API et de bonnes pratiques de **Green Code** pour l'optimisation des performances et des composants.



### Compétences développées :
- **React** : Création d'une interface utilisateur réactive et responsive.
- **Redux** : Gestion de l'état global pour maintenir une cohérence des données dans toute l'application.
- **Swagger** : Documentation des API REST pour une communication claire entre le front-end et le back-end.
- **Green Code** : Optimisation des images et création de composants réutilisables pour minimiser l'empreinte carbone de l'application.

## Fonctionnalités de l'application

### Phase 1 : Authentification des utilisateurs
- **Page d'accueil** : Accessible à tous les utilisateurs.
- **Connexion** : Les utilisateurs peuvent se connecter avec leurs identifiants.
- **Déconnexion** : Les utilisateurs peuvent se déconnecter en toute sécurité.
- **Profil utilisateur** :
  - Accessible uniquement après une connexion réussie.
  - Permet de visualiser les informations personnelles.
  - L'utilisateur peut modifier son pseudo (mais pas son prénom ou son nom).

### Phase 2 : Transactions
- **Visualisation des transactions** :
  - Toutes les transactions du mois en cours, groupées par compte.
  - Détails des transactions accessibles dans une vue dédiée.
- **Modification des transactions** :
  - Mise à jour des catégories et des notes associées aux transactions.

> **Note :** Les transactions ne peuvent pas être ajoutées ou supprimées.



### Stack technique utilisée :
- **React** : Création des composants front-end.
- **Redux** : Gestion de l'état global de l'application.
- **Node.js** : Exécution du code JavaScript côté serveur.
- **Swagger** : Documentation et définition des points d'accès API.

### Points importants :
- Intégration avec le back-end via des appels API.
- Suivi des maquettes fournies pour assurer une expérience utilisateur conforme aux attentes.


## Bonnes pratiques mises en place
- **Green Code** :
  - Optimisation des images pour réduire leur poids et leurs dimensions.
  - Composants réutilisables pour limiter la répétition du code.
- **Documentation** : Toutes les routes API sont clairement documentées avec Swagger.





## Aperçu des routes API

Les routes API suivantes sont documentées avec Swagger :

### Phase 1 : Authentification
- **POST /user/login** : Connexion utilisateur.
- **GET /user/profile** : Récupération des informations de l'utilisateur connecté.
- **PUT /user/profile** : Mise à jour du pseudo utilisateur.

### Phase 2 : Transactions
- **GET /user/transactions** : Récupération des transactions groupées par compte.
- **GET /user/transaction/{id}** : Récupération des détails d'une transaction par son ID.
- **PATCH /user/transaction/{id}** : Mise à jour des informations d'une transaction (catégorie et notes).




