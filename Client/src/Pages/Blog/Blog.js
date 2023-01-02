import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import NewOne from '../../Images/BlogNewOne.svg'
import NewTwo from '../../Images/BlogNewTwo.svg'
import NewThree from '../../Images/BlogNewThree.svg'
import '../Blog/Blog.css'


export const Blog = () => {
    return(
        <div className='blog'>
            <Navbar/>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHeader'>What’s New?</h1>
                        <div className='containerOneCard'>
                            <img src={NewOne} className="image"/>
                            <p className='containerOnePrg'>The Perks Of Using Smart Door Lock</p>
                        </div>
                        <div className='containerOneCard'>
                            <img src={NewTwo} className="image"/>
                            <p className='containerOnePrg'>Coax Cable: 5 Benefits It Brings Something Ne...</p>
                        </div>
                        <div className='containerOneCard'>
                            <img src={NewThree} className="image"/>
                            <p className='containerOnePrg'>Top 5 Amusement Park Turnstile...</p>
                        </div>
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <h1 className='containerOneHeader'>What’s New?</h1>
                        <div className='containerOneCard'>
                            <img src={NewOne} className="image"/>
                            <p className='containerOnePrg'>The Perks Of Using Smart Door Lock</p>
                        </div>
                        <div className='containerOneCard'>
                            <img src={NewTwo} className="image"/>
                            <p className='containerOnePrg'>Coax Cable: 5 Benefits It Brings Something Ne...</p>
                        </div>
                        <div className='containerOneCard'>
                            <img src={NewThree} className="image"/>
                            <p className='containerOnePrg'>Top 5 Amusement Park Turnstile...</p>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}