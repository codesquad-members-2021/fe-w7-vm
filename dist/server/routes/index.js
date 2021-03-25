const express = require('express')
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../../../index.html'))
}); 

router.get('/app.bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../../../app.bundle.js'))
})

router.get('/app.bundle.js.map', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../../../app.bundle.js.map'))
})

module.exports = router;