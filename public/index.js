// async (javascript), node also javascript
// with node you can do multiple things at once
// use the same code throughout 
// companies big in ten years use node.

//node index

const path = require('path');
const express = require('express');  //express is a function that exist already

const app = express(); //app is a method that uses express. express().get,listern, etc turns into

//definds paths for express
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views'); // views folder.

// set up handlebars engine and views location
app.set("views engine", "hbs"); // Telling express to use handlebars for templates
app.set("views", viewsPath) // Telling express to get tempaths from the view folder 

app.get("", async (req, res) => {
    try{
        res.render("index");

    } catch (error) {
        res.status(500).send("page not found"/* This is what the error page displays*/);
    }
});

app.get("", (req, res) => {
    res.send("Thami likes bagels and butter.")
}); // "" = standard webpage and res.send sends a response

app.get("/kitty", (req, res) => {
    res.send("cats o:")
}); 

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



