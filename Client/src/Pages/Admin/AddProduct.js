import React, { useEffect } from "react";
import home from "../../Images/Home.svg"
import eye from '../../Images/Eye.svg'
import pencel from '../../Images/Pencel.svg'
import dele from '../../Images/Delete.svg'


import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import pdf from "../../Images/EZMWEBSITECOPYWRITING.pdf"

import '../Admin/Edit.css'

export const AddProduct = () => {

    const [file, setFile] = useState([]);

    const imageUpload = async () => {
      try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await axios.post("/imageUpload", formData);
          return res.data
      } catch (err) {
          console.log(err);
      }
      };

      const [fileTwo, setFileTwo] = useState([]);

    const imageUploadTwo = async () => {
      try {
          const formData = new FormData();
          formData.append("file", fileTwo);
          const res = await axios.post("/imageUploadTwo", formData);
          return res.data
      } catch (err) {
          console.log(err);
      }
      };

      const [fileThree, setFileThree] = useState([]);

    const imageUploadThree = async () => {
      try {
          const formData = new FormData();
          formData.append("file", fileThree);
          const res = await axios.post("/imageUploadThree", formData);
          return res.data
      } catch (err) {
          console.log(err);
      }
      };

      const [fileFour, setFileFour] = useState([]);

    const imageUploadFour = async () => {
      try {
          const formData = new FormData();
          formData.append("file", fileFour);
          const res = await axios.post("/imageUploadFour", formData);
          return res.data
      } catch (err) {
          console.log(err);
      }
      };

      const [fileFive, setFileFive] = useState([]);

    const imageUploadFive = async () => {
      try {
          const formData = new FormData();
          formData.append("file", fileFive);
          const res = await axios.post("/imageUploadFour", formData);
          return res.data
      } catch (err) {
          console.log(err);
      }
      };

    

      const [product, setProduct] = useState({
        brand:"",
        type:"",
        productImageOne:"",
        productImageTwo:"",
        productImageThree:"",
        productImageFour:"",
        productCatalogue:"",
        category:"",
        subCategory:"",
        productName:"",
        productPrice:"",
        productDescription:"",
        productSpec:"",
      });

      const types = [
        'Audio',
        'Car Plate Recognition',
        'Cude',
        'Fish Eye',
        'Full Color',
        'Normal',
        'Other',
        'PanoVu',
        'Pin Hole',
        'PTZ',
        'Turbo HD ColorVu',
        'WIFI'
    ];

    const subTypes = [
        '1MP',
        '2MP',
        '3MP',
        '4MP',
        '5MP',
        '6MP',
        '8MP',
    ];

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
            {id:"1",categoryId:"Access Control System",name:"Hikvision Access Control System"},
            {id:"2",categoryId:"Access Control System",name:"OEM Access Control System"},
            {id:"3",categoryId:"Access Control System",name:"ZKTeco"},
            {id:"4",categoryId:"Accessories",name:"Access Control Accessories"},
            {id:"5",categoryId:"Accessories",name:"Alarm Accessories"},
            {id:"6",categoryId:"Accessories",name:"Auto Door Accessories"},
            {id:"7",categoryId:"Accessories",name:"BNC Connector"},
            {id:"8",categoryId:"Accessories",name:"Cabling Solution"},
            {id:"9",categoryId:"Accessories",name:"CCTV Bracket"},
            {id:"10",categoryId:"Accessories",name:"CCTV Camera Accessories"},
            {id:"11",categoryId:"Accessories",name:"CCTV Tester"},
            {id:"12",categoryId:"Accessories",name:"Fiber Connectors"},
            {id:"13",categoryId:"Accessories",name:"Fiber Distribution Boxes"},
            {id:"14",categoryId:"Accessories",name:"Fiber Distribution Frames"},
            {id:"15",categoryId:"Accessories",name:"Fiber Distribution SFP"},
            {id:"16",categoryId:"Accessories",name:"Fiber Optic Converter"},
            {id:"17",categoryId:"Accessories",name:"Fiber Patch Cords"},
            {id:"18",categoryId:"Accessories",name:"Fiber Splicing Tools"},
            {id:"19",categoryId:"Accessories",name:"HD Fiber Convertor"},
            {id:"20",categoryId:"Accessories",name:"HDMI Cable"},
            {id:"21",categoryId:"Accessories",name:"Keystone Jacks & Face Plates"},
            {id:"22",categoryId:"Accessories",name:"Network Patch Panels"},
            {id:"23",categoryId:"Accessories",name:"PoE Solution"},
            {id:"24",categoryId:"Accessories",name:"Power Supply"},
            {id:"25",categoryId:"Accessories",name:"Surge Protector"},
            {id:"26",categoryId:"Auto Door System",name:"Sliding Auto Door"},
            {id:"27",categoryId:"Auto Door System",name:"Swing Door"},
            {id:"28",categoryId:"CCTV Recorders",name:"Dahua DVR NVR Recorders"},
            {id:"29",categoryId:"CCTV Recorders",name:"Hikvision DVR NVR Recorders"},
            {id:"30",categoryId:"CCTV Recorders",name:"REOLINK NVR Recorder"},
            {id:"31",categoryId:"CCTV Security Camera System",name:"DAHUA"},
            {id:"32",categoryId:"CCTV Security Camera System",name:"EZVIZ"},
            {id:"33",categoryId:"CCTV Security Camera System",name:"HIKVISION"},
            {id:"34",categoryId:"CCTV Security Camera System",name:"Wisenet"},
            {id:"35",categoryId:"Display Monitor",name:"Dahua LCD"},
            {id:"36",categoryId:"Display Monitor",name:"Dahua Standing Monitor"},
            {id:"37",categoryId:"Display Monitor",name:"ViewSonic Monitor"},
            {id:"38",categoryId:"IP PBX System",name:"Fanvil IP PBX Phone"},
            {id:"39",categoryId:"IP PBX System",name:"Zycoo IP Phone System"},
            {id:"40",categoryId:"Networking",name:"IP COM"},
            {id:"41",categoryId:"Networking",name:"Ruijie"},
            {id:"42",categoryId:"Security Alarm System",name:"Bluguard Security Alarm System"},
            {id:"43",categoryId:"Security Alarm System",name:"HIKVision Security Alarm System"},
            {id:"44",categoryId:"Security Alarm System",name:"VIVOS Security Alarm System"},
            {id:"45",categoryId:"Security Gate System",name:"Auto Gate"},
            {id:"46",categoryId:"Security Gate System",name:"Parking Barrier Gate"},
            {id:"47",categoryId:"Security Gate System",name:"Turnstile Gate"},
            {id:"48",categoryId:"Smart Door Lock",name:"VLock Smart Door Lock"},
            {id:"49",categoryId:"Smart Door Lock",name:"ZKTeco Smart Lock"},
            {id:"50",categoryId:"Solar System Solution",name:"Reolink Solar Camera"},
            {id:"51",categoryId:"Solar System Solution",name:"VSH Solar Light"},
            {id:"52",categoryId:"Solar System Solution",name:"VSH Solar System Package"},
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

      const[Category, setcategory] = useState([]); 
      const[SubCategory, setSubcategory] = useState([]); 
      
      useEffect(()=>{
        setcategory(optionsCategory);
      },[]) 

      const [error,setError] = useState(false);
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setFile(e.target.files[0])
      };
      
      const handleChangeTwo = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setFileTwo(e.target.files[0])
      };

      const handleChangeThree = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setFileThree(e.target.files[0])
      };

      const handleChangeFour = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setFileFour(e.target.files[0])
      };

      const handleChangeFive = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setFileFive(e.target.files[0])
      };

      const handleCategory = (name) => {
        const dt = optionsSubCategory.filter(x => x.categoryId === name);
        setSubcategory(dt);
        product.category=name
      }


    const handleClick = async e => {
        e.preventDefault();
        setProduct(product.productImageOne?product.productImageOne = await imageUpload():"")
        setProduct(product.productImageTwo?product.productImageTwo = await imageUploadTwo():"")
        setProduct(product.productImageThree?product.productImageThree = await imageUploadThree():"")
        setProduct(product.productImageFour?product.productImageFour = await imageUploadFour():"")
        setProduct(product.productCatalogue?product.productCatalogue = await imageUploadFive():"")
            try {
              await axios.post("/product/addProduct", product);
              navigate("/adminLogin/adminMainPage/adminProduct");
            } catch (err) {
              console.log(err);
              setError(true)
            }
    }


      const navigatetohome= () =>{
        navigate('/');
      };

    return(

        <div className="editProduct">
            <section className="EDfirstsection">
                <div className="EDfirstcontainer">
                    <div className="EDcolumn-30">
                        <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                    </div>
                    <div className="EDcolumn-40">
                        <iconbutton><img src={eye} className="btnstyle"/></iconbutton>
                        <iconbutton><img src={pencel} className="btnstyle"/></iconbutton>
                        <iconbutton><img src={dele} className="btnstyle1"/></iconbutton>
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
                        <input
                            name="productImageOne"
                            className="input-text js-input"
                            style={{marginTop:'1rem'}}
                            onChange={handleChange}
                            type="file"
                        />
                        <h1 className="EDh1Text">Name</h1>
                        <input type="text" placeholder="Product Name..." className="EDinput" onChange={handleChange} name="productName"/>
                        <h1 className="EDh1Text">Brand</h1>
                        {/* <input type="text" placeholder="Brand..." className="EDinput" onChange={handleChange} name="brand"/> */}
                        <select className="selectStyles" onChange={handleChange} name="brand">
                            <option >Select brand</option>
                            {brand.map((brandoption, index) => {
                                return <option key={index} >
                                    {brandoption}
                                </option>
                            })}
                        </select>
                        <h1 className="EDh1Text">Type</h1>
                        <select className="selectStyles" onChange={handleChange} name="type">
                            <option>Select type</option>
                            {types.map((optionTypes, index) => {
                                return <option key={index} >
                                    {optionTypes}
                                </option>
                            })}
                        </select>
                        <h1 className="EDh1Text">Sub-Type</h1>
                        <select className="selectStyles" onChange={handleChange} name="subType">
                            <option>Select Sub-type</option>
                            {subTypes.map((optionSubTypes, index) => {
                                return <option key={index} >
                                    {optionSubTypes}
                                </option>
                            })}
                        </select>
                        <h1 className="EDh1Text">Price</h1>
                        <input type="text" placeholder="RM..." className="EDinput" onChange={handleChange} name="productPrice"/>
                    </div>
                    <div className="EDcolumn left">
                        <h1 className="EDh1Text">images</h1>
                        <div className="imagecontainer">
                            <label> 2</label>
                            <input
                                name="productImageTwo"
                                className="input-text js-input"
                                style={{marginTop:'1rem'}}
                                onChange={handleChangeTwo}
                                type="file"

                            />
                            <label>3</label>
                            <input
                                name="productImageThree"
                                className="input-text js-input"
                                style={{marginTop:'1rem'}}
                                onChange={handleChangeThree}
                                type="file"
                            /><br/>
                            <label> 4</label>
                            <input
                                name="productImageFour"
                                className="input-text js-input"
                                style={{marginTop:'1rem'}}
                                onChange={handleChangeFour}
                                type="file"
                            />
                            <label>pdf</label>
                            <input
                                name="productCatalogue"
                                className="input-text js-input"
                                style={{marginTop:'1rem'}}
                                onChange={handleChangeFive}
                                type="file"
                            />
                        </div>
                        <h1 className="EDh1Text">Categories</h1>
                        {/* onchange have problem */}
                        <select className="selectStyles" onChange= {e => {handleCategory(e.target.value)}} name="category"> 
                            <option value="">Please choose one option</option>
                            {
                                Category && 
                                Category !== undefined ?
                                Category.map((optionCat,index) => {
                                    return(
                                        <option key={index} value={optionCat.name}>{optionCat.name}</option>
                                    )
                                })
                                : "No Category"
                            }
                        </select>
                        <h1 className="EDh1Text">Sub-Categories</h1>
                        <select className="selectStyles" onChange={handleChange} name="subCategory">
                            <option value="">Select Sub-Categories</option>
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
                        <textarea rows="3" cols="75" placeholder="Desc..." className="EDinput" onChange={handleChange} name="productDescription"/>
                        <h1 className="EDh1Text">Spec (use "," to seperate)</h1>
                        <textarea rows="3" cols="75" placeholder="Spec..." className="EDinput" onChange={handleChange} name="productSpec"/>
                    </div>
                </div>
            </section>

            <section className="EDthirdsection">
                <button className='EDbacktbtn' onClick={handleClick}>ADD</button>
            </section>
        </div>
    )
}