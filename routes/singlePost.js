const express = require('express')
const router = express.Router();
// initialize firstore
const firestore = require("firebase/firestore");
// create a reference to firebase's cloud database
const db = firestore.getFirestore(); 
const port = 4000

router.use((req, res, next) => {
    console.log("time: ", Date.now())
    next();
})

router.get("/:id", (req, res) => {
    const postId = req.params.id;
    const postQuery = firestore.getDoc(firestore.doc(db, "posts", postId));
    
    postQuery.then((response) => {
        const post = response.data();
        if(!post) res.send({})
        res.send(post)
    }).catch((error) => {
        console.log(error)
        return res.send(error)
    })
})

module.exports = router;