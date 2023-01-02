import React, { useEffect } from "react";
import home from "../../Images/Home.svg"
import eye from '../../Images/Eye.svg'
import pencel from '../../Images/Pencel.svg'
import dele from '../../Images/Delete.svg'

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";

import '../Admin/Edit.css'

export const ViewProduct = () => {

  const [productdata, setproductdata] = useState({})
  const location = useLocation();
  const productId = location.pathname.split("/")[5];
  const [error,setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/product/getProduct/${productId}`);
        setproductdata(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [productId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/product/deleteProduct/${productId}`);
      navigate("/product");
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  const navigatetohome= () =>{
    navigate('/adminLogin/adminMainPage');
  };

  console.log(productdata)

    return(

        <div className="editProduct">    
                <section className="EDfirstsection">
                    <div className="EDfirstcontainer">
                        <div className="EDcolumn-30">
                            <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                        </div>
                        <div className="EDcolumn-40">
                            <Link to={`/adminLogin/adminMainPage/adminProduct/updateProduct/${productId}`}><iconbutton><img src={pencel} className="btnstyle"/></iconbutton></Link>
                            <iconbutton onClick={handleDelete}><img src={dele} className="btnstyle1"/></iconbutton>
                        </div>
                        <div className="EDcolumn-30 right">
                            <button className='EDbacktbtn' onClick={() => navigate(-1)}>BACK</button>
                        </div>
                    </div>
                </section>

                <section className="EDsecondsection">
                    <div className="EDcenter-container">
                        <div className="EDsecondColumn-30 left">
                            <h1 className="EDh1Text">featured image</h1>
                            <img src={productdata.productImageOne?require(`../../Images/${productdata.productImageOne}`):null} className='imgstyle'></img>
                            <h1 className="EDh1Text">name</h1>
                            <span className="EDText">{productdata.productName}</span>
                            <h1 className="EDh1Text">Brand</h1>
                            <span className="EDText">{productdata.brand}</span>
                            <h1 className="EDh1Text">Type</h1>
                            <span className="EDText">{productdata.type}</span>
                            <h1 className="EDh1Text">Price</h1>
                            <span className="EDText">{productdata.productPrice}</span>
                        </div>
                        <div className="EDcolumn left">
                            <h1 className="EDh1Text">images</h1>
                            <div className="imagecontainer">
                            <img src={productdata.productImageTwo?require(`../../Images/${productdata.productImageTwo}`):null} className='imgstyle'></img>
                            <img src={productdata.productImageThree?require(`../../Images/${productdata.productImageThree}`):null} className='imgstyle'></img>
                            <img src={productdata.productImageFour?require(`../../Images/${productdata.productImageFour}`):null} className='imgstyle'></img>
                            </div>
                            <h1 className="EDh1Text">Categories</h1>
                            <span className="EDText">{productdata.category}</span>
                            <h1 className="EDh1Text">Sub-Categories</h1>
                            <span className="EDText">{productdata.subCategory}</span>
                            <h1 className="EDh1Text">Description</h1>
                            <span className="EDText">{productdata.productDescription}</span>
                            <h1 className="EDh1Text">details</h1>
                            <span className="EDText">{productdata.productSpec}</span>
                            <h1>PDF</h1>
                            <a href={productdata.productCatalogue?require(`../../Images/${productdata.productCatalogue}`):null} download>123</a>
                        </div>
                    </div>
                </section>

                <br/>
                <br/>
                <br/>
                
           </div> 
    )
}


    