# NodeJS-Weather-WebApp
###  A simple web application to show how to use Express.js web framework. Serves up html, css, and images. 
# System Setup
-  Download and install NodeJS from Nodejs.org
-  Place JavaScript files into a project. I use Visual Studio Code, a free IDE. 
-  From the console, initialize the NPM package manager in your project. This will create a package.json file.
    - npm init
- Install required Express NPM package by running the following command from the console in your project. This will create a package-lock.json file.
  - npm install express
-Install required Handlebars NPM package by running the following commands from the console
  - npm install hbs
- Sign up for using WeatherStack.com free tier API - Get an access key. 
- Sign up for using MapBox.com free tier API for location services - Get public access token. 
- Edit URL's in the code with your access keys.
# Usage
-Start the web server one directory above source:
 - node ./src/app.js
 
-Test the endpoints in a browser
localhost:3000
localhost:3000/about.html
localhost:3000/help.html

