## my-phonebook

My Phonebook is an online multi-user web application clone of a regular Contacts application found on mobile phones. It will let users securely manage their Contacts by allowing them to create a new Contact, edit or delete existing Contacts, view the information of an existing Contact, and view a list of existing Contacts. Moreover, it will let users search for existing Contact and export Contacts information into a CSV and PDF file.

My Phonebook will consist of a front-end website (client) and a secure REST API running on the backend. It will implement security best practices through a registration and login component. Users will be able to view and manage only the Contacts that they create.

> This project will also serve as a practice for catching up and implementing best practices for using React, Firebase, Express and general software development.

## Live Preview

### Production

Website: https://weaponsforge.github.io/my-phonebook/<br>
Server: https://my-phonebook.vercel.app/

### Development

Website: https://my-phonebook-dev.web.app/<br>
Server: https://my-phonebook-dev.vercel.app/

## Software Documentation

- [project plan v1.0](/project-plan.pdf)

## Requirements

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
   - > **NOTE:** Using nvm is optional if you want to continue using your pre-installed NodeJS.
3. NodeJS LTS v18.14.2 installed using nvm
   - node v18.14.2
   - npm v9.5.0
   - >**NOTE:** We will use v18.14.2 for the official production client and server builds but feel free to use other NodeJS versions by setting `"engine-strict=false"` in the `.npmrc` file when working on localhost development as needed, but please use **v18.14.2** when installing new modules. Do not commit the package.json or package-lock.json files should they change when `"engine-strict=false"`.

### Core Libraries and Frameworks

1. Client app
   - NextJS 13.2.1
   - React 18.2.0
   - Firebase 9.17.1
2. Server app
   - Express 4.18.2

## Manual Installation

1. Clone this repository.<br>
`https://github.com/weaponsforge/my-phonebook.git`

2. Follow the instructions on the **README** files inside the `/client` and `/server` directories for more information on configuring and using the client and backend.

## Installation Using Docker

We can use Docker to run dockerized client and server apps for local development and production mode. The following methods require Docker and Docker compose correctly installed and set up on your development machine.

### Docker Dependencies

The following dependencies are used to build and run the image. Please feel feel free to use other OS and versions as needed.

1. Ubuntu 22.04.1
2. Docker version 23.0.1, build a5eeb1
3. Docker Compose v2.16.0

### Docker for Localhost Development

1. Set up the environment variables for the `/client` and `/server` directories like mentioned in the [Manual Installation](#manual-installation) section, step no. 2.
2. Verify that ports 3000 and 3001 are free because the client and server containers will use these ports.
3. Stop current-running my-phonebook containers, if any.
   ```
   docker compose -f docker-compose.dev.yml down
   docker compose -f docker-compose.prod.yml up
   ```
4. Stop and delete all docker instances for a fresh start.
   - > **NOTE:** Running this script will delete all docker images, containers, volumes, and networks. Run this script if you feel like everything is piling but do not proceed if you have important work on other running Docker containers.
   - ```
     sudo chmod u+x scripts/docker-cleanup.sh
     ./scripts/docker-cleanup.sh
     # Answer all proceeding prompts
     ```
5. Edit any of the files under the `/client` or `/server` directory after running step no. 2.2 and wait for their live reload on `http://localhost:3000` (client) and `http://localhost:3001` (server).
   ```
   # 2.1. Build the client and server containers for localhost development.
   docker compose -f docker-compose.dev.yml build

   # 2.2. Create and start the development client and server containers
   docker compose -f docker-compose.dev.yml up

   # 2.3. Stop and remove the development containers, networks, images and volumes
   docker compose -f docker-compose.dev.yml down
   ```

### Docker for Production Deployment

The following docker-compose commands build a small client image targeted for creating optimized dockerized apps running on self-managed production servers. An Nginx service serves the frontend client on port 3000. Hot reload is NOT available when editing source codes from the `/client` and `/server` directories.

1. Follow step numbers 1 - 4 in the [Docker for Localhost Development](#docker-for-localhost-development) section.

2. Build the client and server containers for production deployment.<br>
   - > **NOTE:** Run this step only once or as needed when housekeeping docker images or if there are new source code updates in the **/client** or **/server** directories.
   - `docker compose -f docker-compose.prod.yml build`

3. Load the production mode apps on `http://localhost:3000` (client) and `http://localhost:3001` (server) after running step no. 3.1.
   ```
   # 3.1. Create and start the production client and server containers.
   docker compose -f docker-compose.prod.yml up

   # 3.2. Stop and remove the production containers, networks, images and volumes
   docker compose -f docker-compose.prod.yml down
   ```

@weaponsforge<br>
20220222
