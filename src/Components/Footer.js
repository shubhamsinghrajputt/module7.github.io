import React, { useState } from 'react'

export default function Footer() {
    const [data, setData] = useState('')
    const fetchMail = (e) => {
        fetch('https://subscription-data-514ef-default-rtdb.asia-southeast1.firebasedatabase.app/subscription.json',
        {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                mail : data
            })
        })
        e.target.reset()
    }
  return (
    <>
        <footer className='footer-container'>
            <div className="footheader">
                <p>Acciojob</p>
                <div className="social">
                    <img src="/images/Facebook.png" alt="facebook" />
                    <img src="/images/Insta.png" alt="facebook" />
                    <img src="/images/Twitter.png" alt="facebook" />
                </div>
            </div>
            <hr /><hr /><hr />
            <div className="main-footer">
                <div className="main-options">
                    <div className="selected-area">
                        <h5 className='h5-class'>Company Info</h5>
                        <p><a href="#About">About Us</a></p>
                        <p><a href="#About">Carrier</a></p>
                        <p><a href="#About">We are Hiring</a></p>
                        <p><a href="#About">Blog</a></p>
                    </div>
                    <div className="selected-area">
                        <h5 className='h5-class'>Legal</h5>
                        <p><a href="#About">About Us</a></p>
                        <p><a href="#About">Carrier</a></p>
                        <p><a href="#About">We are Hiring</a></p>
                        <p><a href="#About">Blog</a></p>
                    </div>
                    <div className="selected-area">
                        <h5 className='h5-class'>Features</h5>
                        <p><a href="#About">Business Marketing</a></p>
                        <p><a href="#About">User Analytic</a></p>
                        <p><a href="#About">Live Chat</a></p>
                        <p><a href="#About">Unlimited Support</a></p>
                    </div>
                    <div className="selected-area">
                        <h5 className='h5-class'>Resources</h5>
                        <p><a href="#About">IOS & Android</a></p>
                        <p><a href="#About">Watch a Demo</a></p>
                        <p><a href="#About">Customers</a></p>
                        <p><a href="#About">API</a></p>
                    </div>
                </div>
                <div className="subscription">
                    <h5 className='h5-class'>Get In Touch</h5>
                    <div className="button-area" id='data'>
                        <form>
                        <input type="text" placeholder='Your Mail' onChange={(e)=>setData(e.target.value)}/>
                        <button type='reset' onClick={fetchMail} value={data}>Subscribe</button>
                        </form>
                    </div>
                    <p>Lorem impsum dolor amit</p>
                </div>
            </div>
            <div className="last-part">
                <p>Made With ❤️ at Acciojob</p>
            </div>
        </footer>
    </>
  )
}