import React,{useState} from 'react'
import '../Navigation/Navbar.css'
import { Link } from 'react-router-dom'
import Cart from '../../Images/Cart.svg'
import menuIcon from '../../Images/menuIcon.png'
import closeIcon from '../../Images/close.png'
import Modal from 'react-modal';
export default function NavBar() {
  const [active,setActive] = useState(false)
  
  return (
    <div className='navbarN'>
    <div className='web'>
      <div className='headerContainerN'>
        <h1 className='headerN'>uniview</h1>   
        <img src={Cart} className="iconN"/>
      </div>
        <ul className='listContainerN'>
          <li className='listItems firstListItems'>
            <Link to='/' className='listItemsLink'>Home</Link>
          </li>
          <li className='listItems'>
            <Link to='/about' className='listItemsLink'>About Us</Link>
          </li>
          <li className='listItems'>
            <Link to="/products" className='listItemsLink'>Products</Link>
          </li>
          <li className='listItems'>
            <Link to="/blog" className='listItemsLink'>Blog</Link>
          </li>
          {/* <li className='listItems'>
            <Link to="/jobs" className='listItemsLink'>Jobs</Link>
          </li>
          <li className='listItems'>
            <Link to='/cms' className='listItemsLink'>CMS</Link>
          </li>
          <li className='listItems'>
            <Link to='/pids' className='listItemsLink'>PIDS</Link>
          </li> */}
          <li className='listItems'>
            <Link to="/support" className='listItemsLink'>Support</Link>
          </li>
        </ul>
    </div>



    {/* Mobile */}
    <div className='mobile'>
    
      <div className='headerContainerN'>
        <img src={menuIcon} className="navIcon inlineF" onClick={() => {window.scrollTo(0, 0);setActive(!active);}} />
        <h1 className='headerN inlineF'>uniview</h1>  
        <img src={Cart} className="iconN inlineF"/>
      </div>

      {active &&
        <ul className='listContainerN'>
          <li className='listItems firstListItems' onClick={() => {window.scrollTo(0, 0);setActive(!active);}}>
            <Link to='/' className='listItemsLink'>Home </Link>
          </li>
          <li className='listItems' onClick={() => {window.scrollTo(0, 0);setActive(!active);}}>
            <Link to='/about' className='listItemsLink'>About Us</Link>
          </li>
          <li className='listItems' onClick={() => {window.scrollTo(0, 0);setActive(!active);}}>
            <Link to="/products" className='listItemsLink'>Products</Link>
          </li>
          <li className='listItems' onClick={() => {window.scrollTo(0, 0);setActive(!active);}}>
            <Link to="/blog" className='listItemsLink'>Blog</Link>
          </li>
          <li className='listItems' onClick={() => {window.scrollTo(0, 0);setActive(!active);}}>
            <Link to="/support" className='listItemsLink'>Support</Link>
          </li>
          <div className='closeContainer' >
            <img src={closeIcon} className="close" onClick={() => {window.scrollTo(0, 0);setActive(!active);}}/>
          </div>
        </ul>
      }

    </div>
    </div>
  )
}
