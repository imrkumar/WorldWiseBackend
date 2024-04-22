const mongoose = require('mongoose');

const register = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model('register',register);