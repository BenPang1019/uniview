import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import '../CMS/Cms.css'



export const Cms = () => {
    return(
        <div className='cms'>
            <Navbar/>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>What is CMS?</h1>
                    <h1 className='containerOneHTwo'>Central Monitoring Service (CMS)</h1>
                    <h1 className='containerOneHThree'>24 Hours 7 Days Security Monitoring <br/>For Your Property</h1>
                </div>

                <div className='containerTwo'>
                    <p className='containerTwoPOne'>Central Monitoring Services (CMS) is a total security package integrated by VSH Technology Sdn Bhd. CMS is different from conventional security companies that leave the entire security system to work and be manipulated by the user. They’re employed by many security system owners who require high-security monitoring. Our CMS operates 24 hours on a daily basis, 7 days every week and 12 months a year to observe your premises and supply rapid response to an emergency incident. It’s suitable for both residential and industrial sites.</p>
                </div>
            </div>

            <div className='mobile'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>What is CMS?</h1>
                    <h1 className='containerOneHTwo'>Central Monitoring Service (CMS)</h1>
                    <h1 className='containerOneHThree'>24 Hours 7 Days Security Monitoring <br/>For Your Property</h1>
                </div>

                <div className='containerTwo'>
                    <p className='containerTwoPOne'>Central Monitoring Services (CMS) is a total security package integrated by VSH Technology Sdn Bhd. CMS is different from conventional security companies that leave the entire security system to work and be manipulated by the user. They’re employed by many security system owners who require high-security monitoring. Our CMS operates 24 hours on a daily basis, 7 days every week and 12 months a year to observe your premises and supply rapid response to an emergency incident. It’s suitable for both residential and industrial sites.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}