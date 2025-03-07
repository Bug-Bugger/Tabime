"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Dashboard", "Map", "Routes", "Discover"];

  const handleScroll = () => {
    setSticky(window.scrollY > 60);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ease-in-out font-sans ${
        isSticky || mobileMenuOpen
          ? "bg-[#c1c8e4] bg-opacity-50 backdrop-blur-lg"
          : "bg-transparent backdrop-blur-0"
      } ${isSticky && !mobileMenuOpen ? "shadow-md" : ""}`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src={logo}
            alt="Tabime Logo"
            className="w-10 h-10 hover:rotate-180 ease-in-out transition-all duration-500"
            priority={true}
          />
          <p className="text-2xl font-sans font-semibold ml-3 text-blue-50 drop-shadow-sm">
            Tabime
          </p>
        </Link>

        {/* desktop navbar */}
        <div className="hidden md:flex">
          <ul className="flex justify-center items-center space-x-8 text-blue-50 font-medium mr-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer transition-colors duration-300 hover:text-[#2563eb] group"
              >
                <a
                  href={`/${item.toLowerCase()}`}
                  className="group-hover:after:w-full after:content-[''] after:bg-[#2563eb] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </div>

        {/* mobile navbar */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`
        px-4 rounded-lg
        md:hidden overflow-hidden transition-all duration-300 ease-in-out 
        ${
          mobileMenuOpen
            ? "max-h-[300px] opacity-100 py-4 shadow-md"
            : "max-h-0 opacity-0 py-0 border-transparent"
        }
      `}
      >
        <div
          className={`transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-center font-sans text-blue-50 drop-shadow-md">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer transition-colors duration-300 hover:text-[#2563eb]"
              >
                <a
                  className="relative hover:after:w-full after:content-[''] after:bg-[#2563eb] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300"
                  href={`/${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
