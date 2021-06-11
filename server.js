const express = require('express');
const routes = require('./routes');
const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

const sequelize = new Sequelize(
  'process.env.DB_NAME',
  'process.env.DB_USER',
  'process.env.DB_PASSWORD', {
    host: 'localhost',
    dialect: 'mysql'
  }
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
