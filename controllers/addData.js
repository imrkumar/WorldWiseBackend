const data = require('../models/userdata');

exports.userData = async (req,res)=>{
   try{
      
    const userData = await data.create(req.body);
    res.status(201).json({
        success: true,
        message: 'data added successfully',
    
    });

   }catch(err){
    res.status(500).json(err);
   }
}