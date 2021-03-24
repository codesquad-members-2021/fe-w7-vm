const productItemsData = require('../data/productItems.json');
const express = require('express');

const router = express.Router();

// app: [GET, /api/products ]
// 상품 정보들을 가져옴
router.get('/products', (req, res) => {
    try {
        const data = productItemsData;
        return res.status(200).json({ data, err: false, message: 'OK' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ data, err: error, message: '서버에 문제가 있습니다.' });
    }
});

module.exports = router;
