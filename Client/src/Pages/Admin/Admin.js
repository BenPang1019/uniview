import React from 'react'
import searchLogo from '../../Images/searchLogo.svg'
import product from '../../Images/product.svg'
import post from '../../Images/Post.svg'
import stats from '../../Images/Stats.svg'
import sales from '../../Images/Sales.svg'
import settings from '../../Images/Setting.svg'
import reviews from '../../Images/Review.svg'
import promotion from '../../Images/Promotion.svg'
import media from '../../Images/Media.svg'
import PopUp from '../../Images/Pop-up.svg'
import contact from '../../Images/contactAdmin.svg'
import profile from '../../Images/Profile.svg'
import add from '../../Images/Add.svg'
import logo from '../../Images/wdalogo.svg'
import flower from '../../Images/Flower.jpg'

import '../Admin/Admin.css'
import {Link, useNavigate } from 'react-router-dom'


export const Admin = () => {
    const navigate = useNavigate();

    const navigatetoProduct= () =>{
        navigate('/adminLogin/adminMainPage/adminProduct');
    };

    return(

        <div className='admin'>
            <section className='firstsection'>
                <div className='firstcontainer'>
                    <input className='searchinput' type='text' placeholder='SEARCH...'></input>
                    <div className='btncontainer'>
                        <iconbutton><img src={searchLogo} className='searchbtn'/></iconbutton>
                    </div>
                    <button className='signoutbtn'>SIGN OUT</button>
                </div>
            </section>

            <section className='secondsection'>
                <div className='center-container'>
                    <div className='container-2'>
                        <img src={flower} className='imgstyle'></img>
                            <div className='col-secondcontainer'>
                                <h1 className='h1Text'>Hi Jimmy, welcome back!</h1>
                                <p className='webtext'>www.wdatechnology.com.my</p>
                            </div>
                        <iconbutton><img src={profile} className='profilebtn'/></iconbutton>
                        <iconbutton><img src={add} className='addbtn'/></iconbutton>
                    </div>
                </div>
            </section>

            <section className='thirdsection'>
                <h2 className='h3-color'>QUICK ACTIONS</h2>
                <div className='thirdcontainer'>
                    <iconbutton onClick={navigatetoProduct}><img src={product} className='actionbtn'/></iconbutton>
                    {/* <button className='actionbtn'>Post</button> */}
                    <Link to={`/post/:id`}><iconbutton><img src={post} className='actionbtn actionbtn-Lf'/></iconbutton></Link>
                    {/* <button className='actionbtn'>Stats</button> */}
                    <iconbutton><img src={stats} className='actionbtn actionbtn-Lf'/></iconbutton>
                    {/* <button className='actionbtn'>Sales</button> */}
                    <iconbutton><img src={sales} className='actionbtn actionbtn-Lf'/></iconbutton>
                    {/* <button className='actionbtn'>Setting</button> */}
                    <iconbutton><img src={settings} className='actionbtn actionbtn-Lf'/></iconbutton>
                </div>
            </section>

            <section className='fourthsection'>
                <h2 className='h3-color'>OTHERS</h2>
                <div className='fourthcontainer'>
                    {/* <button>Review</button> */}
                    <iconbutton><img src={reviews} className='actionbtn'/></iconbutton>
                    {/* <button className='actionbtn'>Promotion</button> */}
                    <iconbutton><img src={promotion} className='actionbtn actionbtn-Lf'/></iconbutton>
                    {/* <button className='actionbtn'>Media</button> */}
                    <iconbutton><img src={media} className='actionbtn actionbtn-Lf'/></iconbutton>
                    {/* <button className='actionbtn'>Pop-up</button> */}
                    <iconbutton><img src={PopUp} className='actionbtn actionbtn-Lf'/></iconbutton>
                    {/* <button className='actionbtn'>Contact</button> */}
                    <iconbutton><img src={contact} className='actionbtn actionbtn-Lf'/></iconbutton>
                </div>
            </section>

            <section className='fifthsection'>
                <div className='center-fifthContainer'>
                    <div className='container-5'>
                        <div className='column-40'>
                            <iconbutton><img src={logo}/></iconbutton>
                        </div>
                        <div className='column-60'>
                            <h1 className='h1Text'>Need some help?</h1>
                            <p className='helptext'>Feel free to leave a message regarding issues you are facing. We will get in touch with you as soon as posible.</p>
                        </div>
                        {/* <div className='col-secondcontainer'>
                            
                        </div> */}
                    </div>
                </div>
            </section>

            <section className='fromsection'>
                <form className="contact-form fromcontainer">
                    <div className='container-5'>
                        <div className='column'>
                            <div className="form-field">
                                <label className="label" for="name">NAME</label>
                                <input
                                id="name"
                                className="input-text js-input"
                                type="text"
                                required
                                />
                            </div>

                            <div className="form-field">
                                <label className="label" for="phone">PHONE</label>
                                <input
                                id="phone"
                                className="input-text js-input"
                                type="text"
                                required
                                />
                            </div>
                        </div>
                        <div className='column'>
                            <div className="form-field space-5">
                                <label className="label" for="message">MESSAGE</label>
                                <textarea
                                id="message"
                                className="input-text-2"
                                type="text"
                                required
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </section>

            <div className='sendBtncontainer'>
                <button className='sendtBtn'>SEND</button>
            </div>

            <div className='ViewBtncontainer'>
                <button className='ViewBtn'>View Site</button>
            </div>


        </div>

    )

}