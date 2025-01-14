import React from "react";
import Carousel1 from "../Assets/Images/carousel-1.jpg";
import Carousel2 from "../Assets/Images/carousel-2.jpg";
import Carousel3 from "../Assets/Images/carousel-3.jpg";
import img from '../Assets/Images/educate.jpg'
import img1 from '../Assets/Images/educate-1.jpg'
import img2 from '../Assets/Images/educate-2.jpg'
import cat1 from '../Assets/Images/cat-1.jpg'
import cat2 from '../Assets/Images/cat-2.jpg'
import cat3 from '../Assets/Images/cat-3.jpg'
import cat4 from '../Assets/Images/cat-4.jpg'


import { Link } from "react-router-dom";
import About from "./About";
function Home() {
  return (

   <>
   <div  className='carousal-margin'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" >
          <div class="carousel-item active" data-bs-interval="10000" >
            <img src={img} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 className='abc'>BEST ONLINE COURSES</h5>
              <h1 className='abc'>Best Online Learning <br/>Platform</h1>
              <p className='abc'>Welcome to E-Learning Unlock your potential with our interactive E-Learning platform.</p>
              <div class="slider-btn">
                <button class="btn btn-1">Read More</button>
                <button class="btn btn-2">Join Now</button>
              </div>
            </div>
            
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h5 className='abc'>EMPOWER LEARNING</h5>
              <h1 className='abc'>Empower Your Learning Journey <br/>Platform</h1>
              <p className='abc'>"Unlock Your Potential with Interactive E-Learning! Explore the Best Online Learning Platform Today."</p>
              <div class="slider-btn">
                <button class="btn btn-1">Read More</button>
                <button class="btn btn-2">Join Now</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h5 className='abc'>BEST ONLINE COURSES</h5>
              <h1 className='abc'>Best Online Learning <br/>Platform</h1>
              <p className='abc'>Welcome to E-Learning Unlock your potential with our interactive E-Learning platform.</p>
              <div class="slider-btn">
                <button class="btn btn-1">Read More</button>
                <button class="btn btn-2">Join Now</button>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 
      </div>
        
      <br/><br/>
      <div>
      <div class="container content-space-1 content-space-lg-3 ">
        <div class="row">
          <div class="col-md-4 mb-5 mb-md-0 zoom_effect">
            <div className='con-bg'>
            <div class="text-center px-lg-3">
              <div class="svg-icon text-primary mb-4">
              <i class="fa fa-3x fa-graduation-cap text-dark mb-4"></i>
              </div>
              <h3>Meet your<br/> Skilled Instructors</h3>
              <p>Learn from the best! Our online classes are led by expert instructor with years of experiance in their respective fields.
                Get ready for an engaging and enlightening learning experiance.
              </p>
            </div>
            </div>
          </div>


          <div class="col-md-4 mb-5 mb-md-0 zoom_effect">
            <div className='con-bg'>
            <div class="text-center px-lg-3">
              <div class="svg-icon text-primary mb-4">
              <i class="fa fa-3x fa-globe text-dark mb-4"></i>             
              </div>
              <h3>Online Classes</h3>
              <p>Join our live and interactive online classes from their comfort of your home. Participate in discussions, ask questions, and collaborate with fellow learners.
                Embrace the conveniance of learning of your schedule.
              </p>
            </div>
            </div>
          </div>
         

          <div class="col-md-4 zoom_effect" >
          <div className='con-bg'>
            <div class="text-center px-lg-3">
              <div class="svg-icon text-primary mb-4">
              <i class="fa fa-3x fa-book-open text-dark mb-4"></i>              
              </div>
              <h3>24/7 Access<br/>to Course Materials</h3>
              <p>Access our extensive library of course materials 24/7.
                Download leature, presentations, additional resources, and study guides to reinforce your learning.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
  </div>
  <About/>
    
    {/* <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img class="img-fluid" src={Carousel1} alt="" width="100%"/>
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-8">
                                <h5 class="text-light text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                <h1 class="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                <p class="fs-5 text-white mb-4 pb-2">Welcome to E-Learning! Unlock your potential with our interactive e-learning platform. </p>
                                <Link to="/About" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
                                <Link to="/Register/StudentReg" class="btn btn-dark py-md-3 px-md-5 animated slideInRight">Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    <div class="carousel-item">
    <img class="img-fluid" src={Carousel2} alt="" width="100%"/>
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(24, 29, 56, .7)"}}>
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-8">
                                <h2 class="text-light text-uppercase mb-3 animated slideInDown">Best Online Courses</h2>
                                <h1 class="display-3 text-white animated slideInDown">Access anytime, anywhere, on any device.</h1>
                                <p class="fs-5 text-white mb-4 pb-2">Explore a diverse range of courses taught by experts in various fields. From programming to photography, we've got you covered!</p>
                                <Link to="/about" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
                                <Link to="/Register/StudentReg" class="btn btn-dark py-md-3 px-md-5 animated slideInRight">Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-graduation-cap text-dark mb-4"></i>
                            <h5 class="mb-3">Meet Your Skilled Instructors. </h5>
                            <p>Learn from the best! Our online classes are led by expert instructors with years of experience in their respective fields. Get ready for an engaging and enlightening learning experience. 🎓💼</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-globe text-dark mb-4"></i>
                            <h5 class="mb-3">Online Classes</h5>
                            <p>Join our live and interactive online classes from the comfort of your home. Participate in discussions, ask questions, and collaborate with fellow learners. Embrace the convenience of learning on your schedule. ⏰💻🏠</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-book-open text-dark mb-4"></i>
                            <h5 class="mb-3">24/7 Access to Course Materials</h5>
                            <p> Access our extensive library of course materials 24/7. Download lecture presentations, additional resources, and study guides to reinforce your learning. 📚🔓🌐</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div class="container-xxl py-5 category">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                
                <h1 class="mb-5">Courses Categories</h1>
            </div>
            <div class="row g-3">
                <div class="col-lg-7 col-md-6">
                    <div class="row g-3">
                        <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={cat1} alt=""/>
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px;"}}>
                                    <h5 class="m-0">Web Design</h5>
                                    <small class="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={cat2} alt=""/>
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px;"}}>
                                    <h5 class="m-0">Graphic Design</h5>
                                    <small class="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a class="position-relative d-block overflow-hidden" href="">
                                <img class="img-fluid" src={cat3} alt=""/>
                                <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px;"}}>
                                    <h5 class="m-0">Video Editing</h5>
                                    <small class="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: "350px;"}}>
                    <a class="position-relative d-block h-100 overflow-hidden" href="">
                        <img class="img-fluid position-absolute w-100 h-100" src={cat4} alt="" style={{objectFit: "cover;"}}/>
                        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin:  "1px;"}}>
                            <h5 class="m-0">Online Marketing</h5>
                            <small class="text-primary">49 Courses</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div> */}
    </>
  );
}

export default Home;
