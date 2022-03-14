const express = require("express");
const mongoose = require("mongoose");
const User = require('./model/User');

const app = express();
app.use(express.json())

const port=3000;
const connectDB = async () => {
    mongoose.connect("mongodb+srv://madhavibansal:madhaviba@cluster0.9ka80.mongodb.net/micro?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
        })
        .then((data) => console.log(`Connected Successfully ${data.connection.host}`))
        .catch((err) => console.error('Not Connected', err.message));
}
connectDB()
app.post("/buyer", async (req,res) => {
const user=new User({
    name:req.body.name,
    email:req.body.email

});
try{
    const saveduser=await user.save();
    res.send(saveduser);
    
}catch(err){
    res.status(400).send(err);
};

});
app.get("/topbuyer", (req,res) => {
       User.find((err, docs) => {

        if (!err) {
            res.send({data: docs});
        } else {
            console.log('Failed to retrieve: ' + err);
        }
    });

})

app.listen(port,() =>{
    console.log(`top buyer running on http://localhost:${port}`);
})
