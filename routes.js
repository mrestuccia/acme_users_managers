const router = require('express').Router();

// GET /api/users
router.get('/users', (req, res, next) => {
  res.send(200).json();
});

// GET /api/managers
router.get('/managers', (req, res, next) => {
  res.send(200).json();
});

// PUT /api/users/:id
router.put('/users/:id', (req, res, next) => {
  let id = request.params.id;
  res.send(200).json({id: id});
});

module.exports = router;
