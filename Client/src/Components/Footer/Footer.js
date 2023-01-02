import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import Facebook from '../../Images/Facebook.svg'
import Instagram from '../../Images/Instagram.svg'
import Tiktok from '../../Images/Tiktok.svg'
import Whatsapp from '../../Images/Whatsapp.svg'
import Youtube from '../../Images/Youtube.svg'


export default function Footer() {
  return (
    <div className='footerF'>
    <div className='web'>
        <div className='containerOneF'>
            <h1>Quick Links</h1>
            <Link className='listItemsOne'>Home</Link>
            <br/>
            <Link className='listItemsTwo'>About Us</Link>
            <br/>
            <Link className='listItemsThree'>Products</Link>
            <br/>
            <Link className='listItemsFour'>CMS</Link>
            <br/>
            <Link className='listItemsFive'>Support</Link>
            <br/>
            <Link className='listItemsSix'>Terms of Use</Link>
            <br/>
            <Link className='listItemsSeven'>Warranty</Link>
            <br/>
            <Link className='listItemsEight'>Privacy Policy</Link>
        </div>

        <div className='containerTwoF'>
            <h1>Contact</h1>
            <a href='/'><img src={Tiktok}  className="iconOneF"/></a>
            <a href='/'><img src={Youtube} className="iconF"/></a>
            <a href='/'><img src={Instagram} className="iconF"/></a>
            <a href='/'><img src={Facebook} className="iconF"/></a>
            <a href='/'><img src={Whatsapp} className="iconF"/></a>

            <h1>Address</h1>
            <p className='containerTwoPF'>
                109, JALAN PASAR PUDU 55100<br/>
                &nbsp;&nbsp;&nbsp;KUALA LUMPUR, 55100 WILAYAH<br/>
            </p>
            <p className='containerTwoPPF'>
                PERSEKUTUAN, Wilayah<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persekutuan Kuala Lumpur
            </p>
        </div>

        <div className='containerThreeF'>
            <h1>Follow Us</h1>
            <p className='containerThreePF'>011-2043 2729</p>

            <h1 className='containerThreeHF'>Opening Hours</h1>
            <p className='containerThreePPF'>
                Mon - Fri <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00a.m. - 6:00p.m.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat & Sun:Closed
            </p>
        </div>

        <div className='containerFourF'>
            <h1>Locate Us</h1>
            <div className='containerMap'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8475190602803!2d101.71388931530898!3d3.1349567541126317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc36230da85e4d%3A0x960bfbbb0388943!2s109%2C%20Jalan%20Pasar%2C%20Pudu%2C%2055100%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1671422055146!5m2!1sen!2smy"></iframe>
            </div>
            <div className='copyright'>
                <h3 className='copyrightHOne'>
                    Copyright © 2022 Uni View Solution Sdn Bhd
                </h3>
            </div>
        </div>
    </div>


    <div className='mobile'>
        <div className='containerOneF'>
            <h1>Quick Links</h1>
            <Link className='listItemsOne'>Home</Link>
            <br/>
            <Link className='listItemsTwo'>About Us</Link>
            <br/>
            <Link className='listItemsThree'>Products</Link>
            <br/>
            <Link className='listItemsFour'>CMS</Link>
            <br/>
            <Link className='listItemsFive'>Support</Link>
            <br/>
            <Link className='listItemsSix'>Terms of Use</Link>
            <br/>
            <Link className='listItemsSeven'>Warranty</Link>
            <br/>
            <Link className='listItemsEight'>Privacy Policy</Link>
        </div>

        <div className='containerTwoF'>
            <h1>Contact</h1>
            <a href='/'><img src={Tiktok}  className="iconOneF"/></a>
            <a href='/'><img src={Youtube} className="iconF"/></a>
            <a href='/'><img src={Instagram} className="iconF"/></a>
            <a href='/'><img src={Facebook} className="iconF"/></a>
            <a href='/'><img src={Whatsapp} className="iconF"/></a>

            <h1>Address</h1>
            <p className='containerTwoPF'>
                109, JALAN PASAR PUDU 55100<br/>
                &nbsp;&nbsp;&nbsp;KUALA LUMPUR, 55100 WILAYAH<br/>
            </p>
            <p className='containerTwoPPF'>
                PERSEKUTUAN, Wilayah<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persekutuan Kuala Lumpur
            </p>
        </div>

        <div className='containerThreeF'>
            <h1>Follow Us</h1>
            <p className='containerThreePF'>011-2043 2729</p>

            <h1 className='containerThreeHF'>Opening Hours</h1>
            <p className='containerThreePPF'>
                Mon - Fri <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00a.m. - 6:00p.m.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat & Sun:Closed
            </p>
        </div>

        <div className='containerFourF'>
            <h1>Locate Us</h1>
            <div className='containerMap'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8475190602803!2d101.71388931530898!3d3.1349567541126317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc36230da85e4d%3A0x960bfbbb0388943!2s109%2C%20Jalan%20Pasar%2C%20Pudu%2C%2055100%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1671422055146!5m2!1sen!2smy"></iframe>
            </div>
        </div>
        
        <div className='copyright'>
            <h3 className='copyrightHOne'>
                Copyright © 2022 Uni View Solution Sdn Bhd 
            </h3>
        </div>
    </div>
    </div>
  )
}