const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 8000;

//mongoose connection/ config
require("./server/config/mongoose.config");
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.use(express.json(), express.urlencoded({extended:true}));

const AllMyRoutes = require("./server/routes/jokes.routes");
AllMyRoutes(app);



















// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );