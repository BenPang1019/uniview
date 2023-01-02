import React, { useEffect } from "react";
import home from "../../Images/Home.svg"
import eye from '../../Images/Eye.svg'
import pencel from '../../Images/Pencel.svg'
import dele from '../../Images/Delete.svg'

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";

import '../Admin/Edit.css'

export const UpdateProduct = () => {
  const [updateProduct, setUpdateProduct] = useState({
      brand:"",
      type:"",
      productImageOne:"",
      productImageTwo:"",
      productImageThree:"",
      productImageFour:"",
      category:"",
      subCategory:"",
      productName:"",
      productPrice:"",
      productDescription:"",
      productSpec:"",
  });

  const optionsCategory = [
    {id:"1",name:"Access Control System"},
    {id:"2",name:"Accessories"},
    {id:"3",name:"Auto Door System"},
    {id:"4",name:"Backup Battery"},
    {id:"5",name:"Cable & Network Wire"},
    {id:"6",name:"Card & Weigand Reader"},
    {id:"7",name:"CCTV Recorders"},
    {id:"8",name:"CCTV Security Camera System"},
    {id:"9",name:"Digital Air BnB Door Lock System"},
    {id:"10",name:"Display Monitor"},
    {id:"11",name:"Draka Cable"},
    {id:"12",name:"fa"},
    {id:"13",name:"IP PBX System"},
    {id:"14",name:"Metal Detector"},
    {id:"15",name:"Networking"},
    {id:"16",name:"Security Alarm System"},
    {id:"17",name:"Security Gate System"},
    {id:"18",name:"Server Rack"},
    {id:"19",name:"Smart Door Lock"},
    {id:"20",name:"Solar System Solution"},
    {id:"21",name:"Thermal Imaging Camera"},
    {id:"22",name:"Uncategorized"},
    {id:"23",name:"Uninterruptible Power Supply"},
    {id:"24",name:"Video Intercom"},
    {id:"25",name:"Voice Intercom"}
    ];

    const optionsSubCategory = [
        {id:"1",categoryId:"1",name:"Hikvision Access Control System"},
        {id:"2",categoryId:"1",name:"OEM Access Control System"},
        {id:"3",categoryId:"1",name:"ZKTeco"},
        {id:"4",categoryId:"2",name:"Access Control Accessories"},
        {id:"5",categoryId:"2",name:"Alarm Accessories"},
        {id:"6",categoryId:"2",name:"Auto Door Accessories"},
        {id:"7",categoryId:"2",name:"BNC Connector"},
        {id:"8",categoryId:"2",name:"Cabling Solution"},
        {id:"9",categoryId:"2",name:"CCTV Bracket"},
        {id:"10",categoryId:"2",name:"CCTV Camera Accessories"},
        {id:"11",categoryId:"2",name:"CCTV Tester"},
        {id:"12",categoryId:"2",name:"Fiber Connectors"},
        {id:"13",categoryId:"2",name:"Fiber Distribution Boxes"},
        {id:"14",categoryId:"2",name:"Fiber Distribution Frames"},
        {id:"15",categoryId:"2",name:"Fiber Distribution SFP"},
        {id:"16",categoryId:"2",name:"Fiber Optic Converter"},
        {id:"17",categoryId:"2",name:"Fiber Patch Cords"},
        {id:"18",categoryId:"2",name:"Fiber Splicing Tools"},
        {id:"19",categoryId:"2",name:"HD Fiber Convertor"},
        {id:"20",categoryId:"2",name:"HDMI Cable"},
        {id:"21",categoryId:"2",name:"Keystone Jacks & Face Plates"},
        {id:"22",categoryId:"2",name:"Network Patch Panels"},
        {id:"23",categoryId:"2",name:"PoE Solution"},
        {id:"24",categoryId:"2",name:"Power Supply"},
        {id:"25",categoryId:"2",name:"Surge Protector"},
        {id:"26",categoryId:"3",name:"Sliding Auto Door"},
        {id:"27",categoryId:"3",name:"Swing Door"},
        {id:"28",categoryId:"7",name:"'Dahua DVR NVR Recorders"},
        {id:"29",categoryId:"7",name:"Hikvision DVR NVR Recorders"},
        {id:"30",categoryId:"7",name:"REOLINK NVR Recorder"},
        {id:"31",categoryId:"8",name:"DAHUA"},
        {id:"32",categoryId:"8",name:"EZVIZ"},
        {id:"33",categoryId:"8",name:"HIKVISION"},
        {id:"34",categoryId:"8",name:"Wisenet"},
        {id:"35",categoryId:"10",name:"Dahua LCD"},
        {id:"36",categoryId:"10",name:"Dahua Standing Monitor"},
        {id:"37",categoryId:"10",name:"ViewSonic Monitor"},
        {id:"38",categoryId:"13",name:"Fanvil IP PBX Phone"},
        {id:"39",categoryId:"13",name:"Zycoo IP Phone System"},
        {id:"40",categoryId:"15",name:"IP COM"},
        {id:"41",categoryId:"15",name:"Ruijie"},
        {id:"42",categoryId:"16",name:"Bluguard Security Alarm System"},
        {id:"43",categoryId:"16",name:"HIKVision Security Alarm System"},
        {id:"44",categoryId:"16",name:"VIVOS Security Alarm System"},
        {id:"45",categoryId:"17",name:"Auto Gate"},
        {id:"46",categoryId:"17",name:"Parking Barrier Gate"},
        {id:"47",categoryId:"17",name:"Turnstile Gate"},
        {id:"48",categoryId:"19",name:"VLock Smart Door Lock"},
        {id:"49",categoryId:"19",name:"ZKTeco Smart Lock"},
        {id:"50",categoryId:"20",name:"Reolink Solar Camera"},
        {id:"51",categoryId:"20",name:"VSH Solar Light"},
        {id:"52",categoryId:"20",name:"VSH Solar System Package"},
    ];

  const brand = [
      'Belden',
      'Bluguard',
      'Casa Asia',
      'CyberPower',
      'ahua',
      'Draka',
      'E-jarvis',
      'Ezviz',
      'Fanvil',
      'Hanwha',
      'Imou',
      'IP-COM',
      'OAE',
      'Optic Digital',
      'Ruijie',
      'ViewSonic',
      'Vivos',
      'Vlock',
      'Voom',
      'VSH',
      'WBDP',
      'Reolink',
      'Hikvision',
      'ZKteco',
  ];


  
  const [productdata, setproductdata] = useState({})
  const location = useLocation();
  const productId = location.pathname.split("/")[5];
  const [error,setError] = useState(false);

  const[Category, setcategory] = useState([]); 
  
  const[SubCategory, setSubcategory] = useState([]); 
      useEffect(()=>{
        setcategory(optionsCategory);
      },[]) 

  const handleChange = (e) => {
    setUpdateProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCategory = (id) => {
    const dt = optionsSubCategory.filter(x => x.categoryId === id);
    setSubcategory(dt);

  }

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

  const handleClick = async e => {
    e.preventDefault();
    try {
      await axios.put("/product/updateProduct"+productId, updateProduct);
      navigate("/product");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

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

    return(

        <div className="editProduct">    
                <section className="EDfirstsection">
                    <div className="EDfirstcontainer">
                        <div className="EDcolumn-30">
                            <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                        </div>
                        <div className="EDcolumn-40">
                            <Link to={`/adminLogin/adminMainPage/adminProduct/viewProduct/${productId}`}><iconbutton><img src={eye} className="btnstyle"/></iconbutton></Link>
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
                        <h1 className="EDh1Text">Name</h1>
                        <input type="text" defaultValue={productdata.productName} className="EDinput" onChange={handleChange} name="productName"/>
                        <h1 className="EDh1Text">Brand</h1>
                        <select className="selectStyles" onChange={handleChange} name="brand">
                            <option>{productdata.brand}</option>
                            {brand.map((brandoption, index) => {
                                return <option key={index} >
                                    {brandoption}
                                </option>
                            })}
                        </select>
                        <h1 className="EDh1Text">Type</h1>
                        <input type="text" defaultValue={productdata.type} className="EDinput" onChange={handleChange} name="type"/>
                        <h1 className="EDh1Text">Price</h1>
                        <input type="text" defaultValue={productdata.productPrice} className="EDinput" onChange={handleChange} name="productPrice"/>
                    </div>
                    <div className="EDcolumn left">
                        <h1 className="EDh1Text">images</h1>
                        <div className="imagecontainer">
                        <img src={productdata.productImageTwo?require(`../../Images/${productdata.productImageTwo}`):null} className='imgstyle'></img>
                        <img src={productdata.productImageThree?require(`../../Images/${productdata.productImageThree}`):null} className='imgstyle'></img>
                        <img src={productdata.productImageFour?require(`../../Images/${productdata.productImageFour}`):null} className='imgstyle'></img>
                        </div>
                        <h1 className="EDh1Text">Categories</h1>
                        {/* onchange have problem */}
                        <select className="selectStyles" onChange= {e => {handleCategory(e.target.value)}} name="category"> 
                            <option value="0">Please choose one option</option>
                            {
                                Category && 
                                Category !== undefined ?
                                Category.map((optionCat,index) => {
                                    return(
                                        <option key={index} value={optionCat.id}>{optionCat.name}</option>
                                    )
                                })
                                : "No Category"
                            }
                        </select>
                        <h1 className="EDh1Text">Sub-Categories</h1>
                        <select className="selectStyles" onChange={handleChange} name="subCategory">
                            <option value="0">Select Sub-Categories</option>
                                {
                                    SubCategory && 
                                    SubCategory !== undefined ?
                                    SubCategory.map((optionsubCat,index) => {
                                        return(
                                            <option key={index} value={optionsubCat.name}>{optionsubCat.name}</option>
                                        )
                                    })
                                    : "No Sub-Category"
                                }
                        </select>
                        <h1 className="EDh1Text">Description</h1>
                        <textarea rows="3" cols="75" defaultValue={productdata.productDescription} className="EDinput" onChange={handleChange} name="productDescription"/>
                        <h1 className="EDh1Text">Spec</h1>
                        <textarea rows="3" cols="75" defaultValue={productdata.productSpec} className="EDinput" onChange={handleChange} name="productSpec"/>
                    </div>
                </div>
            </section>

                <section className="EDthirdsection">
                    <button className='EDbacktbtn' onClick={handleClick}>UPDATE</button>
                </section>
           </div> 
    )
}


    