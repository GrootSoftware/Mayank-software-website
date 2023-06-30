import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer id="rs-footer" class="rs-footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 footer-widget">
                            <div class="footer-logo mb-30">
                                <a href="index-2.html"><img src="assets/images/logo-dark.png" alt=""/></a>
                            </div>
                              <div class="textwidget pb-30"><p>Groot Software is a go-to-destination for all your web development, software development and any other digital development task. We also provide digital marketing services for your business.</p>
                              </div>
                              <ul class="footer-social md-mb-30">  
                                  <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#" target="_blank"><i class="fa fa-git"></i></a></li>
                                            <li><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#" target="_blank"><i class="fa fa-stack-overflow"></i></a></li>                                                         
                              </ul>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                            <h3 class="widget-title">IT Services</h3>
                            <ul class="site-map">
                                <li><a href="software-development.html">Software Development</a></li>
                                <li><a href="web-development-services.html">Web Development</a></li>
                                <li><a href="analytic-solutions.html">Analytic Solutions</a></li>
                                <li><a href="cloud-and-devOps-services.html">Cloud and DevOps</a></li>
                                <li><a href="product-design-services.html">Product Design</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                            <h3 class="widget-title">Contact Info</h3>
                            <ul class="address-widget">
                                <li>
                                    <i class="flaticon-location"></i>
                                    <div class="desc"> 73/34, Paramhans Marg, Mansarovar, Jaipur </div>
                                </li>
                                <li>
                                    <i class="flaticon-call"></i>
                                    <div class="desc">
                                       <a href="tel:+917790847091">+91-7790847091</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-email"></i>
                                    <div class="desc">
                                        <a href="mailto:info@grootsoftware.com"> info@grootsoftware.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i class="flaticon-clock-1"></i>
                                    <div class="desc">
                                        Opening Hours: 8:00AM - 9:00PM   
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- News Latter -->
                        <!-- <div class="col-lg-3 col-md-12 col-sm-12">
                            <h3 class="widget-title">Newsletter</h3>
                            <p class="widget-desc">We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p>
                            <p>
                                <input type="email" name="EMAIL" placeholder="Your email address" required="">
                                <em class="paper-plane"><input type="submit" value="Sign up"></em>
                                <i class="flaticon-send"></i>
                            </p>
                        </div> --> */}
                        {/* <!-- News Latter --> */}
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">                    
                    <div class="row y-middle">
                        <div class="col-lg-6 text-right md-mb-10 order-last">
                            <ul class="copy-right-menu">
                                <li><a href="index-2.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="faq.html">FAQs</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <div class="copyright">
                                <p>&copy; 2021 All Rights Reserved. Developed By <a href="index.html">GrootSoftware Pvt. Ltd.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- Footer End --> */}

        {/* <!-- start scrollUp  --> */}
        <div id="scrollUp" class="orange-color">
            <i class="fa fa-angle-up"></i>
        </div>
        {/* <!-- End scrollUp  --> */}

        {/* <!-- Search Modal Start --> */}
        <div aria-hidden="true" class="modal fade search-modal" role="dialog" tabindex="-1">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="flaticon-cross"></span>
            </button>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="search-block clearfix">
                        <form>
                            <div class="form-group">
                                <input class="form-control" placeholder="Search Here..." type="text"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
