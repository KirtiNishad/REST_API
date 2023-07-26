const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginData")
.then(() => {
    console.log("Mongodb connected")
}).catch(() => {
    console.log("failed")
})

const schema = new mongoose.Schema({
    name:{
        type : String,
        requires : true
    },
    gender:{
        type : String,
        requires : true
    }
})

const crud = new mongoose.model("crud", schema)

module.exports =  crud