
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

app.get('/compose', (req, res) => {
    res.render('compose');
});

app.post('/compose', (req, res) => {
    const post = {
        title: req.body.blogTitle,
        content: req.body.blogContent
    };
    posts.push(post);
    res.redirect('/');
});

app.get('/posts/:postId', (req, res) => {
    const requestedPostId = req.params.postId;
    const post = posts[requestedPostId];
    if (post) {
        res.render('post', { title: post.title, content: post.content });
    } else {
        res.status(404).send('Post not found');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

