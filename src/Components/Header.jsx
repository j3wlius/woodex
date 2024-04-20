import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdAccountBox } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';

function Header() {
  return (
    <header className="header" data-header>
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
            <MdAccountBox className="icon" aria-hidden="true" />
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
            className="header-action-btn"
            aria-label="open menu"
            data-nav-toggler
          >
            <FiMenu className="icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
