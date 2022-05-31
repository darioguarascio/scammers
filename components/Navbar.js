import { useState, useEffect } from "react";
import Link from 'next/link'

const Navbar = (props) => {

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    const newVisibility = !mobileMenuVisible
    setMobileMenuVisible(newVisibility);
    props.onChangeMobileMenuVisibility(newVisibility);
  };

  return (
    <div>
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between py-6">
          <Link
            href="/"
          >
            <a
              className="text-2xl font-bolder tracking-wide leading-none text-blue-600"
            >
            Truffatori.info
            </a>
          </Link>
        {/*
          <div className="ml-auto hidden md:block">
            <a
              className="mr-2 inline-block px-6 py-3 text-sm text-blue-600 hover:text-[blue-700] font-semibold leading-none border border-blue-600 rounded-md"
              href="#"
            >
              Log In
            </a>
            <a
              className="inline-block px-6 py-3 text-sm font-semibold leading-none bg-blue-600 text-white rounded-md"
              href="#"
            >
              Sign Up
            </a>
          </div>
        */}
          <div className="-mr-2 flex items-center md:hidden">
            <button type="button"
                    onClick={() => toggleMenuVisibility()}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                   stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
