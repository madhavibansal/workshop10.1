const express = require("express");
const mongoose = require("mongoose");
const Users = require('./model/Users');

const app = express();
app.use(express.json())

const port=3001;
const connectDB = async () => {
    mongoose.connect("mongodb+srv://madhavibansal:madhaviba@cluster0.9ka80.mongodb.net/microservice?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
        })
        .then((data) => console.log(`Connected Successfully ${data.connection.host}`))
        .catch((err) => console.error('Not Connected', err.message));
}
connectDB()
app.post("/seller", async (req,res) => {
    const users=new Users({
        name:req.body.name,
        email:req.body.email
  
    });
    try{
        const savedusers=await users.save();
        res.send(savedusers);
        
    }catch(err){
        res.status(400).send(err);
    };
    
    });

app.get("/topseller", (req,res) => {
    Users.find((err, docs) => {

        if (!err) {
            res.send({data: docs});
        } else {
            console.log('Failed to retrieve: ' + err);
        }
    });

})

app.listen(port,() =>{
    console.log(`top seller running on http://localhost:${port}`);
})
