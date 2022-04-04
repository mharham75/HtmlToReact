import React from 'react'

export default function RestaurantAbout() {
  return (
    <div>
      {/* <!-- restaurent about --> */}
    <section class="section-padding restaurent-about smoothscroll" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="text-light-black fw-700 title">Great Burger Menu Info</h3>
                    <p class="text-light-green no-margin">American, Breakfast, Coffee and Tea, Fast Food, Hamburgers</p>
                    <p class="text-light-white no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> <span class="text-success fs-16">$</span>
                    <span class="text-success fs-16">$</span>
                    <span class="text-success fs-16">$</span>
                    <span class="text-dark-white fs-16">$</span>
                    <span class="text-dark-white fs-16">$</span>
                    <ul class="about-restaurent">
                        <li> <i class="fas fa-map-marker-alt"></i>
                            <span>
                <a href="#" class="text-light-white">
                  314 79th St<br />
                  Rite Aid, Brooklyn, NY, 11209
                </a>
              </span>
                        </li>
                        <li> <i class="fas fa-phone-alt"></i>
                            <span><a href="tel:" class="text-light-white">(347) 123456789</a></span>
                        </li>
                        <li> <i class="far fa-envelope"></i>
                            <span><a href="mailto:" class="text-light-white">demo@domain.com</a></span>
                        </li>
                    </ul>
                    <ul class="social-media pt-2">
                        <li> <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li> <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li> <a href="#"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li> <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        </li>
                        <li> <a href="#"><i class="fab fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="restaurent-schdule">
                        <div class="card">
                            <div class="card-header text-light-white fw-700 fs-16">Hours</div>
                            <div class="card-body">
                                <div class="schedule-box">
                                    <div class="day text-light-black">Monday</div>
                                    <div class="time text-light-black">Delivery: 7:00am - 10:59pm</div>
                                </div>
                                <div class="collapse" id="schdule">
                                    <div class="schedule-box">
                                        <div class="day text-light-black">Tuesday</div>
                                        <div class="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                    </div>
                                    <div class="schedule-box">
                                        <div class="day text-light-black">Wednesday</div>
                                        <div class="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                    </div>
                                    <div class="schedule-box">
                                        <div class="day text-light-black">Thursday</div>
                                        <div class="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                    </div>
                                    <div class="schedule-box">
                                        <div class="day text-light-black">Friday</div>
                                        <div class="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                    </div>
									    <div class="schedule-box">
                                        <div class="day text-light-black">Saturday</div>
                                        <div class="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                    </div>
                                        <div class="schedule-box">
                                        <div class="day text-light-black">Sunday</div>
                                        <div class="time text-light-black">Delivery: 7:00am - 10:00pm</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer"> <a class="fw-500 collapsed" data-toggle="collapse" href="#schdule">See the full schedule</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- restaurent about --> */}
    </div>
  )
}
