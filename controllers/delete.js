const data = require('../models/userdata')

exports.deleteById =async (req,res)=>{
    try{
        await data.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
        });
    }catch(err){
        res.status(500).json(err);
    }
}