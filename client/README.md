## my-phonebook/client

This directory contains the web user interfaces (UI) for interacting with My Phonebook.

### Live Apps

Development: https://myphonebook-app-dev.web.app/<br>
Production: https://weaponsforge.github.io/my-phonebook/

## Requirements

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
   - > **NOTE:** Using nvm is optional if you want to continue using your pre-installed NodeJS.
3. NodeJS LTS v18.14.2 installed using nvm
   - node v18.14.2
   - npm v9.5.0
   - >**NOTE:** We will use v18.14.2 for the official production builds but feel free to use other NodeJS versions by setting `"engine-strict=false"` in the `.npmrc` file when working on localhost development as needed, but please use **v18.14.2** when installing new modules. Do not commit the package.json or package-lock.json files should they change when `"engine-strict=false"`.

### Core Libraries/Frameworks

(See package.json for more information)

1. NextJS 13.2.1
2. React 18.2.0
3. Firebase 9.17.1
4. Material UI v5.11.10
5. Redux Toolkit v1.9.3
   - Redux v8.0.5

## Installation

### General Set-up and Configuration

1. Install dependencies.<br>
`npm install`

2. Stop any process that might be using port `3000` because the NextJS client app will use this port in the proceeding steps.

3. Set up the environment variables. Create a `.env` file inside the root project directory with reference to the `.env.example` file.

   | Variable Name                                | Description                                                                                                                                                                                                                                                                                                                                              |
   | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | NEXT_PUBLIC_BASE_PATH                        | This variable is the directory name where NextJS loads the app.<br><br>Set its value to blank `''` when working on development mode in localhost.<br>Set its value to the sub-directory name where the exported NextJS app is to be deployed, i.e. `/<YOUR_REPOSITORY_NAME>` when deploying on a repository (sub-directory) of a root GitHub Pages site. |
   | NEXT_PUBLIC_BASE_API_URL                     | My Phonebook's server base API url minus the forward slash.                                                                                                                                                                                                                                                                                             |
   | NEXT_PUBLIC_FIREBASE_WEB_API_KEY             | Firebase web API key from the Firebase Project Settings configuration file.                                                                                                                                                                                                                                                                              |
   | NEXT_PUBLIC_FIREBASE_WEB_AUTHDOMAIN          | Firebase web auth domain key from the Firebase Project Settings configuration file.                                                                                                                                                                                                                                                                      |
   | NEXT_PUBLIC_FIREBASE_WEB_PROJECT_ID          | Firebase web project ID from the Firebase Project Settings configuration file.                                                                                                                                                                                                                                                                           |
   | NEXT_PUBLIC_FIREBASE_WEB_STORAGE_BUCKET      | Firebase web storage bucket key from the Firebase Project Settings configuration file.                                                                                                                                                                                                                                                                   |
   | NEXT_PUBLIC_FIREBASE_WEB_MESSAGING_SENDER_ID | Firebase web messaging sender ID from the Firebase Project Settings configuration file.                                                                                                                                                                                                                                                                  |
   | NEXT_PUBLIC_FIREBASE_WEB_APP_ID              | Firebase web web app key from the Firebase Project Settings configuration file.                                                                                                                                                                                                                                                                          |
   | NEXT_PUBLIC_FIREBASE_WEB_MEASUREMENT_ID      | Firebase web measurement ID from the Firebase Project Settings configuration file.                                                                                                                                                                                                                                                                       |
   | NEXT_PUBLIC_MEDIA_BG1                        | Firebase storage download URL of the hi-resolution asset file "loginBgResized.jpg"                                                                                                                                                                                                                                                                       |
   | NEXT_PUBLIC_RANDOM_JOKE_API                  | Access URL to the JokeAPI, a REST API that serves uniformly and well formatted jokes.                                                                                                                                                                                                                                                                    |
   | WATCHPACK_POLLING | Enables hot reload on NextJS apps (tested on NextJS v13.2.1) running inside Docker containers on a Windows host. Set it to `true` if running Docker Desktop with WSL2 on a Windows OS.|

## Firebase Setup and Configuration

The following steps and instructions requires login to Firebase CLI. Read on the [Firebase CLI Quick Usage Reference](#firebase-cli-quick-usage-reference) section for more information on common Firebase CLI usage and examples.

### Firestore Database

1. Create and initialize a Firestore Database in the [Firebase Web console](https://firebase.google.com/).
2. Deploy the Firestore Security Rules defined in the `"firestore.rules"` file using the Firebase CLI.<br>
`firebase deploy --only firestore:rules`

### Firebase Storage

1. Create and initialize a Firestore Storage in the [Firebase Web console](https://firebase.google.com/).
2. Deploy the Firebase Storage Security Rules defined in the `"storage.rules"` file using the Firebase CLI.<br>
`firebase deploy --only storage:dev`
3. Allow CORS on Firebase Storage using Google Cloud Shell
   - Go to your Firebase project’s google cloud console on http://console.cloud.google.com/home.
   - Activate the cloud shell by clicking the **Activate Cloud Shell** button on the upper right menu.
   - Create a cors.json file on the cloud shell using any of it's cloud-based text editors. Copy and paste the following contents to the JSON file:<br>

      ```
      [
         {
            "origin": ["*"],
            "method": ["GET"],
            "maxAgeSeconds": 3600
         }
      ]
      ```
   - Put whitelisted domains in the cors.json file's `"origin"` field value as needed. For example:<br>
`"origin": ["https://weaponsforge.github.io"]`
      - Run the command on cloud shell. Replace `BUCKET_NAME` with your Firebase Storage bucket name:
         - `gsutil cors set cors.json gs://BUCKET_NAME`
         - `gsutil cors set cors.json gs://mybucket.appspot.com` (Example)
      - View the current cors configuration of a bucket:
         - `gsutil cors get gs://BUCKET_NAME`

## Usage

1. Run the project in development mode:<br>
`npm run dev`

2. Create or update React files and other scripts.

3. Run the `"npm run lint"` script to check for lint errors before committing to the repository.

## Firebase CLI Quick Usage Reference

- Install Firebase CLI (using NodeJS), run:<br>
`npm install -g firebase-tools`

- Login/logout to your Firebase account using the Firebase CLI.
   - `firebase login` (login)
   - `firebase logout` (logout)
- Generate a Firebase CI token.
   - `firebase login:ci`
   - Copy the resulting token on the command line.
- Switch/use another firebase project.
   - `firebase use --add`
   - Select a firebase project from the list.


## Available Scripts

### `npm run dev`

Run the project in development mode. Launch the development website from:<br>
`http://localhost:3000`

### `npm run lint`

Check for lint errors.

### `npm run lint:fix`

Fix lint errors.

### `npm run export`

Export the static website.

### `npm start`

Load the static website built from `npm run export` (no hot reloads). View the built website on:<br>
`http://localhost:3000`

20230225
