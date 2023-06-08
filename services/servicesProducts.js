const faker=require('faker');
const boom=require("@hapi/boom");
const getAllProducts =async function (req, res){
    
    try {
    //const price=allPrice(); //función que no existe
    const products=[];
    const {size}=req.query;
    const limit=size || 5;
    for (let index=0; index<limit; index++){
        products.push ({
            index,
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            image: faker.image.imageUrl()
        })
    }
    return products;
    } catch (error) {
        console.log(error);
    }
    
}

const getOneProduct = function (req, res){
    const {id}=req.params;
    res.json({
        id,
        'name': 'ratón',
        'price': 21,
        'category':'tecnology'
    })  
}

const createNewProduct= function (req, res){
    const body=req.body;
    res.json({
        "op": "post",
        "data": body
    })
}

const deleteProduct=function (req,res){
    const {id}=req.params;
    res.json({
        "op": "delete",
        id
    })

}
const updateProduct = async function (req,res){
    try {
        const {id}=req.params;
    if (id!=1){
       // throw new Error("id no encontrado");
       throw boom.notFound("producto no encontrado");
    }
    const body=req.body;
    res.json({
        "op": "patch",
        id,
        body
    })
    } catch (error) {
        console.log(error);
    }
    
}
module.exports={getAllProducts, getOneProduct, createNewProduct, deleteProduct, updateProduct}