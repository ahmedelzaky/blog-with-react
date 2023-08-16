# React and Strapi.js Blog Website - README

This README provides an overview and instructions for setting up, using, and maintaining a blog website built using React and Strapi.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend (Strapi.js)](#backend-strapijs)
  - [Frontend (React)](#frontend-react)
- [Configuration](#configuration)
- [Maintenance](#maintenance)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple blog website created using React for the frontend and Strapi.js for the backend. The purpose of this project is to demonstrate how to build a basic blog platform where users can create and delete blog posts.

## Features

- User-friendly and responsive blog interface.
- Admin panel powered by Strapi.js for managing blog content.
- Create and delete blog posts through the admin panel.
- Dynamic rendering of blog posts on the frontend.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Git

## Installation

### Backend (Strapi.js)

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>/backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up your database in the `./backend/config/database.js` file.

4. Start the Strapi development server:

```bash
npm run develop
```

### Frontend (React)

1. Open a new terminal window and navigate to the project folder:

```bash
cd <repository-folder>/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm start
```
### Create .env 

Create .env file and type 
```bash
REACT_APP_API = http://localhost:1337/api/blogs
```

## Configuration

- Backend configuration files are located in the `./backend/config` folder. Adjust settings, including the database, API endpoints, and authentication, as needed.
- Frontend configuration can be found in the `./frontend/src/config.js` file. Modify endpoints if you change the backend setup.


## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to submit a pull request or open an issue on the project's repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.
