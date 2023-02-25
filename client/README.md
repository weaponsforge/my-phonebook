## my-phonebook/client

This directory contain the web user interfaces (UI) for interacting My Phonebook.

## Requirements

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
   - > **NOTE:** Using nvm is optional if you want to continue using your pre-installed NodeJS.
3. NodeJS LTS v19.7.0 installed using nvm
   - node v19.7.0
   - npm v9.5.0
   - >**NOTE:** We will use v19.7.0 for the official production builds but feel free to use other NodeJS versions by setting `engine-strict=false` in the `.npmrc` file when working on localhost development as needed.

### Core Libraries/Frameworks

(See package.json for more information)

1. NextJS 13.2.0
2. React 18.2.0
3. Material UI v5.11.10

## Installation

1. Install dependencies.<br>
`npm install`


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
