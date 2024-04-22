const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 9080;
const cors = require('cors');

const dbConnection = require('./config/database');
const routes = require('./routes/route')

//middlewares
app.use(express.json());
app.use('/',routes);
app.use(cors());

//default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
//database connection
dbConnection();


app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Server is running on port ${port}`);
    }
})

