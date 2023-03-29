import React from "react";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
  
import img1 from "../../Images/feature.jpg";
import img3 from "../../Images/quote.jpg";
import img11 from "../../Images/team-1.jpg";
import img22 from "../../Images/team-2.jpg";
import img33 from "../../Images/team-3.jpg";
import testimonial from "../../Images/testimonial.jpg";
import blog_1 from "../../Images/blog-1.jpg";
import blog_2 from "../../Images/blog-2.jpg";
import blog_3 from "../../Images/blog-3.jpg";

import "../../Pages/Home/Home.css";

function Home() {
  return (
    <>
      <div
        id="header-carousel"
        className="carousel slide carousel-fade pointer-event"
        data-bs-ride="carousel"
      >
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="img-1"></div>
              <div className="carousel-caption d-none d-md-block mid-carousel-text">
                <div className="mid-text-carousel">
                  <h4> BUSINESS CONSULTANCY </h4>
                  <h1 className="carousel-text">
                    We Provide Solution On <br /> Your Business
                  </h1>
                  <a className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">
                    Get Quote
                  </a>
                  <a className="btn btn-secondary py-md-3 px-md-5 rounded-pill">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="img-2"></div>
              <div className="carousel-caption d-none d-md-block">
                <div className="mid-text-carousel">
                  <h4> BUSINESS CONSULTANCY </h4>
                  <h1 className="carousel-text">
                    Take Our Help To Reach <br /> The Top Level
                  </h1>
                  <a className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">
                    Get Quote
                  </a>
                  <a className="btn btn-secondary py-md-3 px-md-5 rounded-pill">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid p-0 container-fluid-1">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5">
            <h1 className="display-5 mb-4">
              <br />
              Welcome To <span className="text-primary">CONSULT</span>
            </h1>
            <h4 className="text-primary mb-4">
              Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem
              sit clita duo justo magna dolore
            </h4>
            <p className="mb-4">
              Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam
              stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo
              invidunt dolor, kasd rebum consetetur diam invidunt erat stet.
              Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea
              invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus
              sanctus invidunt erat ipsum eirmod.
            </p>
            <a
              href=" "
              className="btn btn-primary py-md-3 px-md-5 rounded-pill"
            >
              Get A Quote
            </a>
          </div>
          <div className="col-lg-6">
            <div className="h-100 d-flex flex-column justify-content-center bg-primary p-5">
              <div className="d-flex text-white mb-5">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4 service-cards">
                  <FontAwesomeIcon icon={faUserTie} size="2x" />
                </div>
                <div className="ps-4">
                  <h3>Business Planning</h3>
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                    erat ipsum lorem et sit sed stet lorem sit clita duo
                  </p>
                </div>
              </div>
              <div className="d-flex text-white mb-5">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4 service-cards">
                  <FontAwesomeIcon icon={faChartSimple} size="2x" />
                </div>
                <div className="ps-4">
                  <h3>Financial Analaysis</h3>
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                    erat ipsum lorem et sit sed stet lorem sit clita duo
                  </p>
                </div>
              </div>
              <div className="d-flex text-white">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4 service-cards">
                  <FontAwesomeIcon icon={faScaleBalanced} size="2x" />
                </div>
                <div className="ps-4">
                  <h3>legal Advisory</h3>
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                    erat ipsum lorem et sit sed stet lorem sit clita duo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="container-fluid pt-6 px-5">
        <div className="text-center mx-auto mb-5">
          <h1 className="display-5 mb-0">
            <b> What We Offer </b>
          </h1>
          <hr className="w-25 mx-auto bg-primary" />
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="service-item   text-center px-5">
              <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 service-cards">
                <FontAwesomeIcon icon={faUserTie} size="2x" />
              </div>
              <h3 className="mb-3">Business Research</h3>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
                ipsum lorem et sit sed stet lorem
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item   text-center px-5">
              <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 service-cards">
                <FontAwesomeIcon icon={faChartPie} size="2x" />
              </div>
              <h3 className="mb-3">Stretagic Planning</h3>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
                ipsum lorem et sit sed stet lorem
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item   text-center px-5">
              <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 service-cards">
                <FontAwesomeIcon icon={faChartSimple} size="2x" />
              </div>
              <h3 className="mb-3">Market Analysis</h3>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
                ipsum lorem et sit sed stet lorem
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item   text-center px-5">
              <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 service-cards ">
                <FontAwesomeIcon icon={faChartColumn} size="2x" />
              </div>
              <h3 className="mb-3">Financial Analaysis</h3>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
                ipsum lorem et sit sed stet lorem
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item   text-center px-5">
              <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 service-cards">
                <FontAwesomeIcon icon={faScaleBalanced} size="2x" />
              </div>
              <h3 className="mb-3">legal Advisory</h3>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
                ipsum lorem et sit sed stet lorem
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item   text-center px-5">
              <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4 service-cards">
                <FontAwesomeIcon icon={faHouse} size="2x" />
              </div>
              <h3 className="mb-3">Tax &amp; Insurance</h3>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat
                ipsum lorem et sit sed stet lorem
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5">
          <br />
          <h1 className="display-5 mb-0">
            <b>Why Choose Us!!!</b>
          </h1>
          <hr className="w-25 mx-auto bg-primary" />
        </div>{" "}
        <br />
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 primary-icon">
                  <FontAwesomeIcon icon={faCubes} size="2x" />
                </div>
                <h3>Best In Industry</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
              <div className="col-12">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 primary-icon">
                  <FontAwesomeIcon icon={faPercent} size="2x" />
                </div>
                <h3>99% Success Rate</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
              <div className="col-12">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 primary-icon">
                  <FontAwesomeIcon icon={faAward} size="2x" />
                </div>
                <h3>Award Winning</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-block bg-primary h-100 text-center">
              <img className="img-fluid" src={img1} alt="" />
              <div className="p-4">
                <p className="text-white mb-4">
                  Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et
                  sadipscing rebum amet takimata amet, sed accusam eos eos
                  dolores dolore et. Et ea ea dolor rebum invidunt clita eos.
                  Sea accusam stet stet ipsum, sit ipsum et ipsum kasd
                </p>
                <a
                  href=""
                  className="btn btn-light py-md-3 px-md-5 rounded-pill mb-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 primary-icon">
                  <FontAwesomeIcon icon={faFaceSmileBeam} size="2x" />
                </div>
                <h3>100% Happy Client</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
              <div className="col-12">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 primary-icon">
                  <FontAwesomeIcon icon={faUserTie} size="2x" />
                </div>
                <h3>Professional Advisors</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
              <div className="col-12">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3 primary-icon">
                  <FontAwesomeIcon icon={faHeadset} size="2x" />
                </div>
                <h3>24/7 Customer Support</h3>
                <p className="mb-0">
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
                  diam et diam dolor ea
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid   px-0">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5">
            <h1 className="display-5 mb-4">Request A Free Quote</h1>
            <p className="mb-4">
              Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr
              sea kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit
              nonumy vero lorem amet stet diam at. Ea at lorem sed et, lorem et
              rebum ut eirmod gubergren, dolor ea duo diam justo dolor diam
              ipsum dolore stet stet elitr ut. Ipsum amet labore lorem lorem
              diam magna sea, eos sed dolore elitr.
            </p>
            <form>
              <div className="row gx-3">
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="form-floating-1"
                      placeholder="John Doe"
                    />
                    <label for="form-floating-1">Full Name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="form-floating-2"
                      placeholder="name@example.com"
                    />
                    <label for="form-floating-2">Email address</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Financial Consultancy"
                    >
                      <option selected="">Financial Consultancy</option>
                      <option value="1">Strategy Consultancy</option>
                      <option value="2">Tax Consultancy</option>
                    </select>
                    <label for="floatingSelect">Select A Service</label>
                  </div>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary w-100 h-100" type="submit">
                    Request A Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="position-relative h-100">
              <img className="image-temp" src={img3} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5">
          <h1 className="display-5 mb-0">Our Team Members</h1>
          <hr className="w-25 mx-auto bg-primary" />
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={img11} alt="" />
              <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                <h3 className="text-white">Full Name</h3>
                <p className="text-white text-uppercase mb-0">Designation</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={img22} alt="" />
              <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                <h3 className="text-white">Full Name</h3>
                <p className="text-white text-uppercase mb-0">Designation</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={img33} alt="" />
              <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                <h3 className="text-white">Full Name</h3>
                <p className="text-white text-uppercase mb-0">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br /> <br />
      {/* carousel start  */}
      <div className="container-fluid p-0 container-fluid-1">
        <div className="row g-0">
          <div className="col-lg-6 ">
            <img className="testimonials-image" src={testimonial} alt="" />
          </div>
          <div className="col-lg-6 py-6 px-5">
            <h1 className="display-5 mb-4 mt-5 text-heading">
              {" "}
              <b> What Say Our Client!!!</b>
            </h1>
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="container">
                    <div className="row">
                      {" "}
                      <div className="col-lg">
                        <div className="carousel-text-1">
                          <FontAwesomeIcon icon={faQuoteLeft} /> Lorem ipsum
                          dolor sit amet consectetur, adipisicing elit. Dolore
                          dolorum dolores eum eveniet dolor pariatur natus ea.
                          Quae, optio minus!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg">
                        <div className="carousel-text-1">
                          <FontAwesomeIcon icon={faQuoteLeft} /> Lorem ipsum,
                          dolor sit amet consectetur adipisicing elit. Optio
                          tempora odit, cum quasi ad libero. Vel similique
                          maxime a vitae?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="container ">
                    <div className="row">
                      <div className="col-lg">
                        <div className="carousel-text-1">
                          <FontAwesomeIcon icon={faQuoteLeft} /> Lorem ipsum,
                          dolor sit amet consectetur adipisicing elit. Optio
                          tempora odit, cum quasi ad libero. Vel similique
                          maxime a vitae?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev carousel-button-a"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                class="carousel-control-next carousel-button-a"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <FontAwesomeIcon icon={faArrowRight} shake />
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-fluid py-6 px-5">
        <div className="text-center  ">
          <h1>Latest Blog Post</h1>
        </div>{" "}
        <hr className="w-25 mx-auto bg-primary" /> <br /> <br />
        <div className="row-g-5 d-flex justify-content-sm-between">
          <div className="col-lg-3">
            <div class="card">
              <img src={blog_1} class="card-img-top" alt=" " />
              <div class="card-body">
                <p class="card-text">Magna sea dolor ipsum amet lorem eos</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class="card">
              <img src={blog_2} class="card-img-top" alt=" " />
              <div class="card-body">
                <p class="card-text">Magna sea dolor ipsum amet lorem eos</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class="card">
              <img src={blog_3} class="card-img-top" alt=" " />
              <div class="card-body">
                <p class="card-text">Magna sea dolor ipsum amet lorem eos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid bg-dark d-flex  ">
        <br />
        <div className="row col-lg-12 py-4 text-deco">
          <br />
        <div class="col-lg-3  ">
                <h3 class="text-white mb-4">Quick Links</h3>
                <div class="d-flex flex-column justify-content-start ">
                    <a class=" mb-2 text-decor" href="#"> Home</a>
                    <a class=" mb-2 text-decor" href="#"> About Us</a>
                    <a class=" mb-2 text-decor" href="#"> Our Services</a>
                    <a class=" mb-2 text-decor" href="#"> Latest Blog Post</a>
                    <a class=" text-decor" href="#"> Contact Us</a>
                </div>
            </div>
          <div className="col-lg-3">
          
                <h3 class="text-white mb-4">Popular Links</h3>
                <div class="d-flex flex-column justify-content-start ">
                    <a class=" mb-2 text-decor " href="#"> Home</a>
                    <a class=" mb-2 text-decor" href="#"> About Us</a>
                    <a class=" mb-2 text-decor" href="#"> Our Services</a>
                    <a class=" mb-2 text-decor" href="#"> Latest Blog Post</a>
                    <a class=" text-decor" href="#"> Contact Us</a>
                </div>
           
          </div>
          <div class="col-lg-3 ">
                <h3 class="text-white mb-4">Get In Touch</h3>
                <p class="mb-2"> 123 Street, New York, USA</p>
                <p class="mb-2"> info@example.com</p>
                <p class="mb-0"> +012 345 67890</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Follow Us</h3>
                <div class="d-flex">
                  
                    <a class="btn btn-lg btn-primary btn-lg-square  temp-round  me-2" href="#">  <FontAwesomeIcon icon={faTwitter} /></a>
                    <a class="btn btn-lg btn-primary btn-lg-square  temp-round  me-2" href="#"> <FontAwesomeIcon icon={faFacebook} /></a>
                    <a class="btn btn-lg btn-primary btn-lg-square  temp-round me-2" href="#">  <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a class="btn btn-lg btn-primary btn-lg-square  temp-round me-2" href="#">  <FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
