const express = require('express')
const router = express.Router();
const menuImages = require('../images.json');

router.get('/image', (req, res) => {
    const menu = req.query.menu; // ?menu=Kimbap
    const url = menuImages[menu];
    res.send(url);
}); 

module.exports = router;