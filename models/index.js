const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// User Has Many Posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// Post Belongs to User ID
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Comment Belongs to User ID
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Comment Belongs to Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// User ID Has Many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Post Has Many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };