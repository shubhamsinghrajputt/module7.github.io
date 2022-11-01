import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className="left-section">
                <div className="name-bar">
                    <h3>AccioJob</h3>
                </div>
                <div className="menu-bar">
                    <ul className='ul'>
                        <li><a href="#Page" className='in-active'>Home</a> </li>
                        <li><a href="#Page" className="active">Shop</a> </li>
                        <li><a href="#Page" className='in-active'>About</a> </li>
                        <li><a href="#Page" className='in-active'>Blog</a> </li>
                        <li><a href="#Page" className='in-active'>Contact</a> </li>
                        <li><a href="#Page" className='in-active'>Pages</a> </li>
                    </ul>
                </div>
            </div>

            <div className="right-section">
                <div className="login-signin">
                    <span><img src="/images/Vector (1).jpg" alt="img" /></span>
                    <a href="#Login">Login / Register</a>
                </div>
                <div className="search-icon mt">
                    <span><img src="/images/Vector.jpg" alt="search" /></span>
                </div>
                <div className="cart-icon mt">
                    <span><img src="/images/cart.jpg" alt="cart" /></span>
                    <p>1</p>
                </div>
                <div className="heart-icon mt">
                    <span><img src="/images/heart.jpg" alt="heart" /></span>
                    <p>1</p>
                </div>
            </div>
        </nav>
    </>
  )
}