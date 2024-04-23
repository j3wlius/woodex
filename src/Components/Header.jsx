import React, { useState, useEffect, useContext } from 'react';
import MenuContext from './MenuContext';

// ICONS
import { IoSearchOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';

function Header() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { toggleMenu } = useContext(MenuContext);

  return (
    <header className={`header ${isScroll ? 'active' : ''}`}>
      <div className="container">
        <div className="input-wrapper">
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="Search Anything..."
          />

          <IoSearchOutline className="icon" aria-hidden="true" />
        </div>

        <a href="#" className="logo">
          WOODEX
        </a>

        <div className="header-action">
          <button className="header-action-btn" aria-label="user">
            <IoPersonOutline className="icon" aria-hidden="true" />
          </button>

          <button className="header-action-btn" aria-label="favorite list">
            <IoMdHeartEmpty className="icon" aria-hidden="true" />
            <span className="btn-badge">0</span>
          </button>

          <button className="header-action-btn" aria-label="favorite list">
            <IoCartOutline className="icon" aria-hidden="true" />
            <span className="btn-badge">0</span>
          </button>

          <button
            className={`header-action-btn`}
            onClick={toggleMenu}
            aria-label="open menu"
          >
            <FiMenu className="icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
