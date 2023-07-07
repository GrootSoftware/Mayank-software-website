import React from 'react'

function Contact() {
    return (
        <>
            {/* <!--Preloader aFrea start here--> */}
            {/* <div id="loader" className="loader">
                <div className="loader-container"></div>
            </div> */}
            {/* <!--Preloader area End here--> */}

            {/* <!-- Main content Start --> */}
            <div className="main-content">

                {/* <!--Full width header Start--> */}
                <div className="full-width-header">

                    {/* //   < !--Canvas Menu start-- > */}
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
                    {/* <!--Canvas Menu end-- > */}
                </div >
                {/* // < !--Full width header End-- > */}
                {/* // < !--Breadcrumbs Start-- > */}
                <div className="rs-breadcrumbs img3">
                    <div className="breadcrumbs-inner text-center">
                        {/* <h1 className="page-title">Contact</h1> */}
                        {/* <ul>
                            <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                                <a className="active" href="index-2.html">Home</a>
                            </li>
                            <li>Contact</li>
                        </ul> */}
                    </div>
                </div>
                {/* // <!--Breadcrumbs End-- > */}

                {/* // < !--Contact Section Start-- > */}
                <div className="rs-contact pt-120 md-pt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 md-mb-60">
                                <div className="contact-box">
                                    <div className="sec-title mb-45">
                                        <span className="sub-text new-text white-color">Let's Talk</span>
                                        <h2 className="title white-color">Speak With Expert Engineers.</h2>
                                    </div>
                                    <div className="address-box mb-25">
                                        <div className="address-icon">
                                            <i className="fa fa-home"></i>
                                        </div>
                                        <div className="address-text">
                                            <span className="label">Phone:</span>
                                            <a href="tel:+91-7790847091">+91-7790847091</a>
                                        </div>
                                    </div>
                                    <div className="address-box mb-25">
                                        <div className="address-icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="address-text">
                                            <span className="label">Email:</span>
                                            <a href="mailto:info@grootsoftware.com">info@grootsoftware.com</a>
                                        </div>
                                    </div>
                                    <div className="address-box">
                                        <div className="address-icon">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                        <div className="address-text">
                                            <span className="label">Address:</span>
                                            <div className="desc"> 73, 34, Paramhans Marg, Mansarovar Sector 7, Agarwal Farm, Barh Devariya, Mansarovar, Jaipur, Rajasthan 302020</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 pl-70 md-pl-15">
                                <div className="contact-widget">
                                    <div className="sec-title2 mb-40">
                                        <span className="sub-text contact mb-15">Get In Touch</span>
                                        <h2 className="title testi-title">Fill The Form Below</h2>

                                    </div>
                                    <div id="form-messages"></div>
                                    <form id="contact-form" method="post" action="https://grootsoftware.com/contact-us.php">
                                        <fieldset>
                                            <div className="row">
                                                <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                    <input className="from-control" type="text" id="name" name="name" placeholder="Name" required="" />
                                                </div>
                                                <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                    <input className="from-control" type="text" id="email" name="email" placeholder="E-Mail" required="" />
                                                </div>
                                                <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                    <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required="" />
                                                </div>
                                                <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                    <input className="from-control" type="text" id="Website" name="subject" placeholder="Your Website" required="" />
                                                </div>

                                                <div className="col-lg-12 mb-30">
                                                    <textarea className="from-control" id="message" name="message" placeholder="Your message Here" required=""></textarea>
                                                </div>
                                            </div>
                                            <div className="btn-part">
                                                <div className="form-group mb-0">
                                                    <input className="readon learn-more submit" type="submit" value="Submit Now" />
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map-canvas pt-120 md-pt-80">
                        {/* <!-- <iframe src="https://maps.google.com/maps?q=rstheme&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe> --> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.46272453684!2d75.76728761409753!3d26.857035968952257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5da1022f94d%3A0xb000ff55c622564d!2sGroot%20Software!5e0!3m2!1sen!2sin!4v1660543184660!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                {/* <!--Contact Section Start-- > */}

            </div >
            {/* < !--Main content End-- > */}
            {/* < !--Footer Start-- > */}
            <footer id="rs-footer" className="rs-footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 footer-widget">
                                <div className="footer-logo mb-30">
                                    <a href="index-2.html"><img src="assets/images/logo-dark.png" alt="" /></a>
                                </div>
                                <div className="textwidget pb-30"><p>Groot Software is a go-to-destination for all your web development, software development and any other digital development task. We also provide digital marketing services for your business.</p>
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
                                    <p>&copy; 2021 All Rights Reserved. Developed By <a href="index.html">GrootSoftware Pvt. Ltd.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!--Footer End-- > */}

            {/* < !--start scrollUp-- > */}
            <div id="scrollUp" className="orange-color">
                <i className="fa fa-angle-up"></i>
            </div>
            {/* <!--End scrollUp-- > */}

            {/* < !--Search Modal Start-- > */}
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
            {/* <!--Search Modal End-- > */}
        </>
    )
}

export default Contact