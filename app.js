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
app.get(/^\/(\d{5})$/, function(req, res, next) {
	var myNum = req.params[0];
  console.log(myNum);
	var umpteenNum = umpteen.spellItOut(myNum);
	console.log('hey here is umpteennum ' + umpteenNum);
	res.send(umpteenNum);
});

app.use(function(req, res){
	res.status(404).render("404");
})

app.listen(1337);