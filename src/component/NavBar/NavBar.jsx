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
            <a href="https://www.twitter.com/">
              <img src="twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src="linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
