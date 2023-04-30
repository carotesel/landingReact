import React from 'react'
import Logo from "../assets/Logo.svg"
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt="" />
            </div>
            <div className='footer-icons'>
                <BsTwitter/>            
                <SiLinkedin/>
                <BsYoutube/>            
                <FaFacebookF/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>4893-9573</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
            </div>
        </div>
    </div>
  )
}

export default Footer