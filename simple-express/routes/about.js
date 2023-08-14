const express = require('express');
const router = express.Router();


// router.get("/", (req, res) => {
//     res.send("To główny router");
// });

router.get('/about', (req, res, next) => {
    res.send("About")
})

module.exports = router;