import React from 'react'

export default function MainSection() {
  return (
    <div>
            <div class="main-sec"></div>
        {/* <!-- Navigation --> */}
        {/* <!-- restaurent top --> */}
        <div class="page-banner p-relative smoothscroll" id="menu">
            <img src="assets/img/banner.jpg" class="img-fluid full-width" alt="banner" />
            <div class="overlay-2">
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div class="back-btn">
                                <button type="button" class="text-light-green"> <i class="fas fa-chevron-left"></i>
                </button>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="tag-share"> <span class="text-light-green share-tag">
                    <i class="fas fa-chevron-right"></i>
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- restaurent top --> */}
        {/* <!-- restaurent details --> */}
        <section class="restaurent-details  u-line">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="heading padding-tb-10">
                            <h3 class="text-light-black title fw-700 no-margin">Great Burger</h3>
                            <p class="text-light-black sub-title no-margin">4508 Fort Hamilton Pkwy <span><a href="checkout.html" class="text-success">Change locations</a></span>
                            </p>
                            <div class="head-rating">
                                <div class="rating"> <span class="fs-16 text-yellow">
                                <i class="fas fa-star"></i>
                                </span>
                                                <span class="fs-16 text-yellow">
                                <i class="fas fa-star"></i>
                                </span>
                                                <span class="fs-16 text-yellow">
                                <i class="fas fa-star"></i>
                                </span>
                                                <span class="fs-16 text-yellow">
                                <i class="fas fa-star"></i>
                                </span>
                                                <span class="fs-16 text-dark-white">
                                <i class="fas fa-star"></i>
                                </span>
                                    <span class="text-light-black fs-12 rate-data">58 rating</span>
                                </div>
                                <div class="product-review">
                                    <div class="restaurent-details-mob">
                                        <a href="#"> <span class="text-light-black"><i class="fas fa-info-circle"></i></span>
                                            <span class="text-dark-white">info</span>
                                        </a>
                                    </div>
                                    <div class="restaurent-details-mob">
                                        <a href="#"> <span class="text-light-black"><i class="fas fa-info-circle"></i></span>
                                            <span class="text-dark-white">info</span>
                                        </a>
                                    </div>
                                    <div class="restaurent-details-mob">
                                        <a href="#"> <span class="text-light-black"><i class="fas fa-info-circle"></i></span>
                                            <span class="text-dark-white">info</span>
                                        </a>
                                    </div>
                                    <div class="restaurent-details-mob">
                                        <a href="#"> <span class="text-light-black"><i class="fas fa-info-circle"></i></span>
                                            <span class="text-dark-white">info</span>
                                        </a>
                                    </div>
                                    <h6 class="text-light-black no-margin">91<span class="fs-14">% Food was good</span></h6>
                                    <h6 class="text-light-black no-margin">91<span class="fs-14">% Food was good</span></h6>
                                    <h6 class="text-light-black no-margin">91<span class="fs-14">% Food was good</span></h6>
                                </div>
                            </div>
                        </div>
                        <div class="restaurent-logo">
                            <img src="assets/img/logo-4.jpg" class="img-fluid" alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- restaurent details --> */}
    </div>
  )
}
