const registerModel = require('../models/register');

exports.register = async (req,res)=>{
    try{
        const username = req.body.username;
         const data= await registerModel.find({username: username});
        if(username==data[0].username){
            res.status(201).json({
                success: false,
                message: 'User already exists',
            })
        }else{
        const user = await registerModel.create(req.body);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
        
        });
    }
    }catch(err){
        res.status(500).json(err);
    }
}