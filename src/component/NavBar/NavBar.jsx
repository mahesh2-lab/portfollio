import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { SideBar } from "../SideBar/SideBar";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <SideBar />
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <lord-icon
              src="https://cdn.lordicon.com/vxnfmfuw.json"
              trigger="loop"
              delay="2000"
              style={{ width: 50, height: 50 }}
            ></lord-icon>
          </motion.span>
          <div className="social">
<<<<<<< HEAD
            <a href="https://wa.me/8975252853">
              <img src="whatsapp.png" alt="Whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/mahesh-chopade-05309a256/">
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/mahesh_0_8_8/">
=======
            <a href="https://wa.me/8975252853" target="_blank">
              <img src="whatsapp.png" alt="Whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/mahesh-chopade-05309a256/" target="_blank">
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/mahesh_0_8_8/" target="_blank">
>>>>>>> e07f48f09fd2ae8e1b8591356ba612d482c54e16
              <img src="instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
