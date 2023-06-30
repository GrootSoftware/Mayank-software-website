import React from 'react'

export default function About() {
    return (
        <div>
            {/* <!-- About Section Start --> */}
            <div class="rs-about style3 pt-120 pb-120 md-pt-75 md-pb-80">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="sec-title2 mb-30">
                                <div class="sub-text">About Groot Software</div>
                                <h4 class="">
                                    Proudly emerged as a renowned name in software and web development industry in the short time since arrival.
                                </h4>
                                <div class="desc desc2">
                                    We only started a few years ago, but the expertise, dedication, and consistency of our team helped us earn a reputation among acclaimed software development companies of India and the US.
                                </div>
                                <div class="btn-part mt-40">
                                    <a class="readon discover more" href="about-us.html">About Us</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 md-pt-40">
                            <div class="rs-animation-image">
                                <div class="pattern-img">
                                    <img class="dance3" src={require('../images/round.png')} alt="" />

                                </div>
                                <div class="middle-img">
                                    {/* <img src={require('../images/about1.png')} alt=""/>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About Section End --> */}




            {/* <!-- Progress Section Start --> */}
            <div class="progress-pie-part pb-110 md-pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 md-pb-40">
                            <div class="box">
                                <div class="chart" data-percent="100" data-scale-color="#ffb400"><span>95%</span></div>
                                <h2 class="title">Satisfied Clients</h2>
                            </div>
                        </div>
                        <div class="col-lg-3 md-pb-40">
                            <div class="box">
                                <div class="chart" data-percent="100" data-scale-color="#ffb400"><span>80+</span></div>
                                <h2 class="title">Completed Projects</h2>
                            </div>
                        </div>
                        <div class="col-lg-3 md-pb-40">
                            <div class="box">
                                <div class="chart" data-percent="100" data-scale-color="#ffb400"><span>6+</span></div>
                                <h2 class="title">Industries Served</h2>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="box">
                                <div class="chart" data-percent="100" data-scale-color="#ffb400"><span>15</span></div>
                                <h2 class="title">Expert Team Member</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Progress Section End --> */}




            {/* <!-- Services Section Start --> */}
            <div class="rs-services style4 modify1 gray-color pt-110 pb-120 md-pt-75 md-pb-40 sm-pb-70">
                <div class="container">
                    <div class="sec-title2 text-center mb-45">
                        <span class="sub-text">Programming languages we expertize in.</span>
                        <h2>
                            You can trust us with following programming languages.
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 mb-20">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img src={require('../images/php.png')} alt="" />
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">PHP</a></h2>
                                    <p class="desc">
                                        We have programmers who can deliver your PHP programming project in no time.
                                    </p>
                                    <div class="services-btn2">
                                        <a href="web-development.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-20">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img src={require('../images/java.png')} alt="" />
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">Java</a></h2>
                                    <p class="desc">
                                        We have programmers who can deliver your Java programming project in no time.
                                    </p>
                                    <div class="services-btn2">
                                        <a href="web-development.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-20">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img src={require('../images/react.png')} alt="" />
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">React JS</a></h2>
                                    <p class="desc">
                                        We have programmers who can deliver your React JS programming project in no time.
                                    </p>
                                    <div class="services-btn2">
                                        <a href="web-development.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img src={require('../images/angular.png')} alt="" />
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">Angular </a></h2>
                                    <p class="desc">
                                        We have programmers who can deliver your Angular programming project in no time.
                                    </p>
                                    <div class="services-btn2">
                                        <a href="web-development.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img src={require('../images/html.png')} alt="" />
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">HTML/CSS</a></h2>
                                    <p class="desc">
                                        We have programmers who can deliver your HTML/CSS programming project in no time.
                                    </p>
                                    <div class="services-btn2">
                                        <a href="web-development.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img src={require('../images/word.png')} alt="" />
                                </div>
                                <div class="services-content">
                                    <h2 class="title"><a href="web-development.html">WordPress</a></h2>
                                    <p class="desc">
                                        We have programmers who can deliver your WordPress programming project in no time.
                                    </p>
                                    <div class="services-btn2">
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
            <div class="rs-call-action bg8 pt-120 pb-120 md-pt-75 md-pb-80">
                <div class="container">
                    <div class="sec-title2 text-center">
                        <p class="lets-talk">Let’s Talk</p>
                        <h2 class="title title4 white-color">
                            Got a web development project? Let's get you connected with our experts and transform your vision into reality.
                        </h2>
                        <div class="call-btn mt-30">
                            <a class="readon discover started" href="contact.html">Get in Touch</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Call Action Section End --> */}








            {/* <!-- Process Section Start --> */}
            <div class="rs-process style3 gray-color pt-120 pb-120 md-pt-75 md-pb-80">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="process-wrap bg9">
                                <div class="sec-title mb-30">
                                    <div class="sub-text new">How We Work</div>
                                    <h2 class="title title4 white-color pb-20">
                                        How Groot Software can help your business
                                    </h2>
                                    <div class="desc white-color">
                                        When you trust us with your digital venture, it becomes our responsibility to fulfill your requirements and provide you the best output possible. Here's an overview of how it works.
                                    </div>
                                    <div class="btn-part mt-40">
                                        <a class="readon discover started" href="contact.html">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 pl-35 md-pt-40 md-pl-15">
                            <div class="row">
                                <div class="col-md-6 mb-20">
                                    <div class="rs-addon-number">
                                        <div class="number-text">
                                            <div class="number-area">
                                                01
                                            </div>
                                            <div class="number-title">
                                                <h3 class="title">Discussing The Ideas & Concepts</h3>
                                            </div>
                                            <p class="number-txt">Ofcourse it begins with you describing us the vision that you have regarding the project.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-20">
                                    <div class="rs-addon-number">
                                        <div class="number-text">
                                            <div class="number-area">
                                                02
                                            </div>
                                            <div class="number-title">
                                                <h3 class="title">Deciding the Technology & Plan</h3>
                                            </div>
                                            <p class="number-txt">Our experts then process the information and prepare a blueprint with required technology.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 md-mb-20">
                                    <div class="rs-addon-number">
                                        <div class="number-text">
                                            <div class="number-area">
                                                03
                                            </div>
                                            <div class="number-title">
                                                <h3 class="title">Design and Development</h3>
                                            </div>
                                            <p class="number-txt">Once finalized, our programmers then start transforming the project into reality.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="rs-addon-number">
                                        <div class="number-text">
                                            <div class="number-area">
                                                04
                                            </div>
                                            <div class="number-title">
                                                <h3 class="title">Testing and Deployment</h3>
                                            </div>
                                            <p class="number-txt">And finally the product is Quality analyzed for any bugs or errors and then deployed for users.</p>
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
    )
}
