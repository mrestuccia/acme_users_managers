const router = require('express').Router();
const db = require('./db');
const User = db.models.User;

// GET /api/users
router.get('/users', (req, res, next) => {
  User.findAll({
    include: [
      { model: User, as: 'manager' },
      { model: User, as: 'employee' }
    ],
    order: '"createdAt" ASC'
  })
    .then((users) => {
      res.send(users)
    })
});


// PUT /api/users/:id
router.put('/users/:id', (req, res, next) => {
  let id = req.params.id;
  let managerId = req.body.managerId || null;
  let promote = req.body.promote || null;

  User.findById(id)
    .then(user => {
      if (promote != null) {
        user.isManager = promote;
      } else {
        user.managerId = managerId;
      }
      return user.save();
    })
    .then(() => {
      res.status(200).send({ id: id });
    })
});

module.exports = router;
