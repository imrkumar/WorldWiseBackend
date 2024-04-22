const data = require('../models/userdata');

exports.getUserData = async (req,res)=>{
   try{
     const userdata = await data.find({username:req.params.username})
     if(userdata){
        res.status(200).json({
            success: true,
            message: 'User data fetched successfully',
            data:userdata
        })
     }else{
        res.status(404).json({
            success: false,
            message: 'User data not found'
        })
     }
   }catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    });
   }
}

exports.getUserDataById = async (req,res)=>{
    
    try{
        const userdata = await data.find({username:req.params.username})
         userdata.map((item)=>{
             if(item._id == req.params.id){
                 singledata = item;
             }
         })
        if(userdata){
           res.status(200).json({
               success: true,
               message: 'User data fetched successfully',
               data: singledata
           })
        }else{
           res.status(404).json({
               success: false,
               message: 'User data not found'
           })
        }
      }catch(err){
       res.status(500).json({
           success:false,
           message:err.message
       });
      }
}