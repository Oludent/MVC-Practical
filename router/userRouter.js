const express = require('express');
const router = express.Router();
const logger = require('../middleware/logger')
const {readUser, createUser, updateUser}= require('../controller/user')

router.get('/all',logger, readUser);
router.post('/create', createUser);
router.patch('/update/:id', updateUser);

module.exports = router;

