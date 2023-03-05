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

   | Variable Name        | Description                                                                                                                                                                                                                                                                                        |
   | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ALLOW_CORS           | Allow Cross-Origin Resource Sharing (CORS) on the API endpoints.<br><br>Default value is `1`, allowing access to domains listed in `ALLOWED_ORIGINS`.<br> Setting to `0` will make all endpoints accept requests from all domains, including Postman.                                              |
   | ALLOWED_ORIGINS      | IP/domain origins in comma-separated values that are allowed to access the API if `ALLOW_CORS=1`.<br> Include `http://localhost:3000` by default to allow CORS access to the **/client** app.                                                                                                      |
   | API_RATE_LIMIT       | It's the maximum number of allowed API requests on the server per `API_WINDOW_MS_MINUTES`. <br>Users will receive a `429 - Too many requests` server error after hitting the limit.<br>The limit will reset after API_WINDOW_MS_MINUTES minutes, after which users can resume making API requests. |
   | EMAIL, CLIENT_USER   | Google email configured for sending email and OAuth2                                                                                                                                                                                                                                               |
   | CLIENT_ID            | Google OAuth2 client ID.                                                                                                                                                                                                                                                                           |
   | CLIENT_SECRET        | Google OAuth2 client secret.                                                                                                                                                                                                                                                                       |
   | REFRESH_TOKEN        | Google OAuth2 refresh token.                                                                                                                                                                                                                                                                       |
   | REDIRECT_URI         | Redirect URI for the Google OAuth2 exchange.<br>Default value is https://developers.google.com/oauthplayground                                                                                                                                                                                     |
   | FIREBASE_SERVICE_ACC | The project's private key file contents, condensed into one line and minus all whitespace characters.<br><br>The service account JSON file is generated from the Firebase project's **Project Settings** page, on **Project Settings** -> **Service accounts** -> **Generate new private key**     |
   | FIREBASE_PRIVATE_KEY | The `private_key` entry from the service account JSON file.<br> <blockquote> **NOTE:** Experiment wrapping this value in double-quotes on WINDOWS OS localhost. Some systems may or may not require the double-quotes (i.e., Ubuntu).</blockquote>                                                 |

4. Run the localhost express web server for development:<br>
`npm run dev`

1. Load the localhost development website on:<br>
`http://localhost:3002`

1. View available NPM scripts in the [Available Scripts](#available-scripts) section for more information.

## GitHub Actions Variables

GitHub Actions use the following secrets to automate deployment.

| Variable Name          | Description                                   |
| ---------------------- | --------------------------------------------- |
| FIREBASE_TOKEN         | Firebase CI token                             |
| VERCEL_TOKEN           | Personal access token to the Vercel platform. |
| VERCEL_ORG_ID_DEV      | (Development) Vercel app's organization ID    |
| VERCEL_PROJECT_ID_DEV  | (Development) Vercel app's project ID         |
| VERCEL_ORG_ID_PROD     | (Production) Vercel app's organization ID     |
| VERCEL_PROJECT_ID_PROD | (Production) Vercel app's project ID          |

## Available Scripts

### `npm start`

Run the express server for production mode.

### `npm run dev`

Run the My Phonebook express server in development load with live reload using nodemon.

### `npm run lint`

Check lint errors.

### `npm run lint:fix`

Fix lint errors.

### `npm run docs`

Generate the server API documentation. Output is available on "`/server/public/docs`".

20230225
