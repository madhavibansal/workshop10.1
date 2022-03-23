const express = require("express");
const connectDB = require("./dbConnect")
const route = require("./routes/index");
const app = express();


app.use(express.json())
app.use("/",route)

connectDB()

const port=3000;




app.listen(port,() =>{
    console.log(`top buyer running on http://localhost:${port}`);
})
