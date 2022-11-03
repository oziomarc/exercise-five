const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const homePage = require('./routes/index.js')

app.use('/', homePage)

app.listen(port, () => (
    console.log(`Example app listening on port ${port}`)
))