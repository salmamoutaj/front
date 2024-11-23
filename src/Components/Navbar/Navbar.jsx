import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png'


const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() =>{setMenu("shop")}}><Link style={{ textDecoration:'none', color:'black'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>} </li>
                <li onClick={() =>{setMenu("colliers")}}><Link style={{ textDecoration:'none' , color:'black'}}  to='/colliers'>Colliers</Link>{menu==="colliers"?<hr />:<></>}</li>
                <li onClick={() =>{setMenu("bagues")}}><Link style={{ textDecoration:'none' , color:'black'}} to='/bagues'>Bagues</Link>{menu==="bagues"?<hr />:<></>}</li>
                <li onClick={() =>{setMenu("bracelets")}}><Link style={{ textDecoration:'none' , color:'black'}} to='/bracelets'>Bracelets</Link>{menu==="bracelets"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
        )
}

export default Navbar