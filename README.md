# Hermes
Programación en Español

## Project versions

This project was generated with [Node JS](https://nodejs.org/ca/blog/release/v14.11.0/) version 14.11.0

## TODO before run server

Run `npm install` to install the necessary modules to run the project. It will create the folder node_modules on the root directory.

## Development server

Run `npm run dev` or `npm run start` for a dev server. Navigate to `http://localhost:3001/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

The scaffolding is created by model, routes and controller, also there are folder auxiliaries how are util, validator, middleware and config for database, you can create folder manual or in your console write next command `mkdir 'name folder'`.

## Build

Once you have in your project the folder node_modules, you should generate the model of your database with the next commands

- Install sequelize: `npm install sequelize`, `npm install sequelize-auto` 

if you have your model in the database and wish to export automatically using this 
- command `node_modules/.bin/sequelize-auto -o "./models" -d 'hermes' -h localhost -u 'root' -p 3306 -x 'yourpassword' -e mysql`

If you have model of database imported in your project, only create the database with next command
1) - : `DROP DATABASE IF EXISTS Hermes;`
2) -: `CREATE DATABASE Hermes;`

Once you have the database, run your project with the previous commands of `npm run start` and this automatically created your table in your database.

## Running unit tests

We install `swagger` for to do testing of the endpoint.

## Running end-to-end tests

We install `swagger` for to do testing of the endpoint 

## Further help

To get more help on the Node JS we use the documentation official - Url: (https://nodejs.org/docs/latest-v11.x/api/) page.
