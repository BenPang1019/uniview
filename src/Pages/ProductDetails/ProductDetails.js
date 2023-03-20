import React, { useState,useEffect } from 'react'
import {useLocation,useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import './ProductDetails.css'
import PopularOne from '../../Images/PopularOne.svg'
import Stars from '../../Images/Stars.svg'

import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {motion} from "framer-motion"

export const ProductDetails = () => {
  const [category,setCategory] = useState();
  const [active,setActive] = useState('first');
  const location = useLocation();

  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p className='specP'>-{str.replaceAll('\\n', '')}</p>);
  }

  function NewlineTextTwo(props) {
    const text = props.text;
    return text.split('\n').map(str => <p className='specP'>{str.replaceAll('\\n', '')}</p>);
  }


  return (
    <motion.div className='productDetails' intial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.2} }}>
    <Helmet>
      <meta name="author" content="https://wdatechnology.com" />
      <title>Our Product | Uniview Solution Sdn Bhd</title>
      <meta name="title" content="Our Product | Uniview Solution Sdn Bhd" />
      <meta name="description" content="We committed to provide high quality and excellent service in security and surveillance field. " />
      <meta property="og:title" content="Our Product | Uniview Solution Sdn Bhd"/>
      <meta property="og:description" content="We committed to provide high quality and excellent service in security and surveillance field. " /> 
    </Helmet>
        <div className='container'>
        {location.state.product.productImageTwo || location.state.product.productImageThree || location.state.product.productImageFour?
        <div className='containerOne inline' style={{ verticalAlign:'top' }}>
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
                <img src={location.state.product.productImageOne?location.state.product.productImageOne:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            {location.state.product.productImageTwo?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={location.state.product.productImageTwo?location.state.product.productImageTwo:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            :
            null
            }
            {location.state.product.productImageThree?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={location.state.product.productImageThree?location.state.product.productImageThree:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            {location.state.product.productImageFour?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={location.state.product.productImageFour?location.state.product.productImageFour:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            </Swiper>
            <div className='imageContainer'>
            {location.state.product.productImageTwo?
            <div className='containerOneImgTwo'>
              <img src={location.state.product.productImageTwo?location.state.product.productImageTwo:null} className="image"/>
            </div>
            :
            <div className='containerOneImgTwo' style={{ display:'none' }}>
              <img src={location.state.product.productImageTwo?location.state.product.productImageTwo:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {location.state.product.productImageThree?
            <div className='containerOneImgThree'>
              <img src={location.state.product.productImageThree?location.state.product.productImageThree:null} className="image"/>
            </div>
            :
            <div className='containerOneImgThree' style={{ display:'none' }}>
              <img src={location.state.product.productImageThree?location.state.product.productImageThree:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {location.state.product.productImageFour?
            <div className='containerOneImgFour'>
              <img src={location.state.product.productImageFour?location.state.product.productImageFour:null} className="image"/>
            </div>
            :
            <div className='containerOneImgFour' style={{ display:'none' }}>
              <img src={location.state.product.productImageFour?location.state.product.productImageFour:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            </div>
            {location.state.product.productImageTwo && location.state.product.productImageThree && location.state.product.productImageFour?
            <div className='containerOneCategory'>
                <h1>#{location.state.product.category}</h1>
                <h1>#{location.state.product.subCategory}</h1>
            </div>
            :
            <div className='containerOneCategory'>
                <h1>#{location.state.product.category}</h1>
                <h1>#{location.state.product.subCategory}</h1>
            </div>
            }
        </div>
        :
        <div className='containerOne inline' style={{ verticalAlign:'top' }}>
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
                <img src={location.state.product.productImageOne?location.state.product.productImageOne:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            {location.state.product.productImageTwo?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={location.state.product.productImageTwo?location.state.product.productImageTwo:null} className="image"/>
                <img src={null} className="image"/>

            </div>
            </SwiperSlide>
            :
            null}
            {location.state.product.productImageThree?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={location.state.product.productImageThree?location.state.product.productImageThree:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            {location.state.product.productImageFour?
            <SwiperSlide>
            <div className='containerOneImgOne'>
                <img src={location.state.product.productImageFour?location.state.product.productImageFour:null} className="image"/>
                <img src={null} className="image"/>
            </div>
            </SwiperSlide>
            :
            null
            }
            </Swiper>
            <div className='imageContainer'>
            {location.state.product.productImageTwo?
            <div className='containerOneImgTwo'>
              <img src={location.state.product.productImageTwo?location.state.product.productImageTwo:null} className="image"/>
            </div>
            :
            <div className='containerOneImgTwo' style={{ display:'none' }}>
              <img src={location.state.product.productImageTwo?location.state.product.productImageTwo:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {location.state.product.productImageThree?
            <div className='containerOneImgThree'>
              <img src={location.state.product.productImageThree?location.state.product.productImageThree:null} className="image"/>
            </div>
            :
            <div className='containerOneImgThree' style={{ display:'none' }}>
              <img src={location.state.product.productImageThree?location.state.product.productImageThree:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            {location.state.product.productImageFour?
            <div className='containerOneImgFour'>
              <img src={location.state.product.productImageFour?location.state.product.productImageFour:null} className="image"/>
            </div>
            :
            <div className='containerOneImgFour' style={{ display:'none' }}>
              <img src={location.state.product.productImageFour?location.state.product.productImageFour:null} className="image" style={{ display:'none' }}/>
            </div>
            }
            </div>
            {location.state.product.productImageTwo && location.state.product.productImageThree && location.state.product.productImageFour?
            <div className='containerOneCategory'>
                <h1>#{location.state.product.category}</h1>
                <h1>#{location.state.product.subCategory}</h1>
            </div>
            :
            <div className='containerOneCategory'>
                <h1>#{location.state.product.category}</h1>
                <h1>#{location.state.product.subCategory}</h1>
            </div>
            }
        </div>
        }

        <div className='containerProductDetails inline'>
            <h1 className='containerProductDetailsHOne'>{location.state.product.productName} </h1>
            <img src={Stars} className="image"/>
            <h1 className='containerProductDetailsHTwo'> </h1>
            {active === "first" &&
            <div>
              <h2 className='containerProductDetailsHThree inline' style={{ textDecoration:"underline",textUnderlineOffset:'10px' }} >Description</h2>
              <h2 className='containerProductDetailsHFour inline' onClick={()=>setActive("two")}>Spec</h2>
              <p className='containerProductDetailsPOne'><NewlineTextTwo text={location.state.product.productDescription} /></p>
            </div>
            }
            {active === "two" &&
            <div>
              <h2 className='containerProductDetailsHThree inline'  onClick={()=>setActive("first")}>Description</h2>
              <h2 className='containerProductDetailsHFour inline' style={{ textDecoration:"underline",textUnderlineOffset:'10px' }} >Spec</h2>
              <p className='containerProductDetailsPOne' style={{ overflow:"hidden",overflowY:"scroll" }} >
                <NewlineText text={location.state.product.productSpec} />
              </p>
            </div>
            }
            <div className='button'>
              <a className='buttonCatalogue' href={location.state.product.productCatalogue} download>Product Catalogue</a>
            </div>
        </div>
        </div>
    </motion.div>
  )
}

