import React from 'react'

export default function Header() {
  return (
    <>
        <div className="container">
            <div className="information-container">
                <h5>SUMMER 2020</h5>
                <h1>NEW COLLECTION</h1>
                <p>We know how large objects will act, but things on a small scale.</p>
                <button type='button'><h3>SHOP NOW</h3></button>
            </div>
            <div className="photo-background">
              <div className="small-ball">
              </div>
              <div className="big-ball">
                <img src="/images/techPic.png" alt="images" />
              </div>
            </div>
        </div>
    </>
  )
}