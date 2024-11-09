'use client'
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../assets/logo.png'

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About us', href: '/' },
  { name: 'Services', href: '/about' },
  { name: 'Use Cases', href: '/contact' },
  { name: 'Pricing', href: '/services' },
  { name: 'Blog', href: '/faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center md:px-20 md:pt-8 md:pb-1 px-12 pt-8 pb-1 text-white">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={150} />
        
      
      </div>

      <div className="hidden md:flex items-center">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-sm text-black md:text-sm font-regular hover:text-gray-900 mx-6"
          >
            {item.name}
          </a>
        ))}
        <button className=" ml-7 text-black font-medium py-3 px-4 rounded-[16px] border border-black">
          Request a quote
        </button>

      </div>
      <button
        className="md:hidden flex justify-center w-8 h-8  rounded"
        onClick={toggleMenu}
      >
        <svg
          className="w-4 h-4 mt-2 b font-bold text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-200 items-center w-full absolute top-16 left-0 py-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium  text-black hover:text-gray-200 py-2"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-[#B9FF66]  hover:bg-orange-700 text-black font-bold py-2 px-4 rounded">
            Request a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;