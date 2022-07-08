import React from "react";

import img1 from "../images/img1.png";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";

import './common.css'

const PartnerVenu = () => {
  return (
    <>
      <section class="ftco-section ftco-services">
        <div class="overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
              <h2 class="mb-2">Partner Venues</h2>
              <p>
                The high end venues who have trusted us and are patenered for
                our finest services.
              </p>
            </div>
          </div>

          <div
            class="MultiCarousel"
            data-items="1,3,5,6"
            data-slide="1"
            id="MultiCarousel1"
            data-interval="1000"
          >
            <div
              class="MultiCarousel-inner"
              style={{ transform: "translateX(0px)", width: "1540px" }}
            >
              <div class="item" style={{ width: "220px" }}>
                <div class="hexa circ-img">
                  <div class="hex1">
                    <div class="hex2">
                      <img src={img1} alt="" />
                    </div>
                  </div>
                </div>
                <p class="hadding-name">Manaktala Farms</p>
              </div>
              <div class="item" style={{ width: "220px" }}>
                <div class="hexa circ-img">
                  <div class="hex1">
                    <div class="hex2">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                </div>
                <p class="hadding-name">Ambria Pushpanjali</p>
              </div>
              <div class="item" style={{ width: "220px" }}>
                <div class="hexa circ-img">
                  <div class="hex1">
                    <div class="hex2">
                      <img src={img3} alt="" />
                    </div>
                  </div>
                </div>
                <p class="hadding-name">CHHABRA FARMS</p>
              </div>
              <div class="item" style={{ width: "220px" }}>
                <div class="hexa circ-img">
                  <div class="hex1">
                    <div class="hex2">
                      <img src={img4} alt="" />
                    </div>
                  </div>
                </div>
                <p class="hadding-name">GOLDEN GREEN</p>
              </div>
              <div class="item" style={{ width: "220px" }}>
                <div class="hexa circ-img">
                  <div class="hex1">
                    <div class="hex2">
                      <img src={img5} alt="" />
                    </div>
                  </div>
                </div>
                <p class="hadding-name">GAURIYA HOTEL, BAHADURGARH</p>
              </div>
              <div class="item" style={{ width: "220px" }}>
                <div class="hexa circ-img">
                  <div class="hex1">
                    <div class="hex2">
                      <img src={img6} alt="" />
                    </div>
                  </div>
                </div>
                <p class="hadding-name">BALSON FARM</p>
              </div>
              <div class="item" style={{ width: "220px" }}>
                <div class="hexa circ-img">
                  <div class="hex1">
                    <div class="hex2">
                      <img src={img7} alt="" />
                    </div>
                  </div>
                </div>
                <p class="hadding-name">Nitesh Kunj</p>
              </div>
            </div>

            <button class="btn btn-primary leftLst over">&lt;</button>
            <button class="btn btn-primary rightLst">&gt;</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerVenu;
