const express = require('express');

const { getAllTransection,
    addTransection ,
    editTransection,
    deleteTransection
} = require('../controllers/transectionCtrl.js')

// router object
const router = express.Router();

// routes
// add transection POST METHOD
router.post('/add-transection', addTransection);

// Edit transection POST METHOD
router.post('/edit-transection', editTransection);

// Delete transection POST METHOD
router.post('/delete-transection', deleteTransection);

// get transection
router.post('/get-transection', getAllTransection);


module.exports = router;