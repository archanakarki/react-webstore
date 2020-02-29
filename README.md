# React webstore
This repository contains/will contain an online store made with React, Node.js/Express. It contains the basic functionalities of an online store of adding products to the carts, wishlist, checkout, user authentication and payment.

Live demo url : Currently not available

# Folder structure
-backend : stores all server related files(Node.js/Express)

-frontend : Stores all browser related files (React/axios)

# Dependencies used in the projects:
For backend:
```
"dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
  ```

  For frontend:
  ```
  "proxy": "http://localhost:3001/",
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.1",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.19.2",
    "react": "^16.13.0",
    "react-dom": "^16.13.0",
    "react-scripts": "3.4.0"
  },
  ```

# Using the repository
- Download zip from 'Clone or Download' button of repository file
- Open terminal, cd folderPath, and paste
 `git clone https://github.com/archanakarki/react-webstore.git`
- In terminal : 
```
cd react-webstore
```
- Open two seperate terminal window(or in VSCode use split terminal window option)
- In one terminal window
```
cd backend
npm install
npm start
```
- In second terminal window
```
cd frontend
npm install
npm start
```
- Views in http://localhost:3000 and server data running in http://localhost:3001
