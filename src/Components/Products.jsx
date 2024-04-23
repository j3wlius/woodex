import React, { useRef } from 'react';

// ICONS
import { IoAddOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';

// IMAGES
import productOne from '../images/product-1.jpg';
import productTwo from '../images/product-2.jpg';
import productThree from '../images/product-3.jpg';
import productFour from '../images/product-4.jpg';
import productFive from '../images/product-5.jpg';
import productSix from '../images/product-6.jpg';
import productSeven from '../images/product-7.jpg';
import productEight from '../images/product-8.jpg';
import productNine from '../images/product-9.jpg';
import productTen from '../images/product-10.jpg';
import productEleven from '../images/product-11.jpg';
import productTwelve from '../images/product-12.jpg';
import productThirteen from '../images/product-13.jpg';
import productForteen from '../images/product-14.jpg';
import productFifteen from '../images/product-15.jpg';
import productSixteen from '../images/product-16.jpg';
import productSeventeen from '../images/product-17.jpg';
import productEighteen from '../images/product-18.jpg';
import productNineteen from '../images/product-19.jpg';

function Products() {
  const filterBoxRef = useRef(null); // Ref to access the filterBox element
  const gridDisplayRef = useRef(null);

  const filter = (event) => {
    const clickedButton = event.currentTarget;

    // Find the previous active button (if any)
    const prevActiveButton = document.querySelector('.filter-btn.active');

    if (prevActiveButton) {
      prevActiveButton.classList.remove('active');
    }

    clickedButton.classList.add('active');

    if (filterBoxRef.current) {
      gridDisplayRef.current.setAttribute(
        'data-filter',
        clickedButton.dataset.filterBtn
      );
    }
  };

  return (
    <section className="sectiion product" id="product" aria-label="product">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Popular Products</h2>

          <ul ref={filterBoxRef} className="filter-btn-list">
            <li className="filter-btn-item">
              <button
                className="filter-btn active"
                onClick={filter}
                data-filter-btn="all"
              >
                All Products
              </button>
            </li>

            <li className="filter-btn-item">
              <button
                className="filter-btn"
                data-filter-btn="accessory"
                onClick={filter}
              >
                Accessory
              </button>
            </li>

            <li className="filter-btn-item">
              <button
                className="filter-btn"
                onClick={filter}
                data-filter-btn="decoration"
              >
                Decoration
              </button>
            </li>

            <li className="filter-btn-item">
              <button
                className="filter-btn"
                onClick={filter}
                data-filter-btn="furniture"
              >
                Furniture
              </button>
            </li>
          </ul>
        </div>

        <ul
          className="grid-list product-list"
          ref={gridDisplayRef}
          data-filter="all"
        >
          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productOne}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Animi Dolor Pariatur"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>

                <ul className="badge-list">
                  <li>
                    <div className="badge orange">Sale</div>
                  </li>

                  <li>
                    <div className="badge cyan">-10%</div>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Animi Dolor Pariatur
                  </a>
                </h3>

                <div className="card-price">
                  <del className="del">$19.00</del>

                  <data className="price" value="10">
                    $10.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productTwo}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Art Deco Home"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>

                <div className="card-badge">Out of Stock</div>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Art Deco Home
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="30">
                    $30.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productThree}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Artificial potted plant"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Artificial potted plant
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="40">
                    $40.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productFour}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Dark Green Jug"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dark Green Jug
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="17.10">
                    $17.10
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productFive}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Drinking Glasses"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Drinking Glasses
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="21">
                    $21.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productSix}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Helen Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Helen Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="69.50">
                    $69.50
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productSeven}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="High Quality Glass Bottle"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    High Quality Glass Bottle
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="30.10">
                    $30.10
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productEight}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Living Room & Bedroom Lights"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Living Room & Bedroom Lights
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="45">
                    $45.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productNine}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Nancy Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Nancy Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="90">
                    $90.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productTen}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Simple Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Simple Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="40">
                    $40.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productEleven}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Smooth Disk"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Smooth Disk
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="46">
                    $46.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productTwelve}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Table Black"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Table Black
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="67">
                    $67.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productThirteen}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Table Wood Pine"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Table Wood Pine
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="50">
                    $50.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productForteen}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Teapot with black tea"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Teapot with black tea
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="25">
                    $25.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productFifteen}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Unique Decoration"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Unique Decoration
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="15">
                    $15.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productSixteen}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Vase Of Flowers"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Vase Of Flowers
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="77">
                    $77.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productSeventeen}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wood Eggs"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Wood Eggs
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="19">
                    $19.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productEighteen}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wooden Box"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Wooden Box
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="27">
                    $27.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ '--width': 300, '--height': 300 }}
              >
                <img
                  src={productNineteen}
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wooden Cups"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoAddOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <IoBagHandleOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <IoHeartOutline className="icon" aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Wooden Cups
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="29">
                    $29.00
                  </data>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Products;
