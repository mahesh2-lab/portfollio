import React from 'react'
import './NavBar.scss'
import { motion } from 'framer-motion'
import { SideBar } from '../SideBar/SideBar'

const NavBar = () => {
    return (
        <>
            <div className='navbar'>
                    <SideBar/>
                <div className="wrapper">
                    <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Logo</motion.span>
                    <div className="social">
                        <a href="https://www.facebook.com/"><img src="" alt="" srcSet="facebook.png" /></a>
                        <a href="https://www.twitter.com/"><img src="" alt="" srcSet="twitter.png" /></a>
                        <a href="https://www.youtube.com/"><img src="" alt="" srcSet="github.png" /></a>
                        <a href="https://www.linkedin.com/"><img src="" alt="" srcSet="linkedin.png" /></a>
                        <a href='https://www.instagram.com/'><img src='' alt='' srcSet='instagram.png' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar