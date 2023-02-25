## my-phonebook

My Phonebook is an online multi-user web application clone of a regular Contacts application found on mobile phones. It will let users securely manage their Contacts by allowing them to create a new Contact, edit or delete existing Contacts, view the information of an existing Contact, and view a list of existing Contacts. Moreover, it will let users search for existing Contact and export Contacts information into a CSV and PDF file.

My Phonebook will consist of a front-end website (client) and a secure REST API running on the backend. It will implement security best practices through a registration and login component. Users will be able to view and manage only the Contacts that they create.

> This project will also serve as a practice for catching up and implementing best practices for using React, Firebase, Express and general software development.

## Software Documentation

- [project plan v1.0](/project-plan.pdf)

## Requirements

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
   - > **NOTE:** Using nvm is optional if you want to continue using your pre-installed NodeJS.
3. NodeJS LTS v19.7.0 installed using nvm
   - node v19.7.0
   - npm v9.5.0
   - >**NOTE:** We will use v19.7.0 for the official production client and server builds but feel free to use other NodeJS versions by setting `"engine-strict=false"` in the `.npmrc` file when working on localhost development as needed, but please use **v19.7.0** when installing new modules. Do not commit the package.json or package-lock.json files should they change when `"engine-strict=false"`.

### Core Libraries and Frameworks

1. NextJS 13.2.0 and React 18.2.0 on client app

## Installation

1. Clone this repository.<br>
`https://github.com/weaponsforge/my-phonebook.git`

2. Follow the instructions on the **README** files inside the `/client` and `/server` directories for more information on configuring and using the client and backend.

@weaponsforge<br>
20220222
