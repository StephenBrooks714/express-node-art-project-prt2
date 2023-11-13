const express = require("express");
const app = express();
const router = require("./server/routes/router");
const path = require("path");

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,('public'))));
app.use(express.static(path.join(__dirname,('node_modules/mdbootstrap/css'))));
app.use(express.static(path.join(__dirname,('node_modules/mdbootstrap/js'))));

app.use("/", router);

const port = process.env.PORT;
app.listen(port || 8080, () => {
    console.log(`App listening on ${port}`)
})

app.use(function(req, res, next) {
    res.status(404).render('notFound.ejs', {title: "This page does not exist"});
})