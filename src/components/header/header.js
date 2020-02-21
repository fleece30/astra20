import React, { useState } from 'react';
import './header.css';
import Scrollspy from 'react-scrollspy';

const Header = () => {
    const [isChecked, changeCheck] = useState(false);
    return(
        <header id="nav-wrapper" className={isChecked ? "incHeight" : ""}>
            <nav id="nav">
                <div className="nav left">
                    <span className="gradient skew" style={{height: "3em", margin: "0"}}><h1 className="logo un-skew"><a href="#home" style={{bottom: "1em"}}><img style={{width: "5vw", height: "auto", transform: "translateY(-50%)"}} src="http://sedsindia.org/astra19/images/astranegativelogoFINAL.png" alt=""></img></a></h1></span>
                    <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
                </div>
                <div className="nav right desk">
                    <Scrollspy items={ ['home', 'aboutseds', 'tracks', 'highlights', 'faqs', 'contactus'] } currentClassName="active" style={{listStyleType: "none", margin: "0", display: "inline-flex"}} offset={-5}>
                        <a href="#home" className="nav-link"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
                        <a href="#aboutseds" className="nav-link"><span className="nav-link-span"><span className="u-nav">About</span></span></a>
                        <a href="#tracks" className="nav-link"><span className="nav-link-span"><span className="u-nav">Tracks</span></span></a>
                        <a href="#highlights" className="nav-link"><span className="nav-link-span"><span className="u-nav">highlights</span></span></a>
                        <a href="#faqs" className="nav-link"><span className="nav-link-span"><span className="u-nav">FAQs</span></span></a>
                        <a href="#contactus" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact Us</span></span></a>
                        <a href="https://astra2020.hackerearth.com/" rel="noopener noreferrer" className="nav-link" target="_blank"><span className="nav-link-span"><span className="u-nav">Register</span></span></a>
                    </Scrollspy>
                </div>
                <section className="top-nav">
                    <input id="menu-toggle" type="checkbox" checked={isChecked} onClick={() => changeCheck(!isChecked)} onChange={()=>{}}/>
                    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div className='menu-button'></div>
                    </label>
                    <ol className="menu">
                        <li onClick={() => changeCheck(!isChecked)}><a href="#home">Home</a></li>
                        <li onClick={() => changeCheck(!isChecked)}><a href="#aboutseds">About</a></li>
                        <li onClick={() => changeCheck(!isChecked)}><a href="#tracks">Tracks</a></li>
                        <li onClick={() => changeCheck(!isChecked)}><a href="#highlights">Highlights</a></li>
                        <li onClick={() => changeCheck(!isChecked)}><a href="#faqs">FAQs</a></li>
                        <li onClick={() => changeCheck(!isChecked)}><a href="#contactus">Contact Us</a></li>
                    </ol>
                </section>
            </nav>
        </header>
    )
}

export default Header;