import React from 'react';
import './header.css';
import Scrollspy from 'react-scrollspy';

const Header = () => {
    return(
        <header id="nav-wrapper">
            <nav id="nav">
                <div className="nav left">
                    <span className="gradient skew" style={{height: "3em"}}><h1 className="logo un-skew"><a href="#home"><img style={{width: "5vw", height: "auto", transform: "translateY(-50%)"}} src="http://sedsindia.org/astra19/images/astranegativelogoFINAL.png" alt=""></img></a></h1></span>
                    <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
                </div>
                <div className="nav right">
                    <Scrollspy items={ ['home', 'aboutseds', 'tracks', 'highlights', 'faqs', 'contactus'] } currentClassName=" active" style={{listStyleType: "none", margin: "0", display: "inline-flex"}}>
                        <a href="#home" className="nav-link"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
                        <a href="#aboutseds" className="nav-link"><span className="nav-link-span"><span className="u-nav">About</span></span></a>
                        <a href="#tracks" className="nav-link"><span className="nav-link-span"><span className="u-nav">Tracks</span></span></a>
                        <a href="#highlights" className="nav-link"><span className="nav-link-span"><span className="u-nav">highlights</span></span></a>
                        <a href="#faqs" className="nav-link"><span className="nav-link-span"><span className="u-nav">FAQs</span></span></a>
                        <a href="#contactus" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact Us</span></span></a>
                        <a href="https://astra2020.hackerearth.com/" className="nav-link"><span className="nav-link-span"><span className="u-nav">Register</span></span></a>
                    </Scrollspy>
                </div>
            </nav>
        </header>
    )
}

export default Header;