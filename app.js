const express = require('express');
const app = express();
const router = express.Router();

// app.use((req, res, next) => {
//     console.log('Nasze oprogramowanie pośredniczące');
//     next();
// });



// określamy bazową ścieżkę
router.get("/", (req, res) => {
    res.send("To główny router");
});

// określamy ścieżkę about
router.get("/about", (req, res) => {
    res.send("About");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

module.exports = router;


// app.get('/', (req, res) => {
//     res.send("hello world 2!")
// });

// app.get('/contact/:id', (req, res) => {
//     res.send(`<h1>Contact page</h1> Prametr: ${req.params.id}`)
// })

// app.get('/home', (req, res) => {
//     res.send('<h2> This is home page</h2>')
// });


