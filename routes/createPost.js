const firestore = require("firebase/firstore");
const router = require(".");
const db = firstore.getFirestore();

const createPostform = `
<h1>Create Post</h1>
<form action="/create/submit">
<div style=display: flex; flex-direction: column max-width: 400px:
    <input type="text" name="postTitle" placeholder="Title" style: margin-bottom: 20px />
    <input type="text" name="postText" placeholder="Text" />
    <input type="text" name="author" placeholder="Author" />
    <button type=submit">Submit</button>
</div>
</form>
`;

router.use((req, res, next) => {
    next();
})

router.get("/", (req, res) => {
    res.send(createPostform);
})

router.get("/submit", (req, res) => {
    const queryParams = req.query;
    const title = queryParams.postTitle;
    const text = queryParams.postText;
    const author = queryParams.author;

    const setBlogPost = firestore.setDoc (
        firestore.doc(db, "posts"),
        {
            title, text, author
        }
    )

    res.send({title, text, author})
})

module.exports = router ;