const express = require('express')
const router = express.Router();
const menuInfo = require('../products.json');

router.get('/', (req, res) => {
    res.send(menuInfo.list);
}); 

module.exports = router;