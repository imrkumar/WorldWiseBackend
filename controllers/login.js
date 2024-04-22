
const registerModel = require('../models/register');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login= async (req,res)=>{

    const secretKey = process.env.secretKey;
    const generateToken = (user) => {
        const payload = {
          username: user
        };
      
        return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
      };

    try{
        const user = await registerModel.findOne({username:req.body.username});
        if(user){
            if(user.password===req.body.password){
                res.status(200).json({
                    success: true,
                    message: 'User logged in successfully',
                    user: user.username,
                    token:generateToken(user.username)
                });
            }else{
                res.status(401).json({
                    success: false,
                    message: 'Invalid password'
                });
            }
        }else{
            res.status(401).json({
                success: false,
                message: 'Invalid username'
            });
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}