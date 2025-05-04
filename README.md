# 🌐 Web Project Setup

![GitHub](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Unix%20%2F%20Linux-yellow)

## 📋 Table des matières

- [Contexte](#contexte)
- [Description du Projet](#description-du-projet)
- [Objectifs du Projet](#objectifs-du-projet)
- [Architecture du Programme](#architecture-du-programme)
- [Structure Générée](#structure-générée)
- [Scripts Fournis](#scripts-fournis)
  - [create_project.sh](#create_projectsh)
  - [create_project.cmd](#create_projectcmd)
  - [wps.cmd](#wps.cmd)
- [Utilisation](#utilisation)
  - [Sur Windows](#sur-windows)

---

## 📝 Contexte

Le projet **Web Project Setup** vous permet de créer une structure de base pour un site web statique en utilisant des scripts batch (.cmd) et bash (.sh). Ce TP est conçu pour vous familiariser avec la création de fichiers et de dossiers via des scripts, ainsi qu'avec la gestion de scripts dans différents environnements.

---

## 🛠 Description du Projet

Le but de ce projet est de créer automatiquement une structure de projet pour un site web statique. Les scripts fournis vous permettent de configurer cette structure aussi bien sur Windows que sur les systèmes Unix/Linux.

Les scripts effectueront les tâches suivantes :

- 📁 Créer un dossier principal pour le projet.
- 📂 Créer les sous-dossiers nécessaires.
- 📄 Créer des fichiers vides pour initialiser la structure du site web.

---

## 🎯 Objectifs du Projet

1. Créer une structure de dossiers et de fichiers pour un site web statique.
2. Automatiser la création de cette structure à l'aide de scripts batch pour Windows et bash pour Unix/Linux.
3. Implémenter une logique conditionnelle dans le script batch pour vérifier la présence du script bash avant de l'exécuter.
4. Apprendre à travailler avec des commandes de base pour la gestion des fichiers et des dossiers dans différents environnements.

---

## 🗂 Scripts Fournis

### `create_project.sh`

- **Type :** Script bash
- **Fonction :** Crée la structure de base du projet sur les systèmes Unix/Linux.
- **Emplacement :** `bin/create_project.sh`

### `create_project.cmd`

- **Type :** Script batch
- **Fonction :** Crée la structure de base du projet sur les systèmes Windows et appelle le script bash si celui-ci est présent.
- **Emplacement :** `bin/create_project.cmd`

### `wps.cmd`

- **Type :** Script batch
- **Fonction :** Exécute soit le script bash, soit le script batch en fonction de leur disponibilité, selon l'environnement (Windows ou Unix/Linux).
- **Emplacement :** Racine du projet ou accessible globalement via `Path`.

---

## 💻 Utilisation

### Sur Windows :

1. Ouvrez le terminal Cmder.
2. **Si `wps.cmd` est enregistré dans vos variables d'environnement `Path`** :
   - Exécutez simplement la commande suivante dans n'importe quel répertoire :
     ```batch
     wps
     ```
3. **Fonctionnement de `wps.cmd`** :

   - Le script vérifie d'abord si le fichier `create_project.sh` (script bash) existe.
   - Si le fichier existe, il sera exécuté via le terminal bash de votre environnement.
   - Si le fichier n'existe pas, cela signifie probablement que vous êtes sur un environnement Windows ou que le fichier est manquant. Le script batch `create_project.cmd` sera alors exécuté à la place.

   Voici un aperçu du fonctionnement du script `wps.cmd` :

   - La variable `CURRENT_DIR` est utilisée pour stocker le chemin vers le dossier racine du projet (défini par `%DOCUMENT_ROOT%` dans Laragon).
   - Les chemins vers les scripts batch et bash sont définis via des variables.
   - Le script exécute le script bash si disponible, sinon il exécute le script batch.

---

### 📜 Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus de détails.
