import React, { useContext } from 'react';

// ICONS
import { IoCloseOutline } from 'react-icons/io5';
import { ImFacebook } from 'react-icons/im';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTumblr } from 'react-icons/fa';
import MenuContext from './MenuContext';

function SideBar() {
  const { isMenuActive, toggleMenu } = useContext(MenuContext);
  return (
    <>
      <div className={`sidebar ${isMenuActive ? 'active' : ''}`}>
        <button className="nav-close-btn" onClick={toggleMenu}>
          <IoCloseOutline className="icon" />
        </button>

        <div className="wrapper">
          <ul className="sidebar-list">
            <li>
              <p className="sidebar-list-title">Language</p>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                English
              </a>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                French
              </a>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                Arabric
              </a>
            </li>
          </ul>

          <ul className="sidebar-list">
            <li>
              <p className="sidebar-list-title">Currency</p>
            </li>

            <li>
              <a href="#" className="sidebar-link"  onClick={toggleMenu}>
                USD - US Dollar
              </a>
            </li>

            <li>
              <a href="#" className="sidebar-link"  onClick={toggleMenu}>
                Euro
              </a>
            </li>

            <li>
              <a href="#" className="sidebar-link"  onClick={toggleMenu}>
                Pound
              </a>
            </li>
          </ul>
        </div>

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link"  onClick={toggleMenu}>
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link"  onClick={toggleMenu}>
                About
              </a>
            </li>

            <li className="navbar-item">
              <a href="#product" className="navbar-link"  onClick={toggleMenu}>
                Product
              </a>
            </li>

            <li className="navbar-item">
              <a href="#blog" className="navbar-link"  onClick={toggleMenu}>
                Blogs
              </a>
            </li>
          </ul>
        </nav>

        <ul className="contact-list">
          <li>
            <p className="contact-list-title">Contact Us</p>
          </li>

          <li className="contact-item">
            <address className="address">
              69 Halsey St, Ny 10002, New York, United States
            </address>
          </li>

          <li className="contact-item">
            <a href="mailto:support.center@woodex.co" className="contact-link">
              support.center@woodex.co
            </a>
          </li>

          <li className="contact-item">
            <a href="tel:00001235567890" className="contact-link">
              (+256) 1234 56789
            </a>
          </li>
        </ul>

        <div className="social-wrapper">
          <p className="social-list-title">Follow US On Socials</p>

          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ImFacebook className="icon" />
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <FaXTwitter className="icon" />
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <FaTumblr className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`overlay ${isMenuActive ? 'active' : ''}`}></div>
    </>
  );
}

export default SideBar;
