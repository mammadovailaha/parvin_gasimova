import type React from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../components/hook/useTheme";
import { RiMenu5Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import logoBlack from ".././assets/logo/parvixel logo black.png";
import logoWhite from ".././assets/logo/logo parvixel white.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const { dark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickContact = () => {
    navigate("/contact");
  };

  // Body overflow-ni idarə etmək üçün
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Component unmount olanda overflow-u sıfırla
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Link-ə click edəndə menu-nu bağla
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-full h-20 bg-white dark:bg-gray-900 px-4 py-2 fixed top-0 left-0 z-50 shadow-md">
        <div className="w-[95%] flex justify-between items-center h-full">
          <div className="w-35 h-15">
            <img
              src={dark ? logoWhite : logoBlack}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-[45%] lg:w-[40%] 2xl:w-[30%] items-center justify-center gap-5 px-6 py-3.5 rounded-[30px]">
            <ul className="w-full flex items-center justify-around">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative inline-block text-black dark:text-white font-medium text-sm lg:text-[17px] tracking-normal overflow-hidden group h-[24px]"
                  >
                    {/* Ön tərəf */}
                    <span className="block transition-all duration-500 group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    {/* Arxa tərəf */}
                    <span className="absolute left-0 top-full block transition-all duration-500 group-hover:top-0">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center items-center gap-2.5">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 outline-none border-none cursor-pointer"
            >
              {dark ? (
                <IoSunnyOutline className="text-xl dark:text-white text-gray-800" />
              ) : (
                <IoMoonOutline className="text-xl dark:text-white text-gray-800" />
              )}
            </button>
            <button
              onClick={handleClickContact}
              className="hidden md:block outline-none border-none bg-black dark:bg-gray-800 text-white dark:text-white rounded-[30px] w-[120px] h-[40px] md:px-4 md:py-2 text-xs md:text-base font-medium cursor-pointer"
            >
              let's talk
            </button>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="outline-none border-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-[30px] px-2 py-2 cursor-pointer relative z-[1001]"
              >
                {isOpen ? (
                  <IoMdClose size={28} className="text-black dark:text-white" />
                ) : (
                  <RiMenu5Fill className="text-xl text-gray-800 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`
        fixed inset-0 bg-white dark:bg-gray-900 z-[1000] 
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <div className="flex flex-col items-center justify-center h-full pt-20">
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={handleLinkClick}
                  className="relative inline-block text-black dark:text-white font-medium text-2xl tracking-normal overflow-hidden group h-[32px]"
                >
                  {/* Ön tərəf */}
                  <span className="block transition-all duration-500 group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  {/* Arxa tərəf */}
                  <span className="absolute left-0 top-full block transition-all duration-500 group-hover:top-0">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Contact Button */}
          <button
            onClick={() => {
              handleClickContact();
              setIsOpen(false);
            }}
            className="mt-12 outline-none border-none bg-black dark:bg-gray-800 text-white rounded-[30px] px-8 py-4 text-lg font-medium cursor-pointer"
          >
            let's talk
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;