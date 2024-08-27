import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-sky-950 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4 text-white">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
            <FaFacebookF className="w-6 h-6 text-white"/>
            </a>
            <a>
            <FaLinkedinIn className="w-6 h-6 text-white"/>
            </a>
            <a>
            <RiTwitterXFill  className="w-6 h-6 text-white"/>
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
