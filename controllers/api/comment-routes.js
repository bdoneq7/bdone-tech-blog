const { Comment } = require('../../models');
const withAuth = require('../../middleware/auth');
const router = require('express').Router();

// GET all Comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.sendStatus(500).json(err);
    });
});

// POST Create Comment
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400).json(err);
      });
  }
});

// DELETE Comment by ID
router.delete('/:id', withAuth, (req, res) => {
  if (req.session) {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.sendStatus(404).json({ message: 'Error: No Comment Found' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500).json(err);
      });
  }
});

module.exports = router;