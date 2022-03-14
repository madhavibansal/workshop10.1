const gateway = require("fast-gateway");
const auth1 = require("./middleware/auth");
const port = 5000

const result = gateway({
    middlewares : [auth1] ,
    routes:[{
        prefix : '/buy',
        target : 'http://localhost:3000/',
        
    },
    {
        prefix : '/sell',
        target : 'http://localhost:3001/'

    }
]
})

result.start(port).then(results => {
    console.log("start")
})