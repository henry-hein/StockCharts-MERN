const express = require('express');
const router = express.Router();
// const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');
// const { protect } = require('../middleWare/authMiddleware');

router.route('/').get((req, res) => res.status(200).send('hello world'))
// router.route('/:id').get((req, res) => res.status(200).send(req.params.id))

// router.route('/').get((req, res) => res.status(200).send('hello')).post();
// router.route('/:id').put().delete();

module.exports = router;