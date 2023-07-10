import React from 'react'

function Home() {
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
                <div className="full-width-header">
                    {/* <!--Full width header Start--> */}
                    <div className="full-width-header">

                        {/* <!-- Canvas Menu start --> */}
                        <nav className="right_menu_togle hidden-md">
                            <div className="close-btn"><span id="nav-close" className="text-center"><i className="fa fa-close"></i></span></div>
                            <div className="canvas-logo">
                                <a href="index-2.html"><img src="" alt="logo" /></a>
                            </div>
                            <div className="offcanvas-text">
                                <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                    ‘Content here, content here’, making it look like readable English.</p>
                            </div>
                            <div className="canvas-contact">
                                <h5 className="canvas-contact-title">Contact Info</h5>
                                <ul className="contact">
                                    <li><i className="fa fa-globe"></i>Middle Badda, Dhaka, BD</li>
                                    <li><i className="fa fa-phone"></i>+123445789</li>
                                    <li><i className="fa fa-envelope"></i><a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
                                    </li>
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
                    </div>
                    {/* <!--Full width header End--> */}
                    {/* <!-- Banner Section Start --> */}
                    <div className="rs-banner style4">
                        <div className="container">
                            <div className="banner-content">
                                <h1 className="title main_title">Software development and web devlopment company</h1>
                                {/* <!-- <span className="sub-title">One Destination for all your digital development </span> --> */}
                                <p className="desc mt-5">
                                    Groot Software is a team of professional programmers and developers who hold expertise in all
                                    type of digital development including software, app and web development.
                                </p>
                                {/* <!-- <ul className="banner-btn">
            <li><a className="readon discover" href="about.php">Discover More</a></li>
            <li>
                <div className="rs-videos">
                    <div className="animate-border white-color">
                        <a className="popup-border popup-videos" href="https://www.youtube.com/watch?v=YLN1Argi7ik">
                            <i className="fa fa-play"></i>
                        </a>
                    </div>
                </div>
            </li>
        </ul> --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Banner Section End --> */}

                    {/* <!-- Services Section Start --> */}
                    <div className="rs-services style4 gray-color pt-110 pb-120 md-pt-75 md-pb-80">
                        <div className="container">
                            <div className="sec-title2 text-center mb-45">
                                {/* <!-- <span className="sub-text">Services</span> --> */}
                                <span className="sub-title one-des">One Destination for all your digital development </span>

                                <h2 className="title">
                                    Our Major Services
                                </h2>
                                <div className="desc desc-text">
                                    We develop various sort of digital products using different programming languages as your
                                    project demands. Our major areas of services includes but is not limited to
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="services-item">
                                        <div className="services-icon">
                                            <img src="assets/images/services/style4/1.png" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <h2 className="title"><a href="web-development.html">Software Developement</a></h2>
                                            <p className="desc">
                                                Our professional developers are experienced in developing different types of
                                                software programs including offline and online (SAAS) software applications.
                                            </p>
                                            <div className="services-btn2">
                                                <a href="web-development.html">Know More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="services-item active">
                                        <div className="services-icon">
                                            <img src="assets/images/services/style4/2.png" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <h2 className="title"><a href="web-development.html">Web Development</a></h2>
                                            <p className="desc">
                                                If you are planning to start an online business or website, we have professionals
                                                who can fulfill your requirements efficiently.
                                            </p>
                                            <div className="services-btn2">
                                                <a href="web-development.html">Know More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="services-item">
                                        <div className="services-icon">
                                            <img src="assets/images/services/style4/3.png" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <h2 className="title"><a href="web-development.html">App Developement</a></h2>
                                            <p className="desc">
                                                In case you need a mobile app to be developed, our experts can develop for both
                                                android or iOS systems.
                                            </p>
                                            <div className="services-btn2">
                                                <a href="web-development.html">Know More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Services Section End --> */}

                    {/* <!-- About Section Start --> */}
                    <div className="rs-about style3 pt-120 pb-120 md-pt-75 md-pb-80">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="sec-title2 mb-30">
                                        <div className="sub-text">About Groot Software</div>
                                        <h4 className="">
                                            Proudly emerged as a renowned name in software and web development industry in the short
                                            time since arrival.
                                        </h4>
                                        <div className="desc desc2">
                                            We only started a few years ago, but the expertise, dedication, and consistency of our
                                            team helped us earn a reputation among acclaimed software development companies of India
                                            and the US.
                                        </div>
                                        <div className="btn-part mt-40">
                                            <a className="readon discover more" href="about-us.html">About Us</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 md-pt-40">
                                    <div className="rs-animation-image">
                                        <div className="pattern-img">
                                            <img src="assets/images/about/style2/round.png" alt="" />
                                        </div>
                                        <div className="middle-img">
                                            <img className="dance3" src="assets/images/about/style2/about1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Section End --> */}
                </div>
                {/* <!-- Progress Section Start --> */}
                <div className="progress-pie-part pb-110 md-pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 md-pb-40">
                                <div className="box">
                                    <div className="chart" data-percent="100" data-scale-color="#ffb400"><span>95%</span></div>
                                    <h2 className="title">Satisfied Clients</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 md-pb-40">
                                <div className="box">
                                    <div className="chart" data-percent="100" data-scale-color="#ffb400"><span>80+</span></div>
                                    <h2 className="title">Completed Projects</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 md-pb-40">
                                <div className="box">
                                    <div className="chart" data-percent="100" data-scale-color="#ffb400"><span>6+</span></div>
                                    <h2 className="title">Industries Served</h2>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box">
                                    <div className="chart" data-percent="100" data-scale-color="#ffb400"><span>15</span></div>
                                    <h2 className="title">Expert Team Member</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Progress Section End --> */}
                {/* <!-- Services Section Start --> */}
                <div className="rs-services style4 modify1 gray-color pt-110 pb-120 md-pt-75 md-pb-40 sm-pb-70">
                    <div className="container">
                        <div className="sec-title2 text-center mb-45">
                            <span className="sub-text">Programming languages we expertize in.</span>
                            <h2>
                                You can trust us with following programming languages.
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-20">
                                <div className="services-item">
                                    <div className="services-icon">
                                        <img src='' alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><a href="web-development.html">PHP</a></h2>
                                        <p className="desc">
                                            We have programmers who can deliver your PHP programming project in no time.
                                        </p>
                                        <div className="services-btn2">
                                            <a href="web-development.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-20">
                                <div className="services-item">
                                    <div className="services-icon">
                                        <img src="assets/images/services/style5/2.png" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><a href="web-development.html">Java</a></h2>
                                        <p className="desc">
                                            We have programmers who can deliver your Java programming project in no time.
                                        </p>
                                        <div className="services-btn2">
                                            <a href="web-development.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-20">
                                <div className="services-item">
                                    <div className="services-icon">
                                        <img src="assets/images/services/style5/3.png" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><a href="web-development.html">React JS</a></h2>
                                        <p className="desc">
                                            We have programmers who can deliver your React JS programming project in no time.
                                        </p>
                                        <div className="services-btn2">
                                            <a href="web-development.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-item">
                                    <div className="services-icon">
                                        <img src="assets/images/services/style5/4.png" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><a href="web-development.html">Angular </a></h2>
                                        <p className="desc">
                                            We have programmers who can deliver your Angular programming project in no time.
                                        </p>
                                        <div className="services-btn2">
                                            <a href="web-development.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-item">
                                    <div className="services-icon">
                                        <img src="assets/images/services/style5/5.png" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><a href="web-development.html">HTML/CSS</a></h2>
                                        <p className="desc">
                                            We have programmers who can deliver your HTML/CSS programming project in no time.
                                        </p>
                                        <div className="services-btn2">
                                            <a href="web-development.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-item">
                                    <div className="services-icon">
                                        <img src="assets/images/services/style5/6.png" alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title"><a href="web-development.html">WordPress</a></h2>
                                        <p className="desc">
                                            We have programmers who can deliver your WordPress programming project in no time.
                                        </p>
                                        <div className="services-btn2">
                                            <a href="web-development.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Services Section End --> */}
                {/* <!-- Call Action Section Start --> */}
                <div className="rs-call-action bg8 pt-120 pb-120 md-pt-75 md-pb-80">
                    <div className="container">
                        <div className="sec-title2 text-center">
                            <p className="lets-talk">Let’s Talk</p>
                            <h2 className="title title4 white-color">
                                Got a web development project? Let's get you connected with our experts and transform your
                                vision into reality.
                            </h2>
                            <div className="call-btn mt-30">
                                <a className="readon discover started" href="contact.html">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Call Action Section End --> */}
                {/* <!-- Process Section Start --> */}
                <div className="rs-process style3 gray-color pt-120 pb-120 md-pt-75 md-pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="process-wrap bg9">
                                    <div className="sec-title mb-30">
                                        <div className="sub-text new">How We Work</div>
                                        <h2 className="title title4 white-color pb-20">
                                            How Groot Software can help your business
                                        </h2>
                                        <div className="desc white-color">
                                            When you trust us with your digital venture, it becomes our responsibility to
                                            fulfill your requirements and provide you the best output possible. Here's an
                                            overview of how it works.
                                        </div>
                                        <div className="btn-part mt-40">
                                            <a className="readon discover started" href="contact.html">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 pl-35 md-pt-40 md-pl-15">
                                <div className="row">
                                    <div className="col-md-6 mb-20">
                                        <div className="rs-addon-number">
                                            <div className="number-text">
                                                <div className="number-area">
                                                    01
                                                </div>
                                                <div className="number-title">
                                                    <h3 className="title">Discussing The Ideas & Concepts</h3>
                                                </div>
                                                <p className="number-txt">Ofcourse it begins with you describing us the vision that
                                                    you have regarding the project.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <div className="rs-addon-number">
                                            <div className="number-text">
                                                <div className="number-area">
                                                    02
                                                </div>
                                                <div className="number-title">
                                                    <h3 className="title">Deciding the Technology & Plan</h3>
                                                </div>
                                                <p className="number-txt">Our experts then process the information and prepare a
                                                    blueprint with required technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 md-mb-20">
                                        <div className="rs-addon-number">
                                            <div className="number-text">
                                                <div className="number-area">
                                                    03
                                                </div>
                                                <div className="number-title">
                                                    <h3 className="title">Design and Development</h3>
                                                </div>
                                                <p className="number-txt">Once finalized, our programmers then start transforming
                                                    the project into reality.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="rs-addon-number">
                                            <div className="number-text">
                                                <div className="number-area">
                                                    04
                                                </div>
                                                <div className="number-title">
                                                    <h3 className="title">Testing and Deployment</h3>
                                                </div>
                                                <p className="number-txt">And finally the product is Quality analyzed for any bugs
                                                    or errors and then deployed for users.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Process Section End --> */}
            </div>
            {/* <!-- Case Study Section Start --> */}

            {/* <!-- Team Section Start --> */}
            <div id="rs-team" className="rs-team style2 pt-110 pb-120 md-pt-75 md-pb-80">
                <div className="container">
                    <div className="sec-title2 text-center mb-30">
                        <div className="sub-text">Team</div>
                        <h2 className=" title title5 pb-20">
                            Expert IT Consultants
                        </h2>
                    </div>
                    <div className="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="true"
                        data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false"
                        data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1"
                        data-mobile-device-nav="false" data-mobile-device-dots="true" data-ipad-device="2"
                        data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2="2"
                        data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device="3"
                        data-md-device-nav="false" data-md-device-dots="true">
                        <div className="team-item">
                            <div className="images-part">
                                <img src="../scontent.fjai2-1.fna.fbcdn.net/v/t1.6435-9/160214772_2517093931769925_8102416812414853715_nddf7.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=174925&amp;_nc_ohc=4zQqdiNebE8AX81ddXM&amp;_nc_ht=scontent.fjai2-1.fna&amp;oh=00_AfDTtvfnvrlQLGz1ZuO1oFHx0RfhxO8hAZ7hI2zi1L5k3g&amp;oe=6433D939"
                                    alt="" />
                                <div className="social-icon">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3 className="person-name"><a href="single-team.html">Jitin Goyal</a></h3>
                                <span className="designation">Web Developer</span>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="images-part">
                                <img src="assets/images/bhaskaryogi3.jpg" alt="" width="" height="300" />
                                <div className="social-icon">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3 className="person-name"><a href="single-team.html">Bhaskar Yogi</a></h3>
                                <span className="designation">Software Developer</span>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="images-part">
                                <img src="assets/images/mohit.jpg" alt="" style={{ height: "400px" }} />
                                <div className="social-icon">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3 className="person-name"><a href="single-team.html">Mohit sharma</a></h3>
                                <span className="designation">App Developer</span>
                            </div>
                        </div>

                        <div className="team-item">
                            <div className="images-part">
                                <img src="assets/images/satnam.jpg" alt="" style={{ height: "400px" }} />
                                <div className="social-icon">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3 className="person-name"><a href="single-team.html">Satnam Swiggy Wala</a></h3>
                                <span className="designation">Software Engineer</span>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="images-part">
                                <img src="assets/images/mohit.jpg" alt="" style={{ height: "400px" }} />
                                <div className="social-icon">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3 className="person-name"><a href="single-team.html">Mohit sharma</a></h3>
                                <span className="designation">App Developer</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/* <!-- Team Section End --> */}
            {/* <!-- Testimonial Section Start --> */}
            <div className="rs-testimonial mb-5">
                <div className="container">
                    <div className="testi-effects-layer bg10">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="sec-title mb-60">
                                    <div className="sub-text new">Client's Review</div>
                                    <h2 className="title title4 white-color pb-20">
                                        What do people praise about Groot Software?
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                {/* <!-- Testimonial Section Start --> */}
                                <div className="rs-testimonial style4">
                                    <div className="rs-carousel owl-carousel" data-loop="true" data-items="1" data-margin="20"
                                        data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000"
                                        data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false"
                                        data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="true"
                                        data-mobile-device-dots="false" data-ipad-device="1" data-ipad-device-nav="true"
                                        data-ipad-device-dots="false" data-ipad-device2="1" data-ipad-device-nav2="true"
                                        data-ipad-device-dots2="false" data-md-device="1" data-md-device-nav="true"
                                        data-md-device-dots="false">
                                        <div className="testi-item">
                                            <div className="testi-content">
                                                <div className="images-wrap">
                                                    <img src="../scontent.fjai2-2.fna.fbcdn.net/v/t1.6435-9/55944901_2828971800661543_7535923117613383680_n5609.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=09cbfe&amp;_nc_ohc=ve779GdU2t8AX_uXtMU&amp;_nc_ht=scontent.fjai2-2.fna&amp;oh=00_AfB5SGpFptb97iunXkMUdOFSXCbLqwGojBScxn_sIWVRgw&amp;oe=6433FF2D"
                                                        alt="" />
                                                </div>
                                                <div className="testi-information">
                                                    <div className="testi-name">Ombeer yadav</div>
                                                    <span className="testi-title">Graphic Designer</span>
                                                </div>
                                            </div>
                                            <div className="item-content-basic">
                                                <div className="desc"><img className="quote" src="#" alt="" />Capitalize on low hanging
                                                    fruit to identify a ballpark value added activity to beta test. Override the
                                                    digital divide with additional clickthroughs from DevOps. Nanotechnology
                                                    immersion along the information highway.</div>
                                            </div>
                                        </div>
                                        <div className="testi-item">
                                            <div className="testi-content">
                                                <div className="images-wrap">
                                                    <img src="../scontent.fjai2-2.fna.fbcdn.net/v/t39.30808-6/321660215_1092281694778967_3398651921390939181_n2e91.jpg?stp=dst-jpg_p526x296&amp;_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=09cbfe&amp;_nc_ohc=ax43L9rfVboAX-bVGsy&amp;_nc_oc=AQkPGzQ6npQ4J9pFUxG2aMP38DkySJR8efW-plkYOpUWCIaKbnjh4eQte-q4PIonS34&amp;_nc_ht=scontent.fjai2-2.fna&amp;oh=00_AfDA4uUhYKEu-VNEQdu5GsjnDLKKiGlrPcWu5B_PifO9UA&amp;oe=6411CEAF"
                                                        alt="" />
                                                </div>
                                                <div className="testi-information">
                                                    <div className="testi-name">Suneel Kumar</div>
                                                    <span className="testi-title">Software Developer</span>
                                                </div>
                                            </div>
                                            <div className="item-content-basic">
                                                <div className="desc"><img className="quote"
                                                    src="assets/images/testimonial/main-home/quote3.png" alt="" />Good
                                                    developers, very cooperative, and best work delivery. One of the best mobile
                                                    app developers in Jaipur. I made an e-commerce app for my business and it's
                                                    actually getting a good response.</div>
                                            </div>
                                        </div>
                                        <div className="testi-item">
                                            <div className="testi-content">
                                                <div className="images-wrap">
                                                    <img src="../scontent.fjai2-3.fna.fbcdn.net/v/t39.30808-6/274868424_3067504786913696_4930984102050482281_n8820.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=09cbfe&amp;_nc_ohc=HCWeIl3PMQcAX-fEWxt&amp;_nc_ht=scontent.fjai2-3.fna&amp;oh=00_AfCAFliKWOVxqiDcjys7pTgDbL2UvMXfszmlK7IrzuDZOw&amp;oe=64115BD3"
                                                        alt="" />
                                                </div>
                                                <div className="testi-information">
                                                    <div className="testi-name">Pooran Yadav</div>
                                                    <span className="testi-title"> Web Developer</span>
                                                </div>
                                            </div>
                                            <div className="item-content-basic">
                                                <div className="desc"><img className="quote"
                                                    src="assets/images/testimonial/main-home/quote3.png" alt="" />best website
                                                    developers in jaipur at reasonable cost. Also deliver the project in time..
                                                    very professional and experienced..quick response.</div>
                                            </div>
                                        </div>
                                        <div className="testi-item">
                                            <div className="testi-content">
                                                <div className="images-wrap">
                                                    <img src="../scontent.fjai2-4.fna.fbcdn.net/v/t39.30808-1/290345800_1675818662779459_4691046277076099934_nd511.jpg?stp=dst-jpg_p200x200&amp;_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=a3B4Mn7aaiwAX_qFxbT&amp;_nc_ht=scontent.fjai2-4.fna&amp;oh=00_AfDJuJBaA79Ho_jEXQML5Br7aK66Yt3cBZqEfQVPZXEV0A&amp;oe=641156E4"
                                                        alt="" />
                                                </div>
                                                <div className="testi-information">
                                                    <div className="testi-name">Rajender Parjapati Sidhmukh</div>
                                                    <span className="testi-title">Web Developer</span>
                                                </div>
                                            </div>
                                            <div className="item-content-basic">
                                                <div className="desc"><img className="quote"
                                                    src="assets/images/testimonial/main-home/quote3.png" alt="" />Capitalize
                                                    on low hanging fruit to identify a ballpark value added activity to beta
                                                    test. Override the digital divide with additional clickthroughs from DevOps.
                                                    Nanotechnology immersion along the information highway.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Testimonial Section End --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial Section End --> */}
            {/* <!-- Technology Section Start --> */}
            <div className="rs-technology style2 bg11 pt-110 pb-115 md-pt-75 md-pb-80">
                <div className="container">
                    <div className="sec-title2 text-center mb-45">
                        <span className="sub-text white-color">Technology Index</span>
                        <h2 className="title title2 white-color">
                            What Technology We Are Using For Our Valued Customers
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                            <div className="technology-wrap">
                                <div className="rs-grid-figure">
                                    <div className="logo-img">
                                        <a>
                                            <img className="hover-img" src="assets/images/technology/style4/hover-img/1.png"
                                                alt="hover-image" style={{ width: "100px" }} />
                                            <img className="main-img" src="assets/images/technology/style4/main-img/1.png"
                                                alt="hover-image" style={{ width: "100px" }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="logo-title">
                                    <h4 className="title">Node Js</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                            <div className="technology-wrap">
                                <div className="rs-grid-figure">
                                    <div className="logo-img">
                                        <a>
                                            <img className="hover-img" src="assets/images/technology/style4/hover-img/2.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                            <img className="main-img" src="assets/images/technology/style4/main-img/2.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="logo-title">
                                    <h4 className="title">Python</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                            <div className="technology-wrap">
                                <div className="rs-grid-figure">
                                    <div className="logo-img">
                                        <a>
                                            <img className="hover-img" src="assets/images/technology/style4/hover-img/3.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                            <img className="main-img" src="assets/images/technology/style4/main-img/3.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="logo-title">
                                    <h4 className="title"> My Sql</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                            <div className="technology-wrap">
                                <div className="rs-grid-figure">
                                    <div className="logo-img">
                                        <a>
                                            <img className="hover-img" src="assets/images/technology/style4/hover-img/4.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                            <img className="main-img" src="assets/images/technology/style4/main-img/4.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="logo-title">
                                    <h4 className="title">Firebase</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                            <div className="technology-wrap">
                                <div className="rs-grid-figure">
                                    <div className="logo-img">
                                        <a>
                                            <img className="hover-img" src="assets/images/technology/style4/hover-img/5.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                            <img className="main-img" src="assets/images/technology/style4/main-img/5.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="logo-title">
                                    <h4 className="title">Tensorflow</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                            <div className="technology-wrap">
                                <div className="rs-grid-figure">
                                    <div className="logo-img">
                                        <a>
                                            <img className="hover-img" src="assets/images/technology/style4/hover-img/6.png"
                                                alt="grid-image" style={{ width: "100px;" }} />
                                            <img className="main-img" src="assets/images/technology/style4/main-img/6.png"
                                                alt="grid-image" style={{ width: "100px" }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="logo-title">
                                    <h4 className="title">Docker</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Technology Section End --> */}
            {/* </div > */}
            {/* <!-- Partner Start --> */}
            <div className="rs-partner pt-80 pb-70">
                <h4 className="text-white text-center partner_head">Organizations we are connected with</h4>
                <div className="container mt-5">
                    <div className="rs-carousel owl-carousel" data-loop="true" data-items="5" data-margin="30" data-autoplay="true"
                        data-hoverpause="true" data-autoplay-timeout="2500" data-smart-speed="800" data-dots="false"
                        data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="2"
                        data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="3"
                        data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2="3"
                        data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device="5"
                        data-md-device-nav="false" data-md-device-dots="false">
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/1.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/1.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/2.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/2.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/3.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/3.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/4.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/4.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/5.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/5.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/6.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/6.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/7.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/7.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/8.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/8.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="https://rstheme.com/">
                                    <img className="hover-logo" src="assets/images/partner/9.png" alt="" />
                                    <img className="main-logo" src="assets/images/partner/9.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Partner End --> */}
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
                                            <a href="tel:+917790847091">+91-7597788711</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <div className="desc">
                                            <a href="mailto:info@grootsoftware.com"> info@mayanksoftwares.com</a>
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
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/Blog">Blog</a></li>
                                    {/* <li><a href="shop.html">Shop</a></li>
                                    <li><a href="faq.html">FAQs</a></li> */}
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
        </>
    )
}

export default Home