const express = require('express');
const router = express.Router();

const {register} = require('../controllers/register');
const {userData} = require('../controllers/addData');
const {login}= require('../controllers/login');
const {getUserData,getUserDataById} = require('../controllers/getData');
const {deleteById} = require('../controllers/delete');

router.post('/register',register);
router.post('/post',userData);
router.post('/login',login);
router.get('/getData/:username',getUserData);
router.delete('/delete/:id',deleteById);
router.get('/getData/:username/:id',getUserDataById);

module.exports = router;