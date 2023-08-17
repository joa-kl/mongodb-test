const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routerApi = require('./api/index')

require('dotenv').config();

const uriDb = process.env.DB_HOST;

const connection = mongoose.connect(uriDb, {
    useNewParser: true,
    useCreateIndex: true,
});

connection
    .then(() => {
        console.log("connected tp MongoDB");
    })
    .catch(e => {
        console.error(e);
    });

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', routerApi)

app.use((_, res, __) => {
    res.status(404).json({
        status: 'error',
        code: 404,
        message: 'You need to use /api route',
        data: 'Nothing found'
    })
})

app.use((eer, _, res, ___) => {
    console.error(error.stack);

    res.status(500).json({
        status: 'fail',
        code: 500,
        message: error.message,
        data: "Internal Server Error"
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// require('dotenv').config();

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// const aboutRouter = require('./routes/about')

// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/', aboutRouter)

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
