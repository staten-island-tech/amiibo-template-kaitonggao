// async (javascript), node also javascript
// with node you can do multiple things at once
// use the same code throughout 
// companies big in ten years use node.

//node index

const path = require('path');
const express = require('express');  //express is a function that exist already
const hbs = require("hbs");
const app = express(); //app is a method that uses express. express().get,listern, etc turns into

//definds paths for express
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views'); // views folder.
const partialsPath = path.join(__dirname,'../templates/partials'); //added new partials folder so add new const

// set up handlebars engine and views location
app.set("view engine", "hbs"); // Telling express to use handlebars for templates
app.set("views", viewsPath) // Telling express to get tempaths from the view folder 
hbs.registerPartials(partialsPath); //hbs is using partials so set this up

app.get("", async (req, res) => {
    try{
        res.render("index", {
            title:
        "Our first Express App"});
    } catch (error) {
        res.status(500).send("page not found");
    }
});  

app.get("/about/:id", async (req, res) => {
    const name = req.params.id;
    try{
        res.render("index", {
            title: `${name}`
        });
    } catch (error) {
        res.status(500).send("page not found");
    }
});

app.get("/swag", async (req, res) => {
    const name = req.params.id;
    try{
        res.render("swag");
    } catch (error) {
        res.status(500).send("page not found");
    }
}); 

//http://127.0.0.1:3000/about/kaitongggao --> you get kaitonggao

/* 
app.get("", (req, res) => {
    res.send("Thami likes bagels and butter.")
}); // "" = standard webpage and res.send sends a response

app.get("/kitty", (req, res) => {
    res.send("cats o:")
}); 
 */
app.listen(3000, () => {
    console.log("Listening on port 3000");
    console.log(__dirname);
});

// creates a server on port 3000; 
// localhost:3000
// every time you edit your server  write node index (include folder if neccessary)
// BUT package.json means that "npm run dev" (in command prompt) makes your server live update.

//handlebars -> template for ever site page. 
// npm install handlebars



