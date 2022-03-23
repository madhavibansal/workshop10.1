const User = require('../model/User');

exports.buyer = async (req,res) => {
    const user=new User({
        name:req.body.name,
        email:req.body.email
   });

    try{
        const saveduser=await user.save();
        res.send(saveduser);
        
    }catch(err){
        res.status(400).send(err);
    };
    
    }

exports.topbuyer = (req,res) => {  
    User.find((err, docs) => {

        if (!err) {
            res.send({data: docs});
        } else {
            console.log('Failed to retrieve: ' + err);
        }
    });

}