import React from 'react'
import imga1 from "../assets/images/team/style1/1.jpg";
import imga2 from "../assets/images/team/style1/2.jpg";
import imga3 from "../assets/images/team/style1/3.jpg";
import imga4 from "../assets/images/team/style1/4.jpg";


function About() {
    return (
        <>

            {/* <!--Preloader area start here--> */}
            {/* <div id="loader" className="loader">
                <div className="loader-container"></div>
            </div> */}
            {/* <!--Preloader area End here--> */}

            {/* <!-- Main content Start --> */}
            <div className="main-content">

                {/* <!--Full width header Start--> */}
            </div>
            <div className="full-width-header">

                {/* <!-- Canvas Menu start --> */}
                <nav className="right_menu_togle hidden-md">
                    <div className="close-btn"><span id="nav-close" className="text-center"><i className="fa fa-close"></i></span></div>
                    <div className="canvas-logo">
                        <a href="index-2.html"><img src="assets/images/logo-dark.png" alt="logo" /></a>
                    </div>
                    <div className="offcanvas-text">
                        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                    </div>
                    <div className="canvas-contact">
                        <h5 className="canvas-contact-title">Contact Info</h5>
                        <ul className="contact">
                            <li><i className="fa fa-globe"></i>Middle Badda, Dhaka, BD</li>
                            <li><i className="fa fa-phone"></i>+123445789</li>
                            <li><i className="fa fa-envelope"></i><a href="mailto:info@yourcompany.com">info@yourcompany.com</a></li>
                            <li><i className="fa fa-clock-o"></i>10:00 AM - 11:30 PM</li>
                        </ul>
                        <ul className="social">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </nav>
                {/* <!-- Canvas Menu end --> */}
                {/* <!--Full width header End--> */}
                {/* <!-- Breadcrumbs Start --> */}
                <div className="rs-breadcrumbs img1">
                    <div className="breadcrumbs-inner text-center">
                        {/* <h1 className="page-title">About</h1> */}
                        <ul>
                            <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                                {/* <a className="active" href="index-2.html">Home</a> */}
                            </li>
                            {/* <li>About</li> */}
                        </ul>
                    </div>
                </div>
                {/* <!-- Breadcrumbs End --> */}
                {/* <!-- About Section Start --> */}
                <div className="rs-about gray-color pt-120 pb-120 md-pt-80 md-pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 md-mb-30">
                                <div className="rs-animation-shape">
                                    <div className="images">
                                        <img src="/" alt="" />
                                    </div>
                                    <div className="middle-image2">
                                        <img className="dance3" src="assets/images/about/effect-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pl-60 md-pl-15">
                                <div className="contact-wrap">
                                    <div className="sec-title mb-30">
                                        <div className="sub-text style-bg">About Us</div>
                                        <h2 className="title pb-38">
                                            Welcome to Mayank Software Solutions!
                                        </h2>
                                        <div className="desc pb-35">
                                            We are a leading software development company dedicated to providing innovative and tailored solutions to businesses of
                                            all sizes. With our team of experienced developers and cutting-edge technologies, we strive to deliver high-quality
                                            software products that meet our clients' unique requirements.
                                        </div>
                                        {/* <p className="margin-0 pb-15">
                                            We denounce with righteous indignation and dislike men who are so beguiled and
                                            demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                                            cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to
                                            those who fail in their duty through weakness of will, which is the same as saying.
                                        </p> */}
                                    </div>
                                    <div className="btn-part">
                                        <a className="readon learn-more" href="contact.html">Learn-More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-image">
                            <img className="top dance" src="assets/images/about/dotted-3.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* <!-- About Section End --> */}
                {/* <!-- Team Section Start --> */}
                <div className="rs-team pt-120 pb-120 md-pt-80 md-pb-80 xs-pb-54">
                    <div className="sec-title2 text-center mb-30">
                        <span className="sub-text style-bg white-color">Team</span>
                        <h2 className="title white-color">
                            Expert IT Consultants
                        </h2>
                    </div>
                    <div className="container">
                        <div className="container">
                            <div className="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="true" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device="3" data-md-device-nav="false" data-md-device-dots="true">
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html">
                                                <img src={require('../assets/images/fav.png')} alt="" />
                                                </a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Makhaia Antitni</a></h4>
                                        <span className="designation">President & CEO</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/2.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Corey Anderson</a></h4>
                                        <span className="designation">CEO & Founder</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/3.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Masud Rana</a></h4>
                                        <span className="designation">Web Developer</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/4.jpg" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Najmul Huda</a></h4>
                                        <span className="designation">Digital Marketer</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/5.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Rushali Rumi</a></h4>
                                        <span className="designation">Design Lead</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/6.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Abu Sayed</a></h4>
                                        <span className="designation">App Developer</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/7.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Sonia Akhter</a></h4>
                                        <span className="designation">Graphic Artist</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/8.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Rayhan Ali</a></h4>
                                        <span className="designation">CEO & Founder</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/9.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Benjir Akther</a></h4>
                                        <span className="designation">Graphic Designer</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/1.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Makhaia Antitni</a></h4>
                                        <span className="designation">President & CEO</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/2.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Corey Anderson</a></h4>
                                        <span className="designation">CEO & Founder</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/3.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Masud Rana</a></h4>
                                        <span className="designation">Web Developer</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-item-wrap">
                                    <div className="team-wrap">
                                        <div className="image-inner">
                                            <a href="single-team.html"><img src="assets/images/team/style1/4.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h4 className="person-name"><a href="single-team.html">Najmul Huda</a></h4>
                                        <span className="designation">Digital Marketer</span>
                                        <ul className="team-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Team Section End --> */}
                {/* <!-- Process Section Start --> */}
                <div className="rs-process style2 pt-120 pb-120 md-pt-80 md-pb-73">
                    <div className="container">
                        <div className="sec-title2 text-center mb-45">
                            <span className="sub-text style-bg">Process</span>
                            <h2 className="title title2">
                                Our Working Process
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 md-mb-50">
                                <div className="addon-process">
                                    <div className="process-wrap">
                                        <div className="process-img">
                                            <img src="assets/images/process/1.png" alt="" />
                                        </div>
                                        <div className="process-text">
                                            <h3 className="title">Discovery</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 md-mb-50">
                                <div className="addon-process">
                                    <div className="process-wrap">
                                        <div className="process-img">
                                            <img src="assets/images/process/2.png" alt="" />
                                        </div>
                                        <div className="process-text">
                                            <h3 className="title"> Planning</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="addon-process">
                                    <div className="process-wrap">
                                        <div className="process-img">
                                            <img src="assets/images/process/3.png" alt="" />
                                        </div>
                                        <div className="process-text">
                                            <h3 className="title">Execute</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="addon-process">
                                    <div className="process-wrap">
                                        <div className="process-img">
                                            <img src="assets/images/process/4.png" alt="" />
                                        </div>
                                        <div className="process-text">
                                            <h3 className="title">Deliver</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Process Section End --> */}
                {/* <!-- Pricing section start --> */}
                <div className="rs-pricing style2 gray-color pt-120 pb-143 md-pt-80 md-pb-80">
                    <div className="container">
                        <div className="sec-title2 text-center mb-45">
                            <span className="sub-text style-bg">Pricing</span>
                            <h2 className="title title2">
                                Our Pricing Plan
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 md-mb-30">
                                <div className="pricing-table new-style2">
                                    <div className="pricing-badge">
                                        Silver
                                    </div>
                                    <div className="pricing-icon">
                                        <img src="assets/images/pricing/main-home/icons/1.png" alt="" />
                                    </div>
                                    <div className="pricing-table-price">
                                        <div className="pricing-table-bags">
                                            <span className="pricing-currency">$</span>
                                            <span className="table-price-text">29.99</span>
                                            <span className="table-period">Monthly Package</span>
                                        </div>
                                    </div>
                                    <div className="pricing-table-body">
                                        <ul>
                                            <li><i className="fa fa-check"></i><span>Powerful Admin Panel</span></li>
                                            <li><i className="fa fa-check"></i><span>1 Native Android App</span></li>
                                            <li><i className="fa fa-close"></i><span>Multi-Language Support</span></li>
                                            <li><i className="fa fa-check"></i><span>Support via E-mail and Phone</span></li>
                                        </ul>
                                    </div>
                                    <div className="btn-part">
                                        <a className="readon buy-now" href="contact.html">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 md-mb-30">
                                <div className="pricing-table primary-bg">
                                    <div className="pricing-badge white-color-bg">
                                        Gold
                                    </div>
                                    <div className="pricing-icon">
                                        <img src="assets/images/pricing/main-home/icons/2.png" alt="" />
                                    </div>
                                    <div className="pricing-table-price">
                                        <div className="pricing-table-bags">
                                            <span className="pricing-currency">$</span>
                                            <span className="table-price-text">39.99</span>
                                            <span className="table-period">Monthly Package</span>
                                        </div>
                                    </div>
                                    <div className="pricing-table-body">
                                        <ul>
                                            <li><i className="fa fa-check"></i><span>Powerful Admin Panel</span></li>
                                            <li><i className="fa fa-check"></i><span>2 Native Android App</span></li>
                                            <li><i className="fa fa-check"></i><span>Multi-Language Support</span></li>
                                            <li><i className="fa fa-check"></i><span>Support via E-mail and Phone</span></li>
                                        </ul>
                                    </div>
                                    <div className="btn-part">
                                        <a className="readon buy-now" href="contact.html">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="pricing-table new-style2">
                                    <div className="pricing-badge">
                                        Platinum
                                    </div>
                                    <div className="pricing-icon">
                                        <img src="assets/images/pricing/main-home/icons/3.png" alt="" />
                                    </div>
                                    <div className="pricing-table-price">
                                        <div className="pricing-table-bags">
                                            <span className="pricing-currency">$</span>
                                            <span className="table-price-text">79.99</span>
                                            <span className="table-period">Monthly Package</span>
                                        </div>
                                    </div>
                                    <div className="pricing-table-body">
                                        <ul>
                                            <li><i className="fa fa-check"></i><span>Powerful Admin Panel</span></li>
                                            <li><i className="fa fa-check"></i><span>3 Native Android App</span></li>
                                            <li><i className="fa fa-check"></i><span>Multi-Language Support</span></li>
                                            <li><i className="fa fa-check"></i><span>Support via E-mail and Phone</span></li>
                                        </ul>
                                    </div>
                                    <div className="btn-part">
                                        <a className="readon buy-now" href="contact.html">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Pricing section end --> */}
                {/* <!-- Counter Section Start --> */}
                <div className="rs-contact-wrap bg5 pt-120 pb-390 md-pt-80">
                    <div className="container">
                        <div className="sec-title2 text-center mb-30">
                            <span className="sub-text style-bg white-color">Contact</span>
                            <h2 className="title white-color">
                                Request A Free Consultation
                            </h2>
                        </div>
                    </div>
                </div>
                {/* <!-- Counter Section End --> */}

                {/* <!-- Video Section End --> */}
                <div className="rs-video-wrap style2 inner pb-120 md-pb-80">
                    <div className="container">
                        <div className="row margin-0 gray-color">
                            <div className="col-lg-6 padding-0">
                                <div className="video-item">
                                    <div className="rs-videos">
                                        <div className="animate-border main-home style2">
                                            <a className="popup-border popup-videos" href="https://www.youtube.com/watch?v=YLN1Argi7ik">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 padding-0">
                                <div className="rs-requset">
                                    <div id="form-messages"></div>
                                    <form id="contact-form" method="post"
                                        action="https://rstheme.com/products/html/braintech/mailer.php">
                                        <fieldset>
                                            <div className="row">
                                                <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                    <input className="from-control" type="text" id="name" name="name" placeholder="Name"
                                                        required="" />
                                                </div>
                                                <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                    <input className="from-control" type="text" id="email" name="email"
                                                        placeholder="E-Mail" required="" />
                                                </div>
                                                <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                    <input className="from-control" type="text" id="phone" name="phone"
                                                        placeholder="Phone Number" required="" />
                                                </div>
                                                <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                    <input className="from-control" type="text" id="Website" name="subject"
                                                        placeholder="Your Website" required="" />
                                                </div>

                                                <div className="col-lg-12 mb-45">
                                                    <textarea className="from-control" id="message" name="message"
                                                        placeholder="Your message Here" required=""></textarea>
                                                </div>
                                            </div>
                                            <div className="btn-part">
                                                <a className="submit sub-small" href="#">Submit Now</a>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Video Section End --> */}
            </div>
            {/* <!-- Main content End --> */}

            {/* <!-- Footer Start --> */}
            <footer id="rs-footer" className="rs-footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 footer-widget">
                                <div className="footer-logo mb-30">
                                    <a href="index-2.html"><img src="assets/images/logo-dark.png" alt="" /></a>
                                </div>
                                <div className="textwidget pb-30">
                                    <p>Groot Software is a go-to-destination for all your web development, software development
                                        and any other digital development task. We also provide digital marketing services for
                                        your business.</p>
                                </div>
                                <ul className="footer-social md-mb-30">
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-git"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-stack-overflow"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                                <h3 className="widget-title">IT Services</h3>
                                <ul className="site-map">
                                    <li><a href="software-development.html">Software Development</a></li>
                                    <li><a href="web-development-services.html">Web Development</a></li>
                                    <li><a href="analytic-solutions.html">Analytic Solutions</a></li>
                                    <li><a href="cloud-and-devOps-services.html">Cloud and DevOps</a></li>
                                    <li><a href="product-design-services.html">Product Design</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                                <h3 className="widget-title">Contact Info</h3>
                                <ul className="address-widget">
                                    <li>
                                        <i className="flaticon-location"></i>
                                        <div className="desc"> 73/34, Paramhans Marg, Mansarovar, Jaipur </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <div className="desc">
                                            <a href="tel:+917790847091">+91-7790847091</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <div className="desc">
                                            <a href="mailto:info@grootsoftware.com"> info@grootsoftware.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-clock-1"></i>
                                        <div className="desc">
                                            Opening Hours: 8:00AM - 9:00PM
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- News Latter --> */}
                            {/* <!-- <div className="col-lg-3 col-md-12 col-sm-12">
                        <h3 className="widget-title">Newsletter</h3>
                        <p className="widget-desc">We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p>
                        <p>
                            <input type="email" name="EMAIL" placeholder="Your email address" required="">
                            <em className="paper-plane"><input type="submit" value="Sign up"></em>
                            <i className="flaticon-send"></i>
                        </p>
                    </div> --> */}
                            {/* <!-- News Latter --> */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row y-middle">
                            <div className="col-lg-6 text-right md-mb-10 order-last">
                                <ul className="copy-right-menu">
                                    <li><a href="index-2.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="copyright">
                                    <p>&copy; 2021 All Rights Reserved. Developed By <a href="index.html">GrootSoftware Pvt.
                                        Ltd.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer End --> */}

            {/* <!-- start scrollUp  --> */}
            <div id="scrollUp" className="orange-color">
                <i className="fa fa-angle-up"></i>
            </div>
            {/* <!-- End scrollUp  --> */}

            {/* <!-- Search Modal Start --> */}
            <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabindex="-1">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="flaticon-cross"></span>
                </button>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="search-block clearfix">
                            <form>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Search Here..." type="text" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Search Modal End --> */}

            {/* <!-- modernizr js --> */}
            {/* <!-- Mirrored from grootsoftware.com/about-us.php by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 29 Jun 2023 08:32:23 GMT --> */}

        </>
    )
}

export default About