const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Rich',
    email: 'rs',
    github: 'rstanbaugh',
    twitter: '@rstanbaugh',
    password: 'rs'
  },
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    github: 'nwestnedge0',
    twitter: '@nwestnedge0',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    github: 'rmebes1',
    twitter: '@rmebes1',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    github: 'cstoneman2',
    twitter: '@cstoneman2',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    github: 'ihellier3',
    twitter: '@ihellier3',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    github: 'gmidgley4',
    twitter: '@gmidgley4',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    github: 'larnout5',
    twitter: '@larnout5',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    github: 'hnapleton6',
    twitter: '@hnapleton6',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    github: 'kperigo7',
    twitter: '@kperigo7',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    github: 'lmongain8',
    twitter: '@lmongain8',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    github: 'bsteen9',
    twitter: '@bsteen9',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;