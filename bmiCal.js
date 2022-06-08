var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var weight = req.body.n1;
    var height = req.body.n2;
    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});



app.listen(3000, function(){
    console.log("Server is running on port 3000");
});