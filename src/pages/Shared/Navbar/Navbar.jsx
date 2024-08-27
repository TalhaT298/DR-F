import React, { useEffect, useRef, useState } from 'react';
import { MdPhoneCallback } from "react-icons/md";
const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
        setDropDownState(false);
      }
    };
    document.addEventListener('mousedown', closeDropDown);
    return () => {
      document.removeEventListener('mousedown', closeDropDown);
    };
  }, []);

  return (
    <div>
      <nav className="flex items-center justify-between bg-sky-950 px-4 py-2 text-white">
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white ">
          <h2>Dr Fazal Karim</h2>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex-row items-center md:flex md:gap-6 ${isMobileMenuOpen ? 'flex' : 'hidden'} absolute md:static bg-[#393E46] md:bg-transparent top-14 left-0 w-full md:w-auto p-4 md:p-0 z-20`}>
          <li className="cursor-pointer rounded-full px-6 py-2 text-white hover:bg-sky-600">
            Home
          </li>
          <li className="cursor-pointer rounded-full px-6 py-2 text-white hover:bg-sky-600">
            Services
          </li>
          <li className="cursor-pointer rounded-full px-6 py-2 text-white hover:bg-sky-600">
            About
          </li>
          <li className="relative" ref={dropDownMenuRef}>
            <button onClick={() => setDropDownState(!dropDownState)} className="relative flex items-center gap-1 py-2 hover:underline">
              <span>Services</span>
              <svg className={`${dropDownState ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
            </button>
            {dropDownState && (
              <ul className="absolute top-10 z-10 space-y-2 rounded-lg bg-gray-700 p-2 text-gray-100">
                <li className="px-3 hover:underline">
                  <a href="#">Food</a>
                </li>
                <li className="px-3 hover:underline">
                  <a href="#">Transport</a>
                </li>
                <li className="px-3 hover:underline">
                  <a href="#">Management</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="hidden md:block">
          <li className="cursor-pointer flex gap-2 list-none rounded-full px-6 py-2 text-white hover:bg-sky-600">
          <MdPhoneCallback className='w-6 h-6'/>
            Contact
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
