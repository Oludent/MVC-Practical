const express = require('express');
const router = express.Router();

const {readUser, createUser, updateUser}= require('../controller/user')

router.get('/all', readUser);
router.post('/create', createUser);
router.patch('/update/:id', updateUser);

module.exports = router;

