import React from 'react'

export default function MapGallery() {
  return (
    <div>
      {/* <!-- map gallery --> */}
    <div class="map-gallery-sec section-padding bg-light-theme smoothscroll" id="mapgallery">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="main-box">
                        <div class="row">
                            <div class="col-md-6 map-pr-0">
                                <iframe id="locmap" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                            </div>
                            <div class="col-md-6 map-pl-0">
                                <div class="gallery-box padding-10">
                                    <ul class="gallery-img">
                                        <li>
                                            <a class="image-popup" href="assets/img/gallery/img-1.jpg" title="Image title">
                                                <img src="assets/img/gallery/img-1.jpg" class="img-fluid full-width" alt="9.jpg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="image-popup" href="assets/img/gallery/img-2.jpg" title="Image title">
                                                <img src="assets/img/gallery/img-2.jpg" class="img-fluid full-width" alt="9.jpg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="image-popup" href="assets/img/gallery/img-3.jpg" title="Image title">
                                                <img src="assets/img/gallery/img-3.jpg" class="img-fluid full-width" alt="9.jpg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="image-popup" href="assets/img/gallery/img-4.jpg" title="Image title">
                                                <img src="assets/img/gallery/img-4.jpg" class="img-fluid full-width" alt="9.jpg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="image-popup" href="assets/img/gallery/img-5.jpg" title="Image title">
                                                <img src="assets/img/gallery/img-5.jpg" class="img-fluid full-width" alt="9.jpg" />
                                            </a>
                                        </li>
                                        <li>
                                            <a class="image-popup" href="assets/img/gallery/img-6.jpg" title="Image title">
                                                <img src="assets/img/gallery/img-6.jpg" class="img-fluid full-width" alt="9.jpg" />
                                            </a>
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
    {/* <!-- map gallery --> */}
    </div>
  )
}
