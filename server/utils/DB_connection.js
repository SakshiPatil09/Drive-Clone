const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

// Database Connection
const connectDB = () => {

    mongoose.connect(process.env.DB_CONNECT,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then( () => {
        console.log(`Connected to MongoDB Database`);
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = connectDB