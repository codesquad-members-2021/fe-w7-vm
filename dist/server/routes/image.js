const express = require('express')
const router = express.Router();
const menuImages = require('../images.json');

router.get('/', (req, res) => {
    res.send(menuImages.list);
}); 

module.exports = router;