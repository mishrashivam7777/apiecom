const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:"I am getall products"});
};

const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({msg:"I am getall products testing"});
};

module.exports={getAllProducts,getAllProductsTesting};