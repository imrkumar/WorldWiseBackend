const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection =()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
         console.log('DB Connected successfully')
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = dbConnection;