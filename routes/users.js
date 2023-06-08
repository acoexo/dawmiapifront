var express= require('express');

const router= express.Router();

router.get('/', function(req, res){
    const {limit,offset}=req.query;
    if (limit && offset){
        res.json({
            limit,
            offset
        }) 
    } else {
        res.send("no has pasado todos los parámetros")
    }
    
})

module.exports=router;