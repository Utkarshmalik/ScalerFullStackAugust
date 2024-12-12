
const { createProduct, getAllProducts, getProductByProductId, deleteProductByProductId, updateProductByProductId } = require("../Controllers/Product.controllers");


module.exports = (app)=>{

    app.post("/products",createProduct);
    app.get("/products",getAllProducts)
    app.get("/products/:id",getProductByProductId);
    app.delete("/products/:id",deleteProductByProductId)
    app.put("/products/:id",updateProductByProductId)

}

