const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'comment1',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'comment2',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'comment3',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'comment4',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'comment5',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'comment6',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'comment7',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'comment8',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'comment9',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'comment10',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'comment11',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'comment12',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'comment13',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'comment14',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'comment15',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'comment16',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'comment17',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'comment18',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text: 'comment19',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text: 'comment20',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'comment21',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'comment22',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'comment23',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'comment24',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text: 'comment25',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'comment26',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'comment27',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'comment28',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'comment29',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'comment30',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'comment31',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'comment32',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'comment33',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'comment34',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'comment35',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'comment36',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'comment37',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'comment38',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'comment39',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'comment40',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text: 'comment41',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'comment42',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'comment43',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'comment44',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text: 'comment45',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'comment46',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'comment47',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'comment48',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'comment49',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'comment50',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;