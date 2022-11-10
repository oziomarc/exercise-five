const express = require('express')
const firebase = require("firebase/app");
const app = express()
const port = process.env.PORT || 4000
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVFwZGVJgMi-3ljqQF9Wa48LzhGP62Sbc",
    authDomain: "exercise-five-fall-2022-4d76f.firebaseapp.com",
    projectId: "exercise-five-fall-2022-4d76f",
    storageBucket: "exercise-five-fall-2022-4d76f.appspot.com",
    messagingSenderId: "56658509396",
    appId: "1:56658509396:web:8e199eaad5f336ff76b7c1"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const homePage = require('./routes/index.js')

app.use('/', homePage)

app.listen(port, () => (
    console.log(`Example app listening on port ${port}`)
))