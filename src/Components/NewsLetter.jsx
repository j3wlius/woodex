import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

function NewsLetter() {
  return (
    <section className="section newsletter" aria-label='newsletter'>

      <div className="newsletter-card">

        <div className="card-content">

          <div className="card-content">
            <h2 className="h2 section-title">Our Newsletter</h2>

            <p className="section-text">
              Subscribe our newsletter and get a  50% off discount
            </p>
          </div>

          <form action="" class="card-form">
              <input type="email" name="email_address" placeholder="Your email address" required className="email-field" />

              <button type="submit" className="newsletter-btn" aria-label="subscribe">
              <IoArrowForward className="icon" aria-hidden="true" />
              </button>
            </form>

        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
