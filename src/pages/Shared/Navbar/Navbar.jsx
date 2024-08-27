import React, { useEffect, useRef, useState } from 'react';

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
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2>Logo</h2>
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
            <svg
              className="w-4"
              viewBox="0 0 15 15"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>call [#ffffff]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-103.000000, -7321.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596"
                        id="call-[#ffffff]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Contact
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
