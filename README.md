# WBS Coding School Bootcamp - Pokefight Project

## Project Description

For module 10 of the WBS Coding School Bootcamp, the Pokefight Project is a full-stack project aimed at bridging the gap between frontend and backend development. It utilizes MongoDB databases to store information about Pokemon and leverages other Pokemon APIs for additional details such as images and Pokemon card images. The website includes a comprehensive list of Pokemon and features a game that allows users to play against the computer.

## Installation Instructions

After cloning the project, install the following dependencies using npm or other package management systems:

```bash
npm install clsx@^2.0.0 cors@^2.8.5 dotenv@^16.3.1 express@^4.18.2 mongoose@^8.0.2 axios@^1.6.2 react@^18.2.0 react-dom@^18.2.0 react-router-dom@^6.20.0
```

Additionally, add the necessary .env files to access the MongoDB database and API access keys for [https://pokemontcg.io/](https://pokemontcg.io/).

Note: The dotenv package is not necessary as the project uses the following scripts in the express server:

```json
"start": "node --env-file=.env index.js",
"dev": "nodemon --env-file=.env index.js"
```

This allows access to the .env files directly.

## Usage

To run the development environment, enter the following command in the terminal:

```bash
npm run dev
```

## Configuration

- In the `client` folder, create an `.env` file containing API access keys for [https://pokemontcg.io/](https://pokemontcg.io/).
- In the `node/express` folder, create an `.env` file with the MongoDB connection string.


## API Reference

- Information about all Pokemon from the Pokedex can be accessed at [http://localhost:8000/pokemon](http://localhost:8000/pokemon).
- Information about a single Pokemon can be fetched using the Pokemon index number.
  - Query parameters that can be sent with the request:
    - `skip`
    - `limit`
    - Name of Pokemon

## Contributing

This project is for a coding bootcamp and is not open to contributions.

## Acknowledgments

Project partners:
- [Pia Koester](https://github.com/Pia-Koester)
- [Bishal Diganta](https://github.com/bishaldiganta)
```
