Contact Manager App with React and Redux (Class Components)


This repository is a boilerplate for building a Contact Manager application using React and Redux with class components. It provides a foundation for managing contacts, demonstrating the integration of Redux for state management within a React application.

Table of Contents

Features

Prerequisites

Getting Started

Installation

Folder Structure

Usage

Redux Configuration

Contributing

License




Features
React 17: Utilize the latest version of React for building interactive user interfaces.
Redux: Manage the application state in a predictable way, facilitating easy data flow within components.
Class Components: Implement components using class syntax for stateful behavior.
Contact Management: Basic features for adding, editing, and deleting contacts.
Redux DevTools Integration: Debug and monitor state changes with the Redux DevTools extension.
Thunks: Manage asynchronous actions using thunks with Redux middleware.
Routing: Incorporate React Router for seamless navigation within the application.
Prerequisites
Ensure that you have the following software installed on your machine:


Node.js

npm or Yarn

Getting Started

Installation

Clone the repository:



git clone [https://github.com/your-username/contact-manager-react-redux-class.git](https://github.com/ZwellyTheKidd/Contact-Manager)

Navigate to the project directory:


cd contact-manager-react-redux-class

Install dependencies:


npm install   # or yarn install

Folder Structure

The project follows a structured organization to enhance maintainability:



.
├── public

├── src

│   ├── actions

│   ├── components

│   ├── containers

│   ├── reducers

│   ├── services

│   ├── styles

│   ├── utils

│   ├── App.js

│   ├── index.js

├── .gitignore

├── package.json

├── README.md

└── webpack.config.js

public: Contains the HTML template and other static assets.

src: The main source code of your application.

actions: Redux action creators related to contacts.

components: React components (class components) for UI.

containers: Connects React components to the Redux store.

reducers: Redux reducers handling contact state.

services: Utility functions or services.

styles: Styling using SASS.

utils: General utility functions.

App.js: The main entry point of the React application.

index.js: Renders the React application.

.gitignore: Specifies files and directories to ignore in version control.

package.json: Project configuration and dependencies.

README.md: Documentation for the project.

webpack.config.js: Webpack configuration for bundling the application.
Usage
Start the development server to view the application:

npm start   # or yarn start
Visit http://localhost:3000 in your browser.

Redux Configuration

This project includes a basic Redux setup for managing contact-related state. Extend and customize the Redux configuration as needed. Refer to the Redux documentation for comprehensive guidance.


Contributing

Feel free to open GitHub issues or create pull requests for suggestions, enhancements, or bug fixes.


License

This project is licensed under the MIT License - see the LICENSE file for details.





