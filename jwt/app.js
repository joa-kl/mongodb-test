const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.use(express.static('public'));
app.use(morgan('dev'));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index.ejs', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

app.use((req, res, next) => {
    console.log('Nasze oprogramowanie pośredniczące');
    next();
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});



// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const routerApi = require('./api/index')
// mongoose.Promise = global.Promise;
// const app = express();

// require('dotenv').config();

// const uriDb = process.env.DB_HOST;

// const connection = mongoose.connect(uriDb, {
//  // useNewParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
//     }    
// );

// app.set('view engine', 'ejs');

// app.listen(3000);

// app.get('/', (req, res) => {
//     res.render('index.js');
// })

// app.get('/about', (req, res) => {
//     res.sendFile('./views/about.html', { root: __dirname });
// })

// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

// connection
//     .then(() => {
//         console.log("connected to MongoDB");
//     })
//     .catch(e => {
//         console.error(e);
//     });

// // const app = express()

// app.use(express.json())
// app.use(cors())

// require('./config/config-passport')
// app.use('/api', routerApi)

// app.use((_, res, __) => {
//     res.status(404).json({
//         status: 'error',
//         code: 404,
//         message: 'You need to use /api route',
//         data: 'Nothing found'
//     })
// });

// app.use((err, _, res, ___) => {
//     console.error(err.stack);

//     res.status(500).json({
//         status: 'fail',
//         code: 500,
//         message: err.message,
//         data: "Internal Server Error"
//     })
// });

// // const PORT = process.env.PORT || 3000;

// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`)
// // });

