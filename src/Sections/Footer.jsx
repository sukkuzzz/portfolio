// import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/sukkuzzz">
            <FaGithub color="cyan" size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/sukkuzzz/">
            <FaLinkedin color="cyan" size={30} />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Sukriti Sharma. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
