const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const seedAll = require('./seeds');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'ac5b36c9b7e8f37135561a8c955d9fce',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(async () => {
  await seedAll();
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
