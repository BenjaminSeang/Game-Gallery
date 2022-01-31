const express = require("express");
const cors = require("cors");
const app = express();

//This parses incoming requests with JSON payloads. 
//Allows us to recongnize Request Object as a JSON Object.
app.use(express.json());
//This parses incoming requests with JSON payloads consisting of STRINGS OR ARRAYS. 
//Allows us to recongnize Request Object as a strings or arrays.
app.use(express.urlencoded({extended: true})); 

//This lets our front-end at port 3000 make calls to our back-end at port 8000. 
//Taking it away will result in "cors errors" when attemptnig axios calls
app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config");

require("./routes/game.routes")(app);


//connect to the server
app.listen(8000, ()=> console.log("You are connected to port 8000"))

