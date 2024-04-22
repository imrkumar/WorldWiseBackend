const mongoose = require('mongoose');

const userData = new mongoose.Schema({
  username:{
    type:String
  },
  country:{
    type: String
  },
  city:{
    type: String
  },
  dateTime:{
    type:Date
  },
  notes:{
    type:String
  }
})

module.exports = mongoose.model('userData',userData);