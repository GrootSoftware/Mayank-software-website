import React from 'react'
import '../Services/Services.css'
import About from '../About'
import Team from '../Team'
import Testi from '../Testi'
import Tech from '../Tech'
import Partner from '../Partner'
import Footer from '../../Footer/Footer'
export default function Services() {
  return (
    <div>
            <div class="rs-services style4 gray-color pt-110 pb-120 md-pt-75 md-pb-80">
                <div class="container">
                    <div class="sec-title2 text-center mb-45">
                        {/* <!-- <span class="sub-text">Services</span>  */}
                        <span class="sub-title one-des">One Destination for all your digital development </span>

                        <h2 class="title">
                           Our Major Services
                        </h2>
                        <div class="desc desc-text">
                            We develop various sort of digital products using different programming languages as your project demands. Our major areas of services includes but is not limited to
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img src={require("./1.png")} alt=""/>
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">Software Developement</a></h2>
                                    <p class="desc">
                                        Our professional developers are experienced in developing different types of software programs including offline and online (SAAS) software applications.
                                    </p>
                                    <div class="services-btn2">
                                        <a href="web-development.html">Know More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="services-item active">
                                <div class="services-icon">
                                    <img src={require('./2.png')} alt=""/>
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">Web Development</a></h2>
                                    <p class="desc">
                                        If you are planning to start an online business or website, we have professionals who can fulfill your requirements efficiently.
                                    </p>
                                    <div class="services-btn2">
                                        <a href="web-development.html">Know More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img src={require('./3.png')} alt=""/>
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">App Developement</a></h2>
                                    <p class="desc">
                                        In case you need a mobile app to be developed, our experts can develop for both android or iOS systems.
                                    </p>
                                    <div class="services-btn2">
                                        <a href="web-development.html">Know More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Team/>
            <Testi/>
            <Tech/>
            {/* <Partner/> */}
            <Footer/>

    </div>
  )
}
