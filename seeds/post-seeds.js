const { Post } = require('../models');

const postdata = [
  {
    title: 'title1',
    content: 'content1',
    user_id: 10
  },
  {
    title: 'title2',
    content: 'content2',
    user_id: 8
  },
  {
    title: 'title3',
    content: 'content3',
    user_id: 1
  },
  {
    title: 'title4',
    content: 'content4',
    user_id: 4
  },
  {
    title: 'title5',
    content: 'content5',
    user_id: 7
  },
  {
    title: 'title6',
    content: 'content6',
    user_id: 4
  },
  {
    title: 'title7',
    content: 'content7',
    user_id: 1
  },
  {
    title: 'title8',
    content: 'content8',
    user_id: 1
  },
  {
    title: 'title9',
    content: 'content9',
    user_id: 9
  },
  {
    title: 'title10',
    content: 'content10',
    user_id: 5
  },
  {
    title: 'title11',
    content: 'content11',
    user_id: 3
  },
  {
    title: 'title12',
    content: 'content12',
    user_id: 10
  },
  {
    title: 'title13',
    content: 'content13',
    user_id: 8
  },
  {
    title: 'title14',
    content: 'content14',
    user_id: 3
  },
  {
    title: 'title15',
    content: 'content15',
    user_id: 3
  },
  {
    title:'title16',
    content: 'content16',
    user_id: 7
  },
  {
    title: 'title17',
    content: 'content17',
    user_id: 6
  },
  {
    title: 'title18',
    content: 'content18',
    user_id: 4
  },
  {
    title: 'title19',
    content: 'content19',
    user_id: 6
  },
  {
    title: 'title20',
    content: 'content20',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;