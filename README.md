# zara-web-challenge

** ***Important! [Node](https://nodejs.org/en/download) and [pnpm](https://pnpm.io/installation) must be installed to run this project.*** **
<br>
Node version: **18.12.1**
<br>
pnpm version: **8.15.6**
<br>

## **--- Used dependencies ---**

-> Vite 5.2.0
<br>
-> React 18.2.0
<br>
-> Typescript 5.2.2
<br>
-> React Router Dom 6.23.1
<br>
-> Sass 1.77.6
<br>
-> ESLint with Standar library (8.57.0 & 17.1.0)
<br>
-> Prettier 5.2.2

### Testing library

-> Jest 29.7.0


## **--- Initialize ---**

**-> pnpm i**

### Important! Add your developer keys 
Before starting the dev server or making a build it is necessary to add the file which contains your api keys.
This file should be in the root project with the name ***api-key.json***

This file should have your api keys internally with this format:
{
    "public_key": "your public key",
    "private_key": "your private key"
}

You can get the api keys by following the steps indicated here: https://developer.marvel.com/documentation/getting_started


## **--- Running Dev server ---**

**-> pnpm start**

By executing this command you will start the Vite dev server locally. You can access to the page by ***http://localhost:8080/*** or ***http://(your_private_ip):8080/***
<br>
If you need to change the server port, you can do it by just changing it in the ***vite.config.ts*** file, in the ***port*** section.

To stop the server, you just have to press **CTRL + C** in the command line.


## **--- Making a build ---**

**-> pnpm run build**

By using this command you will generate a build of the project which can be used leter in any web server.
<br>
The builds will be located in ***./dis*** directory.

