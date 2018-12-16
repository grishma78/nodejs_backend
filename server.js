var http = require("http");
var fs = require("fs");

const csv = require("csvtojson"); //convert csv to json object
var express = require("express"); //Express adds dead simple routing and support for Connect middleware
var app = express(); //constructor of express
const bodyParser = require("body-parser");
var cors = require("cors"); //installed cors because of No Access control policy
app.use(bodyParser.urlencoded({ extended: false })); //body-parser extract the entire body portion of an incoming request stream and exposes it on req.body

app.use(cors());
var port = 8082;

var fetchcsv1 = require("./employee.js"); //including fetchcsv file

fetchcsv1.myget(app); //calling myget var from fetchcsv file
fetchcsv1.mypost(app); // calling mypost var from fetchcsv file
var csvheight = require("./height.js");
csvheight.h(app);
csvheight.gett(app);

app.listen(port, function() {
  //binding server in port 8082
  console.log("Server started on port  " + port);
});
