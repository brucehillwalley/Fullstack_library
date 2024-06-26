"use strict"    

const express = require('express')
const cors = require('cors')
const app = express()


require("dotenv").config();
const PORT = process.env.PORT || 3000

app.use(express.json())

// CORS
app.use(cors())
// Catch async errors:
require('express-async-errors')

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Library API',
        version: '1.0.0',
        api: {
            routes: {
                book: 'http://127.0.0.1:8000/book',               
            },
            contact: 'brucehillwalley@gmail.com'
        },
    })
})

//Routes
const router= require('./src/route/library.router')
app.use(router)
// app.use(require('./src/route/library.router.'))

//ErrorHandler:
app.use(require('./errorHandler'))


app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
