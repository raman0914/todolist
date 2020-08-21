const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname +"/date.js")



const app = express();
var items = ["sleep", "Eat food", " Watch Movies"];
var workItems = [];
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




app.get("/", function(req, res) {

let day = date();

  res.render("list", {
    title: day,
    todolist: items
  });

})


app.get("/work", function(req, res) {

  res.render("list", {
    title: "work",
    todolist: workItems
  });

})


app.get("/about",function(req,res){
  res.render("about")
})

app.post("/", function(req, res) {

console.log(req.body)
  var item = req.body.newItem;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/");
  }





})


app.listen(3000, function(req, res) {
  console.log("app is working")
})
