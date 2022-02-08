const { User, Post } = require('../models');
const sequelize = require('../config/connection');

const userdata = [
  {
    username: 'brian',
    password: 'pass1234'
  },
  {
    username: 'ben',
    password: 'pass1234'
  },
  {
    username: 'erik',
    password: 'pass1234'
  },
  {
    username: 'jacob',
    password: 'pass1234'
  },
  {
    username: 'logan',
    password: 'pass1234'
  },
  {
    username: 'michael',
    password: 'pass1234'
  },
  {
    username: 'ellie',
    password: 'pass1234'
  },
  {
    username: 'madeleine',
    password: 'pass1234'
  },
  {
    username: 'sharo',
    password: 'pass1234'
  },
  {
    username: 'kevin',
    password: 'pass1234'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;