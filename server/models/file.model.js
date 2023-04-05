const mongoose = require('mongoose')

const FileSchema = new mongoose.Schema({
    filename : {
        type : String,
        required : true
    },
    filetype : {
        type : String,
        required : true
    },
    owner : {
        type : String,
        required : true
    },
    locationurl : {
        type : String,
        required : true
    },
    filesize : {
        type : Number,
        required : true
    } 
},
    { timestamps: true }, 
)
module.exports = mongoose.model("File", FileSchema);