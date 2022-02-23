const express = require("express")
const app = express()

const apiRoutes = require("./db-api_routes")
const mongoose = require("mongoose")


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",apiRoutes)

const uri = "mongodb+srv://shreya:shreya@cluster0.kfkbl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri,function(err){

    if(err){
        console.log(err);
    }

    else{
        console.log("db connected");
    }
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});