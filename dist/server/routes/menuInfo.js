const express = require('express')
const router = express.Router();
const menuInfo = require('../products.json');

router.get('/menu-info', (req, res) => {
    res.send(menuInfo);
}); 

module.exports = router;