import React from "react";

import "./common.css";

const ContactUs = () => {
  return (
    <>
      <section class="ftco-appointment">
        <div class="overlay"></div>
        <div class="container-wrap">
          <div class="row no-gutters d-md-flex align-items-center">
            <div class="col-md-5 d-flex align-self-stretch">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.262610777032!2d77.0898238!3d28.5377463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x669a9b835b0a9403!2sGet%20Your%20Menu%20-%20Best%20Wedding%20Caterers%20in%20Delhi!5e0!3m2!1sen!2sin!4v1573883988725!5m2!1sen!2sin"
                width="100%"
                height="450"
                frameborder="0"
                id="mp2"
                style={{ border: "0" }}
                allowfullscreen=""
              ></iframe>
            </div>
            <div class="col-md-7 appointment ftco-animate fadeInUp ftco-animated">
              <h3 class="mb-3">Contact Us</h3>
              <form
                action="https://www.getyourmenu.in/contactus/newsaveEnquirypop"
                method="post"
                class="j-pro contact-form"
                name="commoncontact"
                id="commoncontact"
                novalidate=""
              >
                <input
                  type="text"
                  name="url"
                  value="security"
                  style={{ display: "none" }}
                />
                <input
                  type="text"
                  name="type"
                  value="footer"
                  style={{ display: "none" }}
                />
                <div class="j-content">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="d-me-flex">
                        <div class="form-group j-input">
                          <input
                            name="name"
                            id="form_name"
                            type="text"
                            class="form-control"
                            placeholder="Name *"
                            maxlength="30"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div class="d-me-flex">
                        <div class="form-group j-input">
                          <input
                            name="email"
                            type="email"
                            class="form-control"
                            placeholder="Email *"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="d-me-flex">
                        <div class="form-group j-input">
                          <input
                            name="phone"
                            id="form_mobile"
                            type="text"
                            class="form-control"
                            placeholder="Mobile Number "
                            pattern="\d"
                            required=""
                            maxlength="10"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="d-me-flex">
                        <div class="form-group j-input">
                          <input
                            name="function_date"
                            id="datepickercontact"
                            class="form-control datepicker"
                            placeholder="Date *"
                            required=""
                          />
                          <div style={{}} class="validerror"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="d-me-flex">
                        <div class="form-group j-input j-select">
                          <select
                            name="function_name"
                            class="form-control custom-select custom-select-sm"
                            required=""
                          >
                            <option value="" selected="">
                              Function *
                            </option>
                            <option value="Wedding">Wedding</option>
                            <option value="Cocktail">Cocktail</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Social Event">Social Event</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Ring Ceremony">Ring Ceremony</option>
                            <option value="Mehndi Ceremony">
                              Mehndi Ceremony
                            </option>
                            <option value="Wedding Reception">
                              Wedding Reception
                            </option>
                            <option value="Sangeet Ceremony">
                              Sangeet Ceremony
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="d-me-flex">
                        <div class="form-group j-input j-select">
                          <select
                            name="budget"
                            class="form-control custom-select custom-select-sm"
                            required=""
                          >
                            <option value="" disabled="" selected="">
                              Budget *
                            </option>
                            <option value="1000 - 1200">1000pp - 1200pp</option>
                            <option value="1200 - 1500">1200pp - 1500pp</option>
                            <option value="1500 - 2000">1500pp - 2000pp</option>
                            <option value="2000 - Above">2000pp - Above</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="d-me-flex">
                        <div class="form-group j-input j-select">
                          <select
                            class="form-control custom-select custom-select-sm"
                            name="capacity"
                            id="exampleFormControlSelect1"
                          >
                            <option>Capacity</option>
                            <option value="100">100-300</option>
                            <option value="300">300-500</option>
                            <option value="500">500-800</option>
                            <option value="800">800 &amp; above</option>
                          </select>
                          {/* <!--<input name="capacity"  type="text" class="form-control" placeholder="Capacity " required pattern="\d" maxlength="10" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');" >--> */}
                        </div>
                      </div>
                    </div>

                    {/* <!--<div class="col-lg-4">    
				<div class="d-me-flex">
				 <div class="form-group j-input j-select">
				<select name="menu_name"  class="form-control custom-select custom-select-sm"  required >
					<option value="" disabled selected >Menu *</option>
										<option value="Wedding">Wedding</option>
					<option value="Cocktail">Cocktail</option>
					<option value="Birthday">Birthday</option>
					<option value="Corporate">Corporate</option>
					<option value="Social">Social</option>
					<option value="Other">Other</option>
							  </select>
				</div>
				</div>
				</div>--> */}

                    <div class="col-lg-8">
                      <div class="d-me-flex">
                        <div class="form-group j-input">
                          <input
                            type="text"
                            name="venue"
                            class="form-control"
                            placeholder="Venue"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group j-input">
                        <textarea
                          name="contact_message"
                          id="form_message"
                          cols="30"
                          rows="3"
                          class="form-control"
                          placeholder="Message "
                          required=""
                          maxlength="200"
                        ></textarea>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group ">
                        <label for="#cat">Captcha Code*</label>

                        <div class="j-input">
                          <div class="row">
                            <div class="col-7">
                              <input
                                type="hidden"
                                id="key"
                                name="key"
                                value="13"
                              />
                              <input
                                type="text"
                                id="word"
                                name="word"
                                maxlength="2"
                                placeholder="Captcha"
                              />
                            </div>
                            <div
                              class="col-5 text-center"
                              style={{ fontSize: "23px", lineHeight: "40px" }}
                            >
                              <input type="text" readonly="" value=" = 9 + 4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group j-footer p-0">
                  <input
                    type="hidden"
                    value="send"
                    name="send"
                    class="btn btn-primary py-3 px-4"
                  />
                  <button
                    type="submit"
                    name="send"
                    class="btn btn-primary py-3 px-4"
                    value="send"
                  >
                    Send
                  </button>
                </div>
                <div class="j-response"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
