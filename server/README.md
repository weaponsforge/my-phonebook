## my-phonebook/server

This directory contains the backend express app that serves My Phonebook's API endpoints.

Local URL: http://localhost:3001

### Dependencies

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
3. NodeJS 16.19.1 installed using nvm
   - node v16.19.1
   - npm v8.19.3

### Core Libraries/Frameworks

(See package.json for more information)

1. express 4.18.2

## Installation and Usage

1. Install dependencies.<br>
`npm install`

2. Stop any process that might be using port `3001` because the server apps will use this port in the proceeding steps.

3. Set up the environment variables. Create a `.env `file inside the **/server** directory with reference to the `.env.example` file.<br>

   | Variable Name   | Description                                                                                                                                                                                                                                           |
   | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ALLOW_CORS      | Allow Cross-Origin Resource Sharing (CORS) on the API endpoints.<br><br>Default value is `1`, allowing access to domains listed in `ALLOWED_ORIGINS`.<br> Setting to `0` will make all endpoints accept requests from all domains, including Postman. |
   | ALLOWED_ORIGINS | IP/domain origins in comma-separated values that are allowed to access the API if `ALLOW_CORS=1`.<br> Include `http://localhost:3000` by default to allow CORS access to the **/client** app.                                                         |


4. Run the localhost express web server for development:<br>
`npm run dev`

5. Load the localhost development website on:<br>
`http://localhost:3002`

6. View available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## Available Scripts

### `npm start`

Run the express server for production mode.

### `npm run dev`

Run the My Phonebook express server in development load with live reload using nodemon.

### `npm run lint`

Check lint errors.

### `npm run lint:fix`

Fix lint errors.

20230225
