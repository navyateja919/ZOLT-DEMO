import express from "express";
import session from "cookie-session";
import bodyParser from "body-parser";
import pg from "pg";
import jQuery from "jquery";
import pkg from "jquery";

const { error } = pkg;
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({
    secret: "MagaJathiAaniMuthyam-001",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));


app.get("/", (req, res) => {
    if (!req.session.cart) {
        req.session.cart =[];
    }
    res.render("consent.ejs", {cart: req.session.cart});
});

app.post("/", (req, res) => {
    if (!req.session.cart) {
        req.session.cart =[];
    }
    res.render("home.ejs", {cart: req.session.cart});
});

app.get("/home.ejs", (req, res) => {
    if (!req.session.cart) {
        req.session.cart =[];
    }
    res.render("home.ejs", {cart: req.session.cart});
});

// route for load product data

app.get("/products.ejs", (req, res) => {
    if (!req.session.cart) {
        req.session.cart =[];
    }
        res.render("products.ejs", {cart: req.session.cart});
    });
    

app.get("/about.ejs", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact.ejs", (req, res) => {
    res.render("contact.ejs");
});

app.get("/blog.ejs", (req, res) => {
    res.render("blog.ejs");
});

app.get("/login.ejs", (req, res) => {
    res.render("login.ejs");
});

app.get("/register.ejs", (req, res) => {
    res.render("register.ejs");
});

app.get("/database.ejs", (req, res) => {
    res.render("database.ejs");
});

app.get("/convert-img.ejs", (req, res) => {
    res.render("convert-img.ejs");
});




// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
  // ...
});
