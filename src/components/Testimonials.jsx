import React from "react";

import img1 from "../images/img30.jfif";

import "./common.css";

const Testimonials = () => {
  return (
    <>
      <section class="ftco-section2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
              <h2 class="mb-3">TESTIMONIALS</h2>
              <p class="pb-3">
                Writing Tasteful Creations. Get a glimpse into the latest
                catering trends ruling the world
              </p>
            </div>
          </div>
          <div class="row d-flex">
            <div class="col-md-6 d-flex ftco-animate fadeInUp ftco-animated">
              <div
                id="carousel-example-2"
                class="carousel no-flex testimonial-carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="false"
              >
                {/* <!--Slides--> */}
                <div class="carousel-inner" role="listbox">
                  {/* <!--First slide--> */}

                  <div class="carousel-item active">
                    <div class="testimonial">
                      <p>
                        <iframe
                          width="100%"
                          height="385"
                          src="https://www.youtube.com/embed/9q3NcH0DSEA"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                        ></iframe>
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item ">
                    <div class="testimonial">
                      <p>
                        <iframe
                          width="100%"
                          height="385"
                          src="https://www.youtube.com/embed/lZQUQTcY-lI"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                        ></iframe>
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  class="carousel-control-prev left carousel-control"
                  href="#carousel-example-1"
                  role="button"
                  data-slide="prev"
                >
                  <span class="icon-prev" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next right carousel-control"
                  href="#carousel-example-1"
                  role="button"
                  data-slide="next"
                >
                  <span class="icon-next" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                {/* <!--Controls--> */}
              </div>
            </div>

            <div
              class="col-md-4 d-flex ftco-animate fadeInUp ftco-animated"
              style={{ display: "none !important" }}
            >
              <div
                id="carousel-example-3"
                class="carousel no-flex testimonial-carousel slide carousel-fade"
                data-ride="carousel"
                data-interval="false"
              >
                {/* <!--Slides--> */}
                <div class="carousel-inner" role="listbox">
                  {/* <!--First slide--> */}
                  <div class="carousel-item active">
                    <div class="testimonial">
                      {/* <!--Avatar--> */}
                      <div class="avatar mx-auto mb-4">
                        <img src={img1} />
                      </div>
                      {/* <!--Content--> */}
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testimonial">
                      {/* <!--Avatar--> */}
                      <div class="avatar mx-auto mb-4">
                        <img src={img1} />
                      </div>
                      {/* <!--Content--> */}
                      <p>
                        Lor /em ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod
                      </p>
                      <h6 class="font-weight-bold my-3">
                        Photographer at Studio LA
                      </h6>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testimonial">
                      {/* <!--Avatar--> */}
                      <div class="avatar mx-auto mb-4">
                        <img src={img1} />
                      </div>
                      {/* <!--Content--> */}
                      <p>
                        Lor /em ipsum dolor sit amet, consectetur adipisicing
                        elit. Quod
                      </p>
                      <h6 class="font-weight-bold my-3">
                        Photographer at Studio LA
                      </h6>
                    </div>
                  </div>
                </div>

                <a
                  class="carousel-control-prev left carousel-control"
                  href="#carousel-example-3"
                  role="button"
                  data-slide="prev"
                >
                  <span class="icon-prev" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next right carousel-control"
                  href="#carousel-example-3"
                  role="button"
                  data-slide="next"
                >
                  <span class="icon-next" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                {/* <!--Controls--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
