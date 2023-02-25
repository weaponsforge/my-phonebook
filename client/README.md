## my-phonebook/client

This directory contains the web user interfaces (UI) for interacting with My Phonebook.

## Requirements

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
   - > **NOTE:** Using nvm is optional if you want to continue using your pre-installed NodeJS.
3. NodeJS LTS v19.7.0 installed using nvm
   - node v19.7.0
   - npm v9.5.0
   - >**NOTE:** We will use v19.7.0 for the official production builds but feel free to use other NodeJS versions by setting `"engine-strict=false"` in the `.npmrc` file when working on localhost development as needed, but please use **v19.7.0** when installing new modules. Do not commit the package.json or package-lock.json files should they change when `"engine-strict=false"`.

### Core Libraries/Frameworks

(See package.json for more information)

1. NextJS 13.2.0
2. React 18.2.0
3. Material UI v5.11.10
4. Redux Toolkit v1.9.3
   - Redux v8.0.5

## Installation

1. Install dependencies.<br>
`npm install`

2. Stop any process that might be using port `3000` because the NextJS client app will use this port in the proceeding steps.

3. Set up the environment variables. Create a `.env` file inside the root project directory with reference to the `.env.example` file.

   | Variable Name         | Description                                                                                                                                                                                                                                                                                                                                              |
   | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | NEXT_PUBLIC_BASE_PATH | This variable is the directory name where NextJS loads the app.<br><br>Set its value to blank `''` when working on development mode in localhost.<br>Set its value to the sub-directory name where the exported NextJS app is to be deployed, i.e. `/<YOUR_REPOSITORY_NAME>` when deploying on a repository (sub-directory) of a root GitHub Pages site. |

## Usage

1. Run the project in development mode:<br>
`npm run dev`

2. Create or update React files and other scripts.

3. Run the `"npm run lint"` script to check for lint errors before committing to the repository.


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
