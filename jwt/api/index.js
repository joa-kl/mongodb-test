const express = require('express');
const router = express.Router();
const Dog = require('../models/dog')

router.post('/login', async (res, req, next) => {
    
});

router.post('/reqister', async (res, req, next) => {

});

router.get('/dogs', async (req, res, next) => {
    const dogs = await Dog.find();
    res.json({
        status: 'success',
        code: 200,
        data: {
            dogs,
        },
    });
});

module.exports = router;