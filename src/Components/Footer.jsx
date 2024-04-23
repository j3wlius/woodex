import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { IoCallSharp } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoArrowForward } from "react-icons/io5";
import { FaXTwitter } from 'react-icons/fa6';
import { FaTumblr } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <a href="#" className="logo">
              Woodex
            </a>

            <ul>
              <li className="footer-list-item">
                <IoLocationSharp className="icon" aria-hidden="true" />

                <address className="address">
                  Woodex, Kampala, UGANDA {currentYear}
                </address>
              </li>

              <li className="footer-list-item">
                <IoCallSharp className="icon" aria-hidden="true" />

                <a href="tel:+256123456789" className="footer-link">
                  +(256)123 456 789
                </a>
              </li>

              <li>
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoFacebook className="icon" />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <FaXTwitter className="icon" />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <FaTumblr className="icon" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Help & Information</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Help & Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Returns & Refunds
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Online Stores
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">About Us</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                What We Do
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                FAQ Page
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Newsletter</p>

            <form action="" className="footer-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email address"
                required
                className="email-field"
              />

              <button type="submit" className="footer-form-btn">
              <IoArrowForward className='icon' aria-hidden="true" />
              </button>
            </form>

            <div className="wrapper">
              <a href="#" className="footer-link">
                Term & Condition
              </a>
              <a href="#" className="footer-link">
                Policy
              </a>
              <a href="#" className="footer-link">
                Map
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p class="copyright">
            &copy; {currentYear} All Rights Reserved by{' '}
            <a
              href="https://jewlius.me"
              target="_blank"
              className="copyright-link"
            >
              Jewlius XY
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;