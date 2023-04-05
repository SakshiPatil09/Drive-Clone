const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        max : 20,
        min : 1
    },
    email : {
        type : String,
        required : true,
        max : 20,
        min : 2
    },
    password : {
        type : String,
        required : true,
        min : 6
    },
    storageUsed : {
        type : Number,
        default : 0
    },
    profilephoto : {
        type : String,
        default : ""
    }

},
    { timestamps: true }, 
)
module.exports = mongoose.model("User", UserSchema);