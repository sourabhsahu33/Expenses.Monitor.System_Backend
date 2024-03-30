const express = require('express');
const { loginController,  
        registerController,
        } = require('../controllers/userControllers');

// rouuter object preform
const router = express.Router();

// Routers 
// POST || LOGIN 
router.post('/login', loginController);

// POST || REGISER USER
router.post('/register', registerController);

module.exports = router ;