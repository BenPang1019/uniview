import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import '../PIDS/Pids.css'

export const Pids = () => {
    return(
        <div className='pids'>
            <Navbar/>
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>What is PIDS?</h1>
                    <h1 className='containerOneHTwo'>Perimeter Intrusion Detection System (PIDS)</h1>
                    <h1 className='containerOneHThree'>Detect Trespasser And Intruder Coming <br/>Into Your Secured Area</h1>
                </div>

                <div className='containerTwo'>
                    <p className='containerTwoPOne'>
                        Perimeter Intrusion Detection System (PIDS) refers to a wide range of technologies designed to give early warning of an intruder coming into a secure area.
                        This system usually categorized into 4 type of PIDS which are are Barrier-mounted PIDS, Ground Base PIDS, Free-Standing PIDS, Rapidly Deployable PIDS.
                    </p>
                    <p className='containerTwoPOne'>
                        Together, these components create a complete “perimeter protection zone” that alerts intrusion officers when movement is detected at particular locations along your building’s external border.
                    </p>
                </div>
            </div>


            <div className='mobile'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>What is PIDS?</h1>
                    <h1 className='containerOneHTwo'>Perimeter Intrusion Detection System (PIDS)</h1>
                    <h1 className='containerOneHThree'>Detect Trespasser And Intruder Coming <br/>Into Your Secured Area</h1>
                </div>

                <div className='containerTwo'>
                    <p className='containerTwoPOne'>
                        Perimeter Intrusion Detection System (PIDS) refers to a wide range of technologies designed to give early warning of an intruder coming into a secure area.
                        This system usually categorized into 4 type of PIDS which are are Barrier-mounted PIDS, Ground Base PIDS, Free-Standing PIDS, Rapidly Deployable PIDS.
                    </p>
                    <p className='containerTwoPOne'>
                        Together, these components create a complete “perimeter protection zone” that alerts intrusion officers when movement is detected at particular locations along your building’s external border.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}