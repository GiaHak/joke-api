// this file establishes our connection to the database

// bringing in mongoose
const mongoose = require("mongoose")

// we need to connect to our database
mongoose.connect("mongodb://localhost/jokes_api",  {useNewUrlParser: true, 
useUnifiedTopology: true
})
    .then(()=> console.log("found the mongoose"))
    .catch(err=> console.log("lost the mongoose", err))
