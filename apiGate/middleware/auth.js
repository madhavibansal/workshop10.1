const auth = (req, res, next) => {
    if(req.headers.token && req.headers.token != ' ')
    {
        next()
    }
    else{
        res.setHeader('content-type','application/json')
        res.statuCode = 4001;
         res.end(JSON.stringify({status:4001, message:"Authentication fail"}))
    }
}
module.exports = auth;