import React, { useState,useEffect } from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import JobsImage from '../../Images/jobsImage.svg'
import axios from 'axios';
import '../Jobs/Jobs.css'


export const Jobs= () =>{
    const [active,setActive] = useState('first');

    return(
        <div className='jobs'>
            <Navbar/>
            <div className='web'>
                <h1 className='hOne'>Work Oppoturnity</h1>
                    <div className='containerOne'>
                        {active === "first" &&
                            <div>
                                <h1 className='containerOneH' style={{ textDecoration:"underline" }} onClick={()=>setActive("first")}>Sales Admin</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("two")}>Media Content Writer</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("three")}>Technical Support</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("fourth")}>Electronic Technician</h1>

                                <ul className='containerOneUl'>
                                    <li className='containerOneLi'>No working experience required.</li>
                                    <li className='containerOneLi'>Diploma/SPM Qualification (fresh graduates are welcome to apply).</li>
                                    <li className='containerOneLi'>Handle & respond to customers inquiry in a timely & professional manners.</li>
                                    <li className='containerOneLi'>Like challenge, responsibility & discipline.</li>
                                    <li className='containerOneLi'>Able to work with all levels of people.</li>
                                    <li className='containerOneLi'>Good computer & communication skills (Malay & English)</li>
                                </ul>

                                <button className='containerOneBtn'>Apply</button>

                                <h1 className='containerOneSalary'>monthly salary up to <br/> RM3200</h1>
                            </div>
                        }

                        {active === "two" &&
                            <div>
                                <h1 className='containerOneH' onClick={()=>setActive("first")}>Sales Admin</h1>
                                <h1 className='containerOneH' style={{ textDecoration:"underline" }} onClick={()=>setActive("two")}>Media Content Writer</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("three")}>Technical Support</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("fourth")}>Electronic Technician</h1>

                                <ul className='containerOneUl'>
                                    <li className='containerOneLi'>No working experience required.</li>
                                    <li className='containerOneLi'>Creating and delivering email campaigns.</li>
                                    <li className='containerOneLi'>Ability to work independently and within a team.</li>
                                    <li className='containerOneLi'>Generating content for the website BLOG (Articles).</li>
                                    <li className='containerOneLi'>Generating content for social media (Facebook & Instagram).</li>
                                </ul>

                                <button className='containerOneBtn'>Apply</button>

                                <h1 className='containerOneSalary'>monthly salary up to <br/> RM3200</h1>
                            </div>
                        }

                        {active === "three" &&
                            <div>
                                <h1 className='containerOneH' onClick={()=>setActive("first")}>Sales Admin</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("two")}>Media Content Writer</h1>
                                <h1 className='containerOneH' style={{ textDecoration:"underline" }} onClick={()=>setActive("three")}>Technical Support</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("fourth")}>Electronic Technician</h1>

                                <ul className='containerOneUl'>
                                    <li className='containerOneLi'>No working experience required.</li>
                                    <li className='containerOneLi'>Diploma/SPM Qualification (fresh graduates are welcome to apply).</li>
                                    <li className='containerOneLi'>Like challenge, responsibility & discipline.</li>
                                    <li className='containerOneLi'>Able to work with all levels of people.</li>
                                    <li className='containerOneLi'>Good computer & communication skills (Malay & English).</li>
                                </ul>

                                <button className='containerOneBtn'>Apply</button>

                                <h1 className='containerOneSalary'>monthly salary up to <br/> RM3200</h1>
                            </div>
                        }

                        {active === "fourth" &&
                            <div>
                                <h1 className='containerOneH' onClick={()=>setActive("first")}>Sales Admin</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("two")}>Media Content Writer</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("three")}>Technical Support</h1>
                                <h1 className='containerOneH' style={{ textDecoration:"underline" }} onClick={()=>setActive("fourth")}>Electronic Technician</h1>

                                <ul className='containerOneUl'>
                                    <li className='containerOneLi'>No working experience required.</li>
                                    <li className='containerOneLi'>Diploma/SPM Qualification (fresh graduates are welcome to apply).</li>
                                    <li className='containerOneLi'>Like challenge, responsibility & discipline.</li>
                                    <li className='containerOneLi'>Able to work with all levels of people.</li>
                                    <li className='containerOneLi'>Good computer & communication skills (Malay & English).</li>
                                </ul>

                                <button className='containerOneBtn'>Apply</button>

                                <h1 className='containerOneSalary'>monthly salary up to <br/> RM3200</h1>
                            </div>
                        }
                    </div>
                    
                    <div className='container'>
                    <div className='containerTwo'>
                        <img src={JobsImage} className="containerTwoImage"/>
                    </div>

                    <div className='containerThree'>
                        <h1 className='containerThreeH'>Why Working With Us?</h1>
                        
                        <ul>
                            <li className='containerThreeLi'>Work Training will be Provided</li>
                            <li className='containerThreeLi'>Opportunities to work with other departments</li>
                            <li className='containerThreeLi'>Friendly & Positive working environment</li>
                            <li className='containerThreeLi'>Bounce, Activities, Company Trip & Allowance</li>
                            <li className='containerThreeLi'>EPF, SOCSO & EIS will be provided</li>
                            <li className='containerThreeLi'>Accommodation are provided for outstation worker</li>
                            <li className='containerThreeLi'>5 Working days (Monday to Friday - 9am to 6pm)</li>
                        </ul>
                    </div>
                    </div>
            </div>



            <div className='mobile'>
                <h1 className='hOne'>Work Oppoturnity</h1>
                    <div className='containerOne'>
                        {active === "first" &&
                            <div>
                                <h1 className='containerOneH' style={{ textDecoration:"underline" }} onClick={()=>setActive("first")}>Sales Admin</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("two")}>Media Content Writer</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("three")}>Technical Support</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("fourth")}>Electronic Technician</h1>

                                <ul className='containerOneUl'>
                                    <li className='containerOneLi'>No working experience required.</li>
                                    <li className='containerOneLi'>Diploma/SPM Qualification (fresh graduates are welcome to apply).</li>
                                    <li className='containerOneLi'>Handle & respond to customers inquiry in a timely & professional manners.</li>
                                    <li className='containerOneLi'>Like challenge, responsibility & discipline.</li>
                                    <li className='containerOneLi'>Able to work with all levels of people.</li>
                                    <li className='containerOneLi'>Good computer & communication skills (Malay & English)</li>
                                </ul>

                                <button className='containerOneBtn'>Apply</button>

                                <h1 className='containerOneSalary'>monthly salary up to <br/> RM3200</h1>
                            </div>
                        }

                        {active === "two" &&
                            <div>
                                <h1 className='containerOneH' onClick={()=>setActive("first")}>Sales Admin</h1>
                                <h1 className='containerOneH' style={{ textDecoration:"underline" }} onClick={()=>setActive("two")}>Media Content Writer</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("three")}>Technical Support</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("fourth")}>Electronic Technician</h1>

                                <ul className='containerOneUl'>
                                    <li className='containerOneLi'>No working experience required.</li>
                                    <li className='containerOneLi'>Creating and delivering email campaigns.</li>
                                    <li className='containerOneLi'>Ability to work independently and within a team.</li>
                                    <li className='containerOneLi'>Generating content for the website BLOG (Articles).</li>
                                    <li className='containerOneLi'>Generating content for social media (Facebook & Instagram).</li>
                                </ul>

                                <button className='containerOneBtn'>Apply</button>

                                <h1 className='containerOneSalary'>monthly salary up to <br/> RM3200</h1>
                            </div>
                        }

                        {active === "three" &&
                            <div>
                                <h1 className='containerOneH' onClick={()=>setActive("first")}>Sales Admin</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("two")}>Media Content Writer</h1>
                                <h1 className='containerOneH' style={{ textDecoration:"underline" }} onClick={()=>setActive("three")}>Technical Support</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("fourth")}>Electronic Technician</h1>

                                <ul className='containerOneUl'>
                                    <li className='containerOneLi'>No working experience required.</li>
                                    <li className='containerOneLi'>Diploma/SPM Qualification (fresh graduates are welcome to apply).</li>
                                    <li className='containerOneLi'>Like challenge, responsibility & discipline.</li>
                                    <li className='containerOneLi'>Able to work with all levels of people.</li>
                                    <li className='containerOneLi'>Good computer & communication skills (Malay & English).</li>
                                </ul>

                                <button className='containerOneBtn'>Apply</button>

                                <h1 className='containerOneSalary'>monthly salary up to <br/> RM3200</h1>
                            </div>
                        }

                        {active === "fourth" &&
                            <div>
                                <h1 className='containerOneH' onClick={()=>setActive("first")}>Sales Admin</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("two")}>Media Content Writer</h1>
                                <h1 className='containerOneH' onClick={()=>setActive("three")}>Technical Support</h1>
                                <h1 className='containerOneH' style={{ textDecoration:"underline" }} onClick={()=>setActive("fourth")}>Electronic Technician</h1>

                                <ul className='containerOneUl'>
                                    <li className='containerOneLi'>No working experience required.</li>
                                    <li className='containerOneLi'>Diploma/SPM Qualification (fresh graduates are welcome to apply).</li>
                                    <li className='containerOneLi'>Like challenge, responsibility & discipline.</li>
                                    <li className='containerOneLi'>Able to work with all levels of people.</li>
                                    <li className='containerOneLi'>Good computer & communication skills (Malay & English).</li>
                                </ul>

                                <button className='containerOneBtn'>Apply</button>

                                <h1 className='containerOneSalary'>monthly salary up to <br/> RM3200</h1>
                            </div>
                        }
                    </div>
                    
                    <div className='container'>
                    <div className='containerTwo'>
                        <img src={JobsImage} className="containerTwoImage"/>
                    </div>

                    <div className='containerThree'>
                        <h1 className='containerThreeH'>Why Working With Us?</h1>
                        
                        <ul>
                            <li className='containerThreeLi'>Work Training will be Provided</li>
                            <li className='containerThreeLi'>Opportunities to work with other departments</li>
                            <li className='containerThreeLi'>Friendly & Positive working environment</li>
                            <li className='containerThreeLi'>Bounce, Activities, Company Trip & Allowance</li>
                            <li className='containerThreeLi'>EPF, SOCSO & EIS will be provided</li>
                            <li className='containerThreeLi'>Accommodation are provided for outstation worker</li>
                            <li className='containerThreeLi'>5 Working days (Monday to Friday - 9am to 6pm)</li>
                        </ul>
                    </div>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}