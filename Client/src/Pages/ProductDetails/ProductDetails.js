import React, { useState,useEffect } from 'react'
import {useLocation,useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import './ProductDetails.css'
import PopularOne from '../../Images/PopularOne.svg'
import Stars from '../../Images/Stars.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProductDetails = () => {
  const [category,setCategory] = useState();
  const [active,setActive] = useState('first');
  const location = useLocation();

  return (
    <div className='productDetails'>
        <Navbar/>
        <div className='container'>
        <div className='containerOne'>
            <Swiper
                navigation={true}
                pagination={true}
                loop={true}
                slidesPerView={1}
                slidesPerGroup={1}
                allowTouchMove={false}
                modules={[Navigation]}
            >
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={require(`../../Images/${location.state.product.productImageOne}`)} className="image"/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={require(`../../Images/${location.state.product.productImageOne}`)} className="image"/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={require(`../../Images/${location.state.product.productImageOne}`)} className="image"/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={require(`../../Images/${location.state.product.productImageOne}`)} className="image"/>
            </div>
            </SwiperSlide>
            </Swiper>
            <div className='imageContainer'>
            <div className='containerOneImgTwo'>
                <img src={require(`../../Images/${location.state.product.productImageOne}`)} className="image"/>
            </div>
            <div className='containerOneImgThree'>
                <img src={require(`../../Images/${location.state.product.productImageOne}`)} className="image"/>
            </div>
            <div className='containerOneImgFour'>
                <img src={require(`../../Images/${location.state.product.productImageOne}`)} className="image"/>
            </div>
            </div>
            <div className='containerOneCategory'>
                <h1>#{location.state.product.category}</h1>
                <h1>#{location.state.product.subCategory}</h1>
            </div>
        </div>
          <div className='containerProductDetails'>
              <h1 className='containerProductDetailsHOne'>{location.state.product.productName} </h1>
              <img src={Stars} className="image"/>
              <h1 className='containerProductDetailsHTwo'>{location.state.product.productPrice} </h1>
              {active === "first" &&
              <div>
                <h2 className='containerProductDetailsHThree' style={{ textDecoration:"underline",textUnderlineOffset:'10px' }} >Description</h2>
                <h2 className='containerProductDetailsHFour' onClick={()=>setActive("two")}>Spec</h2>
                <p className='containerProductDetailsPOne'>{location.state.product.productDescription}</p>
              </div>
              }
              {active === "two" &&
              <div>
                <h2 className='containerProductDetailsHThree'  onClick={()=>setActive("first")}>Description</h2>
                <h2 className='containerProductDetailsHFour' style={{ textDecoration:"underline",textUnderlineOffset:'10px' }} >Spec</h2>
                <p className='containerProductDetailsPOne' style={{ overflow:"hidden",overflowY:"scroll" }}>
                  {location.state.product.productSpec}
                </p>
              </div>
              }
              <div className='button'>
                <button className='buttonBuy'>Buy</button>
                <button className='buttonCatalogue'>Product Catalogue</button>
              </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

