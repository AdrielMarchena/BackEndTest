//Using commonJS importing system
//Anything strange in the code sorry, i was in c++ nad C# before this
const { json } = require("express");
const express = require("express");
const cors = require('cors');
const main = require("./src/main.js")
var app = express();
const port = 3000;

// main have all the application logic and stuff
app.use(cors());
app.use(json())
app.use(main(express.Router()));

app.listen(port,()=>
{
    console.log(`Server running in localhost:${port}`);
});
