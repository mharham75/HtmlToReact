import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Link } from 'react-router-dom'

//importing images 
import companyLogo from "../img/logo.png"

export default function Header() {
  return (
    <div>
      <div className="header">
        <header className="full-width">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mainNavCol">
                        {/*!-- logo */}
                        <div className="logo mainNavCol">
                            <a href="index-2.html">
                                <img src={companyLogo} className="img-fluid" alt="Logo" />
                            </a>
                        </div>
                        {/*!-- logo */}
                        <div className="main-search mainNavCol">
                            <form className="main-search search-form full-width">
                                <div className="row">
                                    {/*<!-- location picker -->*/}
                                    <div className="col-lg-6 col-md-5">
                                        <a href="/" className="delivery-add p-relative"> 
                                            <span className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                            <span className="address">Brooklyn, NY</span>
                                        </a>
                                        <div className="location-picker">
                                            <input type="text" className="form-control" placeholder="Enter a new address" />
                                        </div>
                                    </div>
                                    {/*<!-- location picker -->*/}
                                    {/*<!-- search -->*/}
                                    <div className="col-lg-6 col-md-7">
                                        <div className="search-box padding-10">
                                            <input type="text" className="form-control" placeholder="Pizza, Burger, Chinese" />
                                        </div>
                                    </div>
                                    {/*<!-- search -->*/}
                                </div>
                            </form>
                        </div>
                        <div className="right-side fw-700 mainNavCol">
                            <div className="gem-points">
                                <a href="#"> <i className="fas fa-concierge-bell"></i>
                                    <span>Order Now</span>
                                </a>
                            </div>
                            <div className="catring parent-megamenu">
                                <a href="#"> <span>Pages <i className="fas fa-caret-down"></i></span>
                                    <i className="fas fa-bars"></i>
                                </a>
                                <div className="megamenu">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-5">
                                                    <div className="ex-collection-box h-100">
                                                        <a href="#">
                                                            <img src="assets/img/nav-1.jpg" className="img-fluid full-width h-100" alt="image" />
                                                        </a>
                                                        <div className="category-type overlay padding-15"> <a href="restaurant.html" className="category-btn">Top rated</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-7">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-sm-6">
                                                            <div className="menu-style">
                                                                <div className="menu-title">
                                                                    <h6 className="cat-name"><a href="#" className="text-light-black">Home Pages</a></h6>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="index-2.html" className="text-light-white fw-500">Landing Page</a>
                                                                    </li>
                                                                    <li><a href="homepage-1.html" className="text-light-white fw-500">Home Page 1</a>
                                                                    </li>
                                                                    <li><a href="homepage-2.html" className="text-light-white fw-500">Home Page 2</a>
                                                                    </li>
                                                                    <li><a href="homepage-3.html" className="text-light-white fw-500">Home Page 3</a>
                                                                    </li>
                                                                    <li><a href="homepage-4.html" className="text-light-white fw-500">Home Page 4</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-sm-6">
                                                            <div className="menu-style">
                                                                <div className="menu-title">
                                                                    <h6 className="cat-name"><a href="#" className="text-light-black">Inner Pages</a></h6>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="blog.html" className="text-light-white fw-500">Blog Grid View</a>
                                                                    </li>
                                                                    <li><a href="blog-style-2.html" className="text-light-white fw-500">Blog Grid View 2</a>
                                                                    </li>
                                                                    <li><a href="blog-details.html" className="text-light-white fw-500">Blog Details</a>
                                                                    </li>
                                                                    <li><a href="ex-deals.html" className="text-light-white fw-500">Ex Deals</a>
                                                                    </li>
                                                                    <li><a href="about.html" className="text-light-white fw-500">About Us</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-sm-6">
                                                            <div className="menu-style">
                                                                <div className="menu-title">
                                                                    <h6 className="cat-name"><a href="#" className="text-light-black">Related Pages</a></h6>
                                                                </div>
                                                                <ul>
                                                                    <li className="active"><a href="restaurant.html" className="text-light-white fw-500">Restaurant</a>
                                                                    </li>
                                                                    <li><a href="restaurant-style-1.html" className="text-light-white fw-500">Restaurant 1</a>
                                                                    </li>
                                                                    <li><a href="restaurant-style-2.html" className="text-light-white fw-500">Restaurant 2</a>
                                                                    </li>
                                                                    <li><a href="add-restaurant.html" className="text-light-white fw-500">Add Restaurant</a>
                                                                    </li>
                                                                    <li><a href="list-view.html" className="text-light-white fw-500">List View</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-sm-6">
                                                            <div className="menu-style">
                                                                <div className="menu-title">
                                                                    <h6 className="cat-name"><a href="#" className="text-light-black">Additional Pages</a></h6>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="login.html" className="text-light-white fw-500">Login</a>
                                                                    </li>
                                                                    <li><a href="register.html" className="text-light-white fw-500">Sign-up</a>
                                                                    </li>
                                                                    <li><a href="checkout.html" className="text-light-white fw-500">Checkout</a>
                                                                    </li>
                                                                    <li><a href="order-details.html" className="text-light-white fw-500">Order Details</a>
                                                                    </li>
                                                                    <li><a href="geo-locator.html" className="text-light-white fw-500">Geo Locator</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- mobile search -->*/}
                            <div className="mobile-search">
                                <a href="#" data-toggle="modal" data-target="#search-box"> <i className="fas fa-search"></i>
                                </a>
                            </div>
                            {/*<!-- mobile search -->*/}
                            {/*<!-- user account -->*/}
                            <div className="user-details p-relative">
                                <a href="#" className="text-light-white fw-500">
                                    {/*<img src="assets/img/user-1.png" className="rounded-circle" alt="userimg"> <span>Hi, Kate</span> */}
                                </a>
                                <div className="user-dropdown">
                                    <ul>
                                        <li>
                                            <a href="order-details.html">
                                                <div className="icon"><i className="flaticon-rewind"></i>
                                                </div> <span className="details">Past Orders</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="order-details.html">
                                                <div className="icon"><i className="flaticon-takeaway"></i>
                                                </div> <span className="details">Upcoming Orders</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon"><i className="flaticon-breadbox"></i>
                                                </div> <span className="details">Saved</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon"><i className="flaticon-gift"></i>
                                                </div> <span className="details">Gift cards</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon"><i className="flaticon-refer"></i>
                                                </div> <span className="details">Refer a friend</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon"><i className="flaticon-diamond"></i>
                                                </div> <span className="details">Perks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon"><i className="flaticon-user"></i>
                                                </div> <span className="details">Account</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon"><i className="flaticon-board-games-with-roles"></i>
                                                </div> <span className="details">Help</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="user-footer"> <span className="text-light-black">Not Jhon?</span> <a href="#">Sign Out</a>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- mobile search -->*/}
                            {/*<!-- user notification --> */}
                            <div className="cart-btn notification-btn">
                                <a href="#" className="text-light-green fw-700"> <i className="fas fa-bell"></i>
                                    <span className="user-alert-notification"></span>
                                </a>
                                <div className="notification-dropdown">
                                    <div className="product-detail">
                                        <a href="#">
                                            <div className="img-box">
                                                {/*<img src="assets/img/shop-1.png" className="rounded" alt="image">*/}
                                            </div>
                                            <div className="product-about">
                                                <p className="text-light-black">Lil Johnny’s</p>
                                                <p className="text-light-white">Spicy Maxican Grill</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="rating-box">
                                        <p className="text-light-black">How was your last order ?.</p> <span className="text-dark-white"><i className="fas fa-star"></i></span>
                                        <span className="text-dark-white"><i className="fas fa-star"></i></span>
                                        <span className="text-dark-white"><i className="fas fa-star"></i></span>
                                        <span className="text-dark-white"><i className="fas fa-star"></i></span>
                                        <span className="text-dark-white"><i className="fas fa-star"></i></span>
                                        <cite className="text-light-white">Ordered 2 days ago</cite>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- user notification -->*/}
                            {/*<!-- user cart -->*/}
                            <div className="cart-btn cart-dropdown">
                                <a href="#" className="text-light-green fw-700"> <i className="fas fa-shopping-bag"></i>
                                    <span className="user-alert-cart">3</span>
                                </a>
                                <div className="cart-detail-box">
                                    <div className="card">
                                        <div className="card-header padding-15">Your Order</div>
                                        <div className="card-body no-padding">
                                            <div className="cat-product-box">
                                                <div className="cat-product">
                                                    <div className="cat-name">
                                                        <a href="#">
                                                            <p className="text-light-green"><span className="text-dark-white">1</span> Chilli Chicken</p> <span className="text-light-white">small, chilli chicken</span>
                                                        </a>
                                                    </div>
                                                    <div className="delete-btn">
                                                        <a href="#" className="text-dark-white"> <i className="far fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                    <div className="price"> <a href="#" className="text-dark-white fw-500">
                              $2.25
                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cat-product-box">
                                                <div className="cat-product">
                                                    <div className="cat-name">
                                                        <a href="#">
                                                            <p className="text-light-green"><span className="text-dark-white">1</span> loaded cheese</p> <span className="text-light-white">small, chilli chicken</span>
                                                        </a>
                                                    </div>
                                                    <div className="delete-btn">
                                                        <a href="#" className="text-dark-white"> <i className="far fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                    <div className="price"> <a href="#" className="text-dark-white fw-500">
                              $2.25
                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cat-product-box">
                                                <div className="cat-product">
                                                    <div className="cat-name">
                                                        <a href="#">
                                                            <p className="text-light-green"><span className="text-dark-white">1</span> Tortia Chicken</p> <span className="text-light-white">small, chilli chicken</span>
                                                        </a>
                                                    </div>
                                                    <div className="delete-btn">
                                                        <a href="#" className="text-dark-white"> <i className="far fa-trash-alt"></i>
                                                        </a>
                                                    </div>
                                                    <div className="price"> <a href="#" className="text-dark-white fw-500">
                              $2.25
                            </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-total">
                                                <div className="total-price border-0"> <span className="text-dark-white fw-700">Items subtotal:</span>
                                                    <span className="text-dark-white fw-700">$9.99</span>
                                                </div>
                                                <div className="empty-bag padding-15"> <a href="#">Empty bag</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer padding-15"> <a href="checkout.html" className="btn-first green-btn text-custom-white full-width fw-500">Proceed to Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- user cart -->*/}
                        </div>
                    </div>
                    <div className="col-sm-12 mobile-search">
                        <div className="mobile-address">
                            <a href="#" className="delivery-add" data-toggle="modal" data-target="#address-box"> <span className="address">Brooklyn, NY</span>
                            </a>
                        </div>
                        <div className="sorting-addressbox"> <span className="full-address text-light-green">Brooklyn, NY 10041</span>
                            <div className="btns">
                                <div className="filter-btn">
                                    <button type="button"><i className="fas fa-sliders-h text-light-green fs-18"></i>
                  </button> <span className="text-light-green">Sort</span>
                                </div>
                                <div className="filter-btn">
                                    <button type="button"><i className="fas fa-filter text-light-green fs-18"></i>
                  </button> <span className="text-light-green">Filter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    </div>
  )
}
