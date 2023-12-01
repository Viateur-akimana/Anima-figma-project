

const getAllProducts =(req,res)=>{
res.status(200).send("Get all the procducts");
}

const createProduct = (req,res)=>{
    res.status(200).send("Creating the produccts");
}
const getAllProductsStatic =(req,res)=>{
    res.status(200).send("Getting statis files");
}

module.exports ={
    getAllProducts,
    createProduct,
    getAllProductsStatic
}