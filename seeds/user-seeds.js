const { User, Post } = require('../models');
const sequelize = require('../config/connection');

const userdata = [
  {
    username: 'Brian',
    password: 'pass1234'
  },
  {
    username: 'Ben',
    password: 'pass1234'
  },
  {
    username: 'Erik',
    password: 'pass1234'
  },
  {
    username: 'Jacob',
    password: 'pass1234'
  },
  {
    username: 'Logan',
    password: 'pass1234'
  },
  {
    username: 'Michael',
    password: 'pass1234'
  },
  {
    username: 'Ellie',
    password: 'pass1234'
  },
  {
    username: 'Madeleine',
    password: 'pass1234'
  },
  {
    username: 'Sharo',
    password: 'pass1234'
  },
  {
    username: 'Kevin',
    password: 'pass1234'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;