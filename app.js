const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// set the view engine to ejs
app.set('view engine', 'ejs');

// Use STATIC css file
app.use(express.static("public"))






var tasks = []



app.get("/", function (req, res) {

    // DAY 
    var options = {
        weekday: "long",
        month: 'long',
        day: "numeric"
    }
    var today = new Date();
var dayanddate = today.toLocaleDateString("hi-IN",options);
    // DAY 


// rendering page
    res.render("index",{
        finaldateandday: dayanddate, 
        finaltask: tasks
    })
});




// post req

app.post("/",function(req,res) {
    var task =  req.body.task;
    tasks.push(task);
    res.redirect("/")
    
})


// Listining  app on server
app.listen(process.env.PORT || 3000);
console.log("Server started at Port 3000 Utkarsh Verma")


