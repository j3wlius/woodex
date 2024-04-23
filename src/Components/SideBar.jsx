import React from 'react';

// ICONS
import { IoCloseOutline } from 'react-icons/io5';
import { ImFacebook } from 'react-icons/im';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTumblr } from 'react-icons/fa';

function SideBar() {
  return (
    <div className={`sidebar`}>
      <button className="nav-close-btn">
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
            <a href="#" className="sidebar-link">
              USD - US Dollar
            </a>
          </li>

          <li>
            <a href="#" className="sidebar-link">
              Euro
            </a>
          </li>

          <li>
            <a href="#" className="sidebar-link">
              Pound
            </a>
          </li>
        </ul>
      </div>

      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-link>
              Home
            </a>
          </li>

          <li className="navbar-item">
            <a href="#about" className="navbar-link" data-nav-link>
              About
            </a>
          </li>

          <li className="navbar-item">
            <a href="#product" className="navbar-link" data-nav-link>
              Product
            </a>
          </li>

          <li className="navbar-item">
            <a href="#blog" className="navbar-link" data-nav-link>
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
  );
}

export default SideBar;
