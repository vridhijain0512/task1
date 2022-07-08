import React from "react";

import "./common.css";

const Footer = () => {
  return (
    <>
      <footer class="ftco-footer ftco-section img">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="ftco-footer-widget">
                <h2 class="ftco-heading-2">Company</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="https://www.getyourmenu.in/home">Home</a>
                  </li>
                  {/* <!-- <li><a href="https://www.getyourmenu.in/portfolio">Portfolio</a></li>
                    <li><a href="https://www.getyourmenu.in/clientelle">Clientelle</a></li>--> */}
                  <li>
                    <a href="https://www.getyourmenu.in/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="https://www.getyourmenu.in/contactus">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getyourmenu.in/occasions">Occasion</a>
                  </li>
                  <li>
                    <a href="https://www.getyourmenu.in/culture">Culture</a>
                  </li>
                  <li>
                    <a href="https://www.getyourmenu.in/cuisine">Cuisine</a>
                  </li>
                </ul>
                <div class="ftco-footer-social">
                  <ul class="pl-0">
                    <li class="ftco-animate fadeInUp ftco-animated">
                      <a
                        href="https://twitter.com/getyourvenue/"
                        target="_blank"
                      >
                        <span class="icon-twitter"></span>
                      </a>
                    </li>
                    <li class="ftco-animate fadeInUp ftco-animated">
                      <a
                        href="https://www.facebook.com/Get-Your-Menu-2219675101470908/"
                        target="_blank"
                      >
                        <span class="icon-facebook"></span>
                      </a>
                    </li>
                    <li class="ftco-animate fadeInUp ftco-animated">
                      <a
                        href="https://www.instagram.com/getyourmenu_/"
                        target="_blank"
                      >
                        <span class="icon-instagram"></span>
                      </a>
                    </li>
                    <li class="ftco-animate fadeInUp ftco-animated">
                      <a
                        href="https://www.youtube.com/channel/UCPjo5mDOFR_NryjKciLft9g"
                        target="_blank"
                      >
                        <span class="icon-youtube"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="ftco-footer-widget mb-5">
                <h2 class="ftco-heading-2">Get Inspired</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="https://www.getyourmenu.in/blog">Blog</a>
                  </li>
                  {/* <!--<li><a href="https://www.getyourmenu.in/#">Testimonials</a></li>--> */}
                  <li>
                    <a href="https://www.getyourmenu.in/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="https://www.getyourmenu.in/clientelle">
                      Clientelle
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="ftco-footer-widget mb-4 ml-md-4">
                <h2 class="ftco-heading-2">Function</h2>
                <ul class="list-unstyled footer-readmore">
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/wedding-caterers-delhi"
                      class="d-block"
                    >
                      Wedding Caterers Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/cocktail-caterers-delhi"
                      class="d-block"
                    >
                      Cocktail Caterers Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/birthday-caterers-delhi"
                      class="d-block"
                    >
                      Birthday Caterers Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/social-event-caterers-delhi"
                      class="d-block"
                    >
                      Social Event Caterers Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/corporate-caterers-delhi"
                      class="d-block"
                    >
                      Corporate Caterers Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/ring-ceremony-caterers-delhi"
                      class="d-block"
                    >
                      Ring Ceremony Caterers Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/mehndi-ceremony-caterers-delhi"
                      class="d-block"
                    >
                      Mehndi Ceremony Caterers Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/wedding-reception-caterers-delhi"
                      class="d-block"
                    >
                      Wedding Reception Caterers Delhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.getyourmenu.in/function/sangeet-ceremony-caterers-delhi"
                      class="d-block"
                    >
                      Sangeet Ceremony Caterers Delhi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have Questions?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    {/* <!--  <li><span class="icon icon-map-marker"></span><span class="text">Satvik by Chhabra, G-1, Dwarka Link Rd, near Ambria Pushpanjali, Bijwasan, New Delhi 110037, </span></li> --> */}

                    <li>
                      <span class="icon icon-map-marker"></span>
                      <span class="text">
                        {" "}
                        F-20, Dwarka Link Road <br /> Samalka New Delhi, Delhi,
                        110037
                      </span>{" "}
                    </li>

                    <li>
                      <a href="tel:+91-9319609444">
                        <span class="icon icon-phone"></span>
                        <span class="text">(91) 9319609444</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:sales@getyourmenu.in">
                        <span class="icon icon-envelope"></span>
                        <span class="text">sales@getyourmenu.in</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
