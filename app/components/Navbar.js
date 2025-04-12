"use client";
import { useState} from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setcurrentHash] = useState("#")

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleHomeClick = (hash)=>{
    setcurrentHash(hash)
    setIsOpen(false)
  }
  return (
    <nav className="border-b-2 flex items-center px-5 justify-between md:justify-between border-gray-600 h-[8vh] z-10 top-0 sticky backdrop-blur">
      {/* Logo */}
      <div className="logo">
        <Link
          href="/"
          className={`text-2xl cursor-pointer text-orange-500 font-bold ${currentHash === "#" ? "text-orange-500" : ""}`}
          onClick={()=>{handleHomeClick("#")}} // Update currentHash when logo is clicked
        >
          Abdullah-Portfolio
        </Link>
      </div>

      {/* Navigation Links (Desktop & Tablet) */}
      <div className="flex md:gap-5 lg:gap-10">
        <div className="navigation hidden md:flex gap-5 lg:gap-14 items-center">
          <Link
            href="/"
            className={`font-bold hover:text-gray-400 ${currentHash === "#" ? "text-orange-500" : ""}`}
            onClick={()=>{handleHomeClick("#")}} // Update currentHash when Home link is clicked
          >
            Home
          </Link> 
           <Link
            href="#about"
            onClick={()=>{handleHomeClick("#about")}}
            className={`font-bold hover:text-gray-400 ${currentHash === "#about" ? "text-orange-500" : ""}`}
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={()=>{handleHomeClick("#services")}}
            className={`font-bold hover:text-gray-400 ${currentHash === "#services" ? "text-orange-500" : ""}`}
          >
            Services
          </Link>
        
          <Link
            href="#contact"
            onClick={()=>{handleHomeClick("#contact")}}
            className={`font-bold hover:text-gray-400 ${currentHash === "#contact" ? "text-orange-500" : ""}`}
          >
            Contact Us
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu (Visible when isOpen is true) */}
        {isOpen && (
          <div className="md:hidden absolute top-[8vh] left-0 w-full bg-gray-800 text-white text-center py-4">
            <Link
              className={`block py-4 font-bold hover:text-gray-400 ${currentHash === "#" ? "text-orange-500" : ""}`}
              href="/"
              onClick={()=>{handleHomeClick("#")}} // Update currentHash when Home link is clicked in the mobile menu
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={()=>{handleHomeClick("#services")}}
              className={`block py-4 font-bold hover:text-gray-400 ${currentHash === "#services" ? "text-orange-500" : ""}`}
              
            >
              Services
            </Link>
            <Link
              href="#about"
              onClick={()=>{handleHomeClick("#about")}}
              className={`block py-4 font-bold hover:text-gray-400 ${currentHash === "#about" ? "text-orange-500" : ""}`}
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={()=>{handleHomeClick("#contact")}}
              className={`block py-4 font-bold hover:text-gray-400 ${currentHash === "#contact" ? "text-orange-500" : ""}`}
            >
              Contact Us
            </Link>
            <button className="bg-orange-600 px-3 py-1 rounded-md font-semibold">
            <Link
          href="/AbdullahResume.pdf"
          download
          target="_blank"
          
        >
          Download CV
        </Link>              
            </button>
          </div>
        )}

        {/* Desktop/Tablet Download CV Button */}
        <Link
          href="/AbdullahResume.pdf"
          download
          target="_blank"
          className="bg-orange-600 px-3 py-1 rounded-md font-semibold hidden md:flex hover:bg-orange-700"
        >
          Download CV
        </Link>
      </div>
    </nav>
  );
}
