var express= require('express');
const faker= require('faker');
const router= express.Router();
const productServices= require('../services/servicesProducts')
const {validatorHandler}=require ('../middleware/validator.handler')
const {schemaProductGet, schemaProductCreate,schemaProductUpdate} =require("../schema/schemaProducts")

router.get('/', async function(req, res , next){
    try {
        const products= await productServices.getAllProducts(req,res);
        res.json(products);
    } catch (error) {
       next(error) ;
    }
   
})
router.get('/:id', validatorHandler(schemaProductGet, 'params'),async function(req, res){

    const getOneProduct=await productServices.getOneProduct(req, res);
    return getOneProduct;
})

router.post('/', validatorHandler(schemaProductCreate, 'body'),function(req, res){
   const createNewProduct= productServices.createNewProduct(req, res);
   return createNewProduct;
})

router.delete('/:id', function(req, res){
    const deleteProduct= productServices.deleteProduct(req,res);
    return deleteProduct;
})
router.patch('/:id', function(req, res){
    const updateProduct= productServices.updateProduct(req,res);
    res.json(updateProduct);
})
module.exports=router; 
