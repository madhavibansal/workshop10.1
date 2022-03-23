const mongoose= require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_DB, {
            useUnifiedTopology: true,
        })
        .then((data) => console.log(`Connected Successfully ${data.connection.host}`))
        .catch((err) => console.error('Not Connected', err.message));
}


module.exports = connectDB;