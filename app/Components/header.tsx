"use client";
import { useState } from "react";
import Link from "next/link";
import { UserIcon, CartIcon, SearchIcon } from "./icons";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white">
      {/* Top Header Section */}
      <div className="flex justify-between items-center px-4 lg:ml-8 lg:mr-8">
        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-custom-purple-dark mb-1"></div>
          <div className="w-6 h-0.5 bg-custom-purple-dark mb-1"></div>
          <div className="w-6 h-0.5 bg-custom-purple-dark"></div>
        </div>

        {/* Search Icon */}
        <div className="">
          <SearchIcon />
        </div>
        {/* Logo (Centered for Desktop and Mobile) */}
        <Link href="/"><h1 className="headline-two font-title text-custom-purple-dark mx-auto">Avion</h1></Link>

        {/* Right Icons (Cart & User) */}
        <div className="hidden lg:flex gap-4">
          <Link href="/Cart"><CartIcon /></Link>
          <Link href="/About"><UserIcon /></Link>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[5rem] left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link href="/AllProduct" className="headline-six text-custom-purple-dark">
                Plant Pots
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six text-custom-purple-dark">
                Ceramics
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six text-custom-purple-dark">
                Tables
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six text-custom-purple-dark">
                Chairs
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six text-custom-purple-dark">
                Crockery
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six text-custom-purple-dark">
                Tableware
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six text-custom-purple-dark">
                Cutlery
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center items-center h-[3rem] list-none">
        <div className="flex justify-between gap-8 headline-six text-custom-purple-dark" style={{ color: " /AllProduct4E4D93" }}>
          <Link href=" /AllProduct">Plant Pots</Link>
          <Link href=" /AllProduct">Ceramics</Link>
          <Link href=" /AllProduct">Tables</Link>
          <Link href=" /AllProduct">Chairs</Link>
          <Link href=" /AllProduct">Crockery</Link>
          <Link href=" /AllProduct">Tableware</Link>
          <Link href=" /AllProduct">Cutlery</Link>
        </div>
      </div>
    </div>
  );
}
