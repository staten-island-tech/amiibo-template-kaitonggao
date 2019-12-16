// async (javascript), node also javascript
// with node you can do multiple things at once
// use the same code throughout 
// companies big in ten years use node.

//node index

const path = require('path');
const express = require('express');  //express is a function that exist already

const app = express(); //app is a method that uses express. express().get,listern, etc turns into

app.get("", (req, res) => {
    res.send("Thami likes bagels and butter. Also he smells.")
}); // "" = standard webpage and res.send sends a response

app.get("/kitty", (req, res) => {
    res.send("cats o:")
}); 

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

// creates a server on port 3000; 
// localhost:3000

// every time you edit your server  write node index (include folder if neccessary)

