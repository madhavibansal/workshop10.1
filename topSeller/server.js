const express = require("express");
const route = require("./routes/index");
const connectDB = require("./dbconnect");

const app = express();
app.use(express.json())
app.use("/", route);

connectDB()


const port=3001;



app.listen(port,() =>{
    console.log(`top seller running on http://localhost:${port}`);
})
