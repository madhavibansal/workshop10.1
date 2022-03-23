const Users = require('../model/Users');

exports.seller = async (req,res) => {
    const users=new Users({
        name:req.body.name,
        email:req.body.email
   });

    try{
        const savedusers=await users.save();
        res.send(savedusers);
        
    }catch(err){
        res.status(400).send(err);
    };
    
    }

exports.topseller = (req,res) => {  //
    Users.find((err, docs) => {

        if (!err) {
            res.send({data: docs});
        } else {
            console.log('Failed to retrieve: ' + err);
        }
    });

}