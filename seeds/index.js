const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true }); //
  
  await seedUsers();
  console.log('Seeding Users');

  await seedPosts();
  console.log('Seeding Posts');

  await seedComments();
  console.log('Seeding Comments');
};

module.exports = seedAll;