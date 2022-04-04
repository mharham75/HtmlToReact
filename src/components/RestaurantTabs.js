import React from 'react'

export default function RestaurantTabs() {
  return (
    <div>
       
       {/* <!-- restaurent tab --> */}
    <div class="restaurent-tabs u-line">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="restaurent-menu scrollnav">
                        <ul class="nav nav-pills">
                            <li class="nav-item"> <a class="nav-link active text-light-white fw-700" data-toggle="pill" href="#menu">Menu</a>
                            </li>
                            <li class="nav-item"> <a class="nav-link text-light-white fw-700" data-toggle="pill" href="#about">About</a>
                            </li>
                            <li class="nav-item"> <a class="nav-link text-light-white fw-700" data-toggle="pill" href="#review">Reviews</a>
                            </li>
                            <li class="nav-item"> <a class="nav-link text-light-white fw-700" data-toggle="pill" href="#mapgallery">Map & Gallery</a>
                            </li>
                        </ul>
                        <div class="add-wishlist">
                            <img src="assets/img/svg/013-heart-1.svg" alt="tag" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- restaurent tab --> */}
    </div>
  )
}
