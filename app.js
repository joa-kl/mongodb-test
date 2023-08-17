const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

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
 