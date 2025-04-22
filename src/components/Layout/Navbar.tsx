"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import LoginBtn from "@components/auth/LoginBtn";
import LogoutBtn from "@components/auth/LogoutBtn";
import { useAuth } from "@components/auth/SupabaseProvider";


const NavBar: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { session, isLoading } = useAuth();

  const navItems = ["Dashboard", "Trips", "Discover"];

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

  if (isLoading) {
    return; // This is to ensure the login and logout don't flicker
  }

  return (
    <nav
      className={`fixed w-full z-[500] transition-all duration-500 ease-in-out font-sans ${
        isSticky || mobileMenuOpen
          ? "bg-[#97a6df] bg-opacity-50 backdrop-blur-lg"
          : "bg-transparent backdrop-blur-0"
      } ${isSticky && !mobileMenuOpen ? "shadow-md" : ""}`}
    >
      <div className="flex justify-between items-center px-10 md:px-24 py-4 mx-auto">
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
          <ul className="flex justify-center items-center space-x-8 text-blue-50 font-medium mr-8 drop-shadow-sm">
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

          <div className="flex items-center">
            {session ? (
              <LogoutBtn />
            ) : (
              <LoginBtn />
            )}
          </div>
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
          <ul className="flex flex-col space-y-4 text-center text-xl font-sans text-blue-50 drop-shadow-sm">
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
            <LoginBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
