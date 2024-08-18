const express = require('express');
const router = express.Router();
const {
    CreateCard,
    getCards,
    getSingleCard,

} = require('../Controllers/card')


router.post('/cards', CreateCard);
router.get('/cards', getCards);
router.get('/cards/:title', getSingleCard);

module.exports = router;