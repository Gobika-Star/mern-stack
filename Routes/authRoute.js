const express = require('express');
const app = express();
app.use(express.json());

const authController = require('../Controller/authController');

const router = express.Router();

router.get('/users', authController.allUsers);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
module.exports = router;
