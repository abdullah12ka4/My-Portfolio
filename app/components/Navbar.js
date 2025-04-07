"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentHash, setCurrentHash] = useState(""); // Track the current hash (e.g., #services)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Listen for hash changes in the URL
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Add event listener for hash change
    window.addEventListener("hashchange", onHashChange);

    // Set initial hash on page load (if there's no hash, set it to default home)
    setCurrentHash(window.location.hash || "#"); // Default to # (Home) when there's no hash

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    setCurrentHash("#"); // Manually set the current hash to `#` when Home is clicked
  };

  return (
    <nav className="border-b-2 flex items-center px-5 justify-between md:justify-between border-gray-600 h-[8vh] z-10 top-0 sticky backdrop-blur">
      {/* Logo */}
      <div className="logo">
        <Link
          href="/"
          className={`text-2xl cursor-pointer text-orange-500 font-bold ${currentHash === "#" ? "text-orange-500" : ""}`}
          onClick={handleHomeClick} // Update currentHash when logo is clicked
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
            onClick={handleHomeClick} // Update currentHash when Home link is clicked
          >
            Home
          </Link> 
           <Link
            href="#about"
            className={`font-bold hover:text-gray-400 ${currentHash === "#about" ? "text-orange-500" : ""}`}
          >
            About
          </Link>
          <Link
            href="#services"
            className={`font-bold hover:text-gray-400 ${currentHash === "#services" ? "text-orange-500" : ""}`}
          >
            Services
          </Link>
        
          <Link
            href="#contact"
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
              onClick={handleHomeClick} // Update currentHash when Home link is clicked in the mobile menu
            >
              Home
            </Link>
            <Link
              className={`block py-4 font-bold hover:text-gray-400 ${currentHash === "#services" ? "text-orange-500" : ""}`}
              href="#services"
            >
              Services
            </Link>
            <Link
              className={`block py-4 font-bold hover:text-gray-400 ${currentHash === "#about" ? "text-orange-500" : ""}`}
              href="#about"
            >
              About
            </Link>
            <Link
              className={`block py-4 font-bold hover:text-gray-400 ${currentHash === "#contact" ? "text-orange-500" : ""}`}
              href="#contact"
            >
              Contact Us
            </Link>
            <button className="bg-orange-600 px-3 py-1 rounded-md font-semibold">Download CV</button>
          </div>
        )}

        {/* Desktop/Tablet Download CV Button */}
        <Link
          href="/resume.pdf"
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
