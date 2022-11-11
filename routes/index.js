const express = require('express')
const router = express.Router();
// initialize firestore
const firestore = require("firebase/firestore");
// create a reference to firebase's cloud database
const db = firestore.getFirestore(); 
const port = 4000

router.use((req, res, next) => {
    console.log("time: ", Date.now())
    next();
})

router.get("/", (req, res) => {
    const postsQuery = firestore.getDocs(firestore.collection(db, "posts"));
    const postsArray = []

    postsQuery.then((response) => {
        response.forEach((post) => {
            console.log(post.data())
            postsArray.push({id: post.id, ...post.data()})
            
        })
        res.send(postsArray)
    }).catch((error) => {
        console.log(error)
        return res.send(error)
    })
})

module.exports = router ;