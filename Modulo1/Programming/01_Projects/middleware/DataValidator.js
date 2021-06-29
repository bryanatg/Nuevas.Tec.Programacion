// const {User} = require('../lib/Schemas/User')

function DataValidator(check = "query", schema){
    return (req, res,next) => {
     var data = req[check]   
     const {error, value} = schema.validate(data);
     if (error) {
         res.status(406).json({
            msg: error.details[0].message, 
         });
     }else{
         req[check] = value;
         next();
     }
    };
}

// function DataValidator (req, res , next){
//     req.pruebaDeMiddleware = "Hola Mundo con Middleware"
//     next();
// }
module.exports.DataValidator = DataValidator;