import React from "react";

import logo from "../images/logo.png";

import "./common.css";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div class="container">
          <a class="navbar-brand" href="https://www.getyourmenu.in/">
            <img src={logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <a href="https://www.getyourmenu.in/" class="nav-link">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle"
                  onclick="window.location.href = 'https://www.getyourmenu.in/function'"
                  href="https://www.getyourmenu.in/function"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Function
                </a>
                <div
                  class="dropdown-menu cchange"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/wedding-caterers-delhi"
                  >
                    Wedding
                  </a>
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/cocktail-caterers-delhi"
                  >
                    Cocktail
                  </a>
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/birthday-caterers-delhi"
                  >
                    Birthday
                  </a>
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/social-event-caterers-delhi"
                  >
                    Social Event
                  </a>
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/corporate-caterers-delhi"
                  >
                    Corporate
                  </a>
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/ring-ceremony-caterers-delhi"
                  >
                    Ring Ceremony
                  </a>
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/mehndi-ceremony-caterers-delhi"
                  >
                    Mehndi Ceremony
                  </a>
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/wedding-reception-caterers-delhi"
                  >
                    Wedding Reception
                  </a>
                  <a
                    class="dropdown-item "
                    href="https://www.getyourmenu.in/function/sangeet-ceremony-caterers-delhi"
                  >
                    Sangeet Ceremony
                  </a>
                </div>
              </li>

              <li class="nav-item ">
                <a href="https://www.getyourmenu.in/portfolio" class="nav-link">
                  Portfolio
                </a>
              </li>
              <li class="nav-item active">
                <a
                  href="https://www.getyourmenu.in/clientelle"
                  class="nav-link"
                >
                  Clientele
                </a>
              </li>
              <li class="nav-item ">
                <a href="https://www.getyourmenu.in/blog" class="nav-link">
                  Blog
                </a>
              </li>
              <li class="nav-item ">
                <a href="https://www.getyourmenu.in/occasions" class="nav-link">
                  Occasion
                </a>
              </li>
              <li class="nav-item ">
                <a href="https://www.getyourmenu.in/cuisine" class="nav-link">
                  Cuisine
                </a>
              </li>
              {/* <!-- <li class="nav-item "><a href="https://www.getyourmenu.in/aboutus" class="nav-link">About Us</a></li>--> */}
              <li class="nav-item ">
                <a href="https://www.getyourmenu.in/contactus" class="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <a href="tel:+91-9319609444" class="call-btn1">
            {" "}
            <i class="icon icon-phone"></i> Call Now
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
