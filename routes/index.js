const express = require('express')
const router = express.Router();
const port = 4000

router.use((req, res, next) => {
    console.log("time: ", Date.now())
    next();
})

router.get("/", (req, res) => {
    res.send("Heyyyyyyyy ;))))!")
})

module.exports = router ;