const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');
const User = require('../models/user');

router.post('/login', async (res, req, next) => {
    
});

router.post('/reqister', async (res, req, next) => {
    const { username, email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
        return res.json({
            status: 'error',
            code: 409,
            data: 'conflict',
            message: 'user already exists'
        });
    }
    try {
        const newUser = new User({ username, email })
        
        newUser.setPassword(password)

        await newUser.save();
    } catch (error) {
        next(error)
    }
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