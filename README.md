# 19 Progressive Web Applications (PWA): Text Editor

# React Portfolio

## Description

- Motivation: Showcase acquired skills and knowledge in a comprehensive text editor project.

- Project purpose: Develop a browser-based text editor as a Progressive Web Application (PWA) with offline functionality and data persistenc

- Problem solved: Enable users to create, store, and retrieve notes or code snippets reliably, regardless of internet connectivity.

- Learning outcome: Gain hands-on experience with PWAs, IndexedDB, idb package, Heroku deployment, ES6+ JavaScript, webpack, service workers, and caching.

- Additional benefits: Understand client-server folder structure, npm scripts, webpack plugins, real-time data storage, desktop installation, and optimal asset caching for enhanced performance.

## Table of Contents

- [How To Use](#how-to-use)
- [Installation](#installation)
- [Acceptance_Criteria](#acceptance-criteria)
- [Helpful Resources](#helpful-resources)
- [How to Contribute](#how-to-contribute)

## How To Use

[Link to the portfolio, deploy on Heroku](https://milad-text-editor-f961710e9d9a.herokuapp.com/)

The following animation demonstrates the application functionality:

![Demonstration of the finished Module 19 Challenge being used in the browser and then installed.](./Assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](./Assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)

## Installation

```
npm install
npm run start
or
npm start:dev // To run in he dev mode

```

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Helpful Resources

[Heroku Deployment Guide](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide/)

## How to Contribute

Challenges repository
This is an open-source project Licensed by MIT which allows you to contribute and used open source codes used in this repo (All Branches).
More info: https://g.co/kgs/QWcHhF

- Branches are named as modules [n] and each is a unique challenge.
- Master Branch contains the last solved challenge. (the read me you are reading through, is a default guide when NO challenge is available to help you do a pre-setup.)

# How to use the module and deploy

- Clone the repo and make it own

  # Https URL :

        git clone https://github.com/miladesmailpour/text-editor

  # ssh URL :

        git clone git@github.com:miladesmailpour/text-editor.git

  # Checking the fetch/pull and push URL :

        git remote -v

  # Modifing origin URL :

        git remote add origin [https/ssh URL of your repo] https://docs.github.com/en/get-started/quickstart/create-a-repo

  # Verifing the fetch/pull and push URL :

        git remote -v https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories

  # Chacking the status of local :

        git status

        "if local NOT updated"
        git add .
        git commit -m "[your comment]"
        git push origin master/main

- Checkout the module (the challenge you want to use and deploy)
  # Checkout to the desired challenge :
       git checkout module[n]
  # Verifing :
       git status
  # [Make the change you wish to have]
       What do you think needs to improve?
  # Commiting to local and updating the GitHub repo:
         git add .
         git commit -m "[your comment]"
         git push origin [your module name]
- Moving Modules to Master Branch and deploying:
  # Creating a pull request to update the master/main :
       https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  # Deploy through the GitHub :
       https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
