var path = require("path");
var express = require("express");
var umpteen = require ("umpteen");

var app = express();


app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("index");
})
// this is all busted
app.get(/^\/(.*?)$/, function(req, res, next) {
  ///^\/(\d{5})$/
	var myNum = req.params[0];
  // console.log("here's the input: " + myNum);
	var umpteenNum = umpteen.finalFunction(myNum);
  if (typeof umpteenNum === 'object') {
    // console.log("it's an error!")
    // console.log(umpteenNum.message);
    res.send(umpteenNum.message);
  } else {
  	res.send(umpteenNum);
  }
});

app.use(function(req, res){
	res.status(404).render("404");
})

app.listen(1337);