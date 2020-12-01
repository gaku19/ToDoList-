const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ["Buy food", "Make food", "Eat food"];


app.get("/", (req, res) => {
    // logic for the date
    let today = new Date();
    // options for the date 
    var options = {
        weekday: "long", 
        day: "numeric", 
        month: "long"
    };
    // Turning date in to a string
    var day = today.toLocaleDateString("en-US", options);
    // Render that result
    res.render("list", {
        kindofday: day, 
        newPosts: items
    });
});

//new post post route
app.post("/", (req, res) => {
    let item = req.body.newPost;
    console.log(item);
    items.push(item);
    res.redirect("/");
})




app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
});



 