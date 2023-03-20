import React,{useState} from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import NewOne from '../../Images/BlogNewOne.svg'
import NewTwo from '../../Images/BlogNewTwo.svg'
import NewThree from '../../Images/BlogNewThree.svg'
import { Link } from 'react-router-dom'
import '../Blog/Blog.css'
import {motion} from "framer-motion"
import moment from 'moment'

export const Blog = () => {
    const data = [
        {
            id:'1',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            title:'The Perks Of Using Smart Door Lock',
            postBy:'Pang',
            created_at:'3/20/2023',
            description:'Our goal is to give clients the highest-quality goods and services possible while upholding their expectations. We are enthusiastic to provide safety and prevention by providing the most cutting-edge security products, as well as to continually increase client satisfaction with our array of capabilities to forge lasting business relationships.'
        },
        {
            id:'2',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            title:'The Perks Of Using Smart Door Lock',
            postBy:'Pang',
            created_at:'3/20/2023',
            description:'qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd'
        },
        {
            id:'3',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            title:'The Perks Of Using Smart Door Lock',
            postBy:'Pang',
            created_at:'3/20/2023',
            description:'qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd'
        },
        {
            id:'4',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            title:'The Perks Of Using Smart Door Lock',
            postBy:'Pang',
            created_at:'3/20/2023',
            description:'qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd qwdwdwdwdwd'
        },
        {
            id:'5',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            title:'The Perks Of Using Smart Door Lock',
            postBy:'Pang',
            created_at:'3/20/2023',
            description:'Our goal is to give clients the highest-quality goods and services possible while upholding their expectations. We are enthusiastic to provide safety and prevention by providing the most cutting-edge security products, as well as to continually increase client satisfaction with our array of capabilities to forge lasting business relationships.'
        }
        ,
        {
            id:'6',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            title:'The Perks Of Using Smart Door Lock',
            postBy:'Pang',
            created_at:'3/20/2023',
            description:'Our goal is to give clients the highest-quality goods and services possible while upholding their expectations. We are enthusiastic to provide safety and prevention by providing the most cutting-edge security products, as well as to continually increase client satisfaction with our array of capabilities to forge lasting business relationships.'
        }
    ]

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

  

    const displayNews = data
    .map(data => {
        return(
            <div class="inline" key={data.id}>
                <div className='containerOneCard'>
                    <Link to='/blogDetails' state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><img src={data.image} className="image"/></Link>
                    <Link to='/blogDetails' state={{ data:data }} style={{ textDecoration:'none' }} onClick={scrollToTop}><p className='containerOnePrg'>{data.title}</p></Link>
                </div>
            </div>
        )
    })

    return(
        <motion.div className='blog' intial={{ width:0}} animate={{ width:'100%' }} exit={{ x:window.innerWidth,transition:{duration:0.13} }}>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHeader'>What’s New?</h1>
                    <div className='newsContainer'>
                        {displayNews}
                    </div>
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <h1 className='containerOneHeader'>What’s New?</h1>
                        <div className='newsContainer'>
                            {displayNews}
                        </div>
                </div>
            </div>
        </motion.div>
    )
}