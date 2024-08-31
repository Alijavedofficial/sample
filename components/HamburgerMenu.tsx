import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  return (
    <>
      {/* Header with logo and menu button */}
      <header className="flex justify-between items-center p-4 px-8 bg-white border-b border-gray-300">
        {/* Logo text */}
        <div className="text-xl font-semibold text-primary">Sample</div>

        {/* Menu button */}
        <button
          className="text-2xl text-primary"
          onClick={() => setIsMenuOpen(true)}
        >
          <Icon icon="mingcute:menu-line" />
        </button>
      </header>

      {/* Hamburger menu */}
      {isMenuOpen && (
        <nav
          className="fixed top-0 right-0 w-full h-full flex justify-center items-center bg-white z-50 navv"
          onClick={closeMenu}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-3xl cursor-pointer font-bold text-primary"
            onClick={closeMenu}
          >
            <Icon icon='mingcute:close-line' />
          </button>

          {/* Menu items */}
          <ul className="text-start text-primary space-y-6 text-xl font-medium">
            <li className="opacity-80 hover:opacity-100 transition-opacity">
              <a>Home</a>
            </li>
            <li className="relative">
              <button
                className="flex items-center opacity-80 hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSubMenu();
                }}
              >
                <span>About</span>
                <Icon
                  icon={isSubMenuOpen ? "uis:angle-up" : "uis:angle-down"}
                  className="ml-1 text-2xl "
                />
              </button>

              {/* Sub-menu */}
              {isSubMenuOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <li className="p-2 hover:bg-gray-100">
                    <a>Our Team</a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a>Our Mission</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="opacity-80 hover:opacity-100 transition-opacity">
              <a>Services</a>
            </li>
            <li className="opacity-80 hover:opacity-100 transition-opacity">
              <a>Contact</a>
            </li>
            <li className="opacity-80 hover:opacity-100 transition-opacity">
              <a>Blogs</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default HamburgerMenu;
