const { Post } = require('../models');

const postdata = [
  {
    title: 'Config Connection',
    content: 'A connection.js file is created in the config folder and creates the connection to the server based on user credentials. ',
    user_id: 10
  },
  {
    title: 'SQL chema',
    content: 'Sql file to create the sql database.',
    user_id: 8
  },
  {
    title: 'Authentication Session',
    content: 'Requires User to be Logged In - Otherwise Redirects to Login',
    user_id: 1
  },
  {
    title: 'Models',
    content: 'Create Class Models for Users, Posts, and Post Comments.',
    user_id: 4
  },
  {
    title: 'Node Modules',
    content: 'Installed node module npm packages needed for the app to work properly. ',
    user_id: 7
  },
  {
    title: 'Public Folder',
    content: 'Contains images, javascript, and stylesheets needed for the front end of the app.',
    user_id: 4
  },
  {
    title: 'Data Seeds',
    content: 'Javascript seed files are used as data sources for the SQL database tables.',
    user_id: 1
  },
  {
    title: 'Utility Files',
    content: 'Utility javascript files can be used to format data such as dates.',
    user_id: 1
  },
  {
    title: 'Handlebar Views',
    content: 'Javascript handlebars files are used to create the layouts and html structure for your app.',
    user_id: 9
  },
  {
    title: 'ENV File',
    content: 'ENV files contain the admin username and password needed by the connection file for authorization.',
    user_id: 5
  },
  {
    title: 'Gitignore File',
    content: 'Contains files that are ignored by GitHub.',
    user_id: 3
  },
  {
    title: 'Package JSON File',
    content: 'This file contains references to installed npm dependencies and app info.',
    user_id: 10
  },
  {
    title: 'Readme File',
    content: 'Contains a description of the app, how to install the app, and how to use the app.',
    user_id: 8
  },
  {
    title: 'Server File',
    content: 'Creates a server that can be used to serve files to the localhost for development.',
    user_id: 3
  },
  {
    title: 'HTML',
    content: 'HTML code is used to create the structure of a front end web app.',
    user_id: 3
  },
  {
    title:'CSS',
    content: 'Cascading Style Sheets are used to create the layout and style for a web app.',
    user_id: 7
  },
  {
    title: 'JavaScript',
    content: 'A popular programming language used to provide user interaction with a web app.',
    user_id: 6
  },
  {
    title: 'SQL Database',
    content: 'Contains relational tables with data. Queries can be made to the database and returned to be displayed on the front end.',
    user_id: 4
  },
  {
    title: 'API',
    content: 'Through the use of an API, fetch calls can be made to the server to retrieve and post data.',
    user_id: 6
  },
  {
    title: 'Express',
    content: 'Javascript Express can be used to create a back end server.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;