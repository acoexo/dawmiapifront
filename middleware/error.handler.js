//middleware que se encarga de la gestión de errores

function errorLogs(err,req,res,next){
    console.log("errorLog");
    console.error(err);
    next();
}

function handlerError(err, req, res, next){
    console.log("handlerError");
    res.status(501).json ({
        message:err.message,
        stack: err.stack
    })
}

module.exports={errorLogs, handlerError}