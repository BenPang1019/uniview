import { db } from "../db.js";

export const getProducts = (req, res) => {
    const q = "SELECT * FROM product"

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
};

export const getProduct = (req, res) => {
    const q = "SELECT `brand`, `type`, `productImageOne`, `productImageTwo`, `productImageThree`, `productImageFour`,`productCatalogue`, `category`, `subCategory`, `productName`, `productPrice`, `productDescription`, `productSpec` FROM product WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
};

export const addProduct = (req, res) => {
    const q = "INSERT INTO product (`brand`, `type`, `productImageOne`, `productImageTwo`, `productImageThree`, `productImageFour`,`productCatalogue`, `category`, `subCategory`, `productName`, `productPrice`, `productDescription`, `productSpec`) VALUES (?)";
    
    const values = [
        req.body.brand,
        req.body.type,
        req.body.productImageOne,
        req.body.productImageTwo,
        req.body.productImageThree,
        req.body.productImageFour,
        req.body.productCatalogue,
        req.body.category,
        req.body.subCategory,
        req.body.productName,
        req.body.productPrice,
        req.body.productDescription,
        req.body.productSpec,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("product have been created");
    });
};
   
export const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const q = " DELETE FROM product WHERE id = ? ";
  
    db.query(q, [productId], (err, data) => {
        if (err) return res.send(err);
        return res.json("product have been deleted");
      });
};

export const updateProduct = (req, res) => {
    const productId = req.params.id;
    const q = "UPDATE product SET `brand`=?, `type`=?, `productImageOne`=?, `productImageTwo`=?, `productImageThree`=?, `productImageFour`=?, `category`=?, `subCategory`=?, `productName`=?, `productPrice`=?, `productDescription`=?, `productSpec`=? WHERE id = ?";
  
    const values = [
        req.body.brand,
        req.body.type,
        req.body.productImageOne,
        req.body.productImageTwo,
        req.body.productImageThree,
        req.body.productImageFour,
        req.body.category,
        req.body.subCategory,
        req.body.productName,
        req.body.productPrice,
        req.body.productDescription,
        req.body.productSpec,
    ];
  
    db.query(q, [...values,productId], (err, data) => {
      if (err) return res.send(err);
      return res.json("product have been updated");
    });
}