import React from 'react'
import "../App.css"
import logo from "../assets/images/ms (4).png";

import { Link } from 'react-router-dom';


function Header() {
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
                    {/* <!--Header Start--> */}
                    <header id="rs-header" className="rs-header style2">
                        {/* <!-- Topbar Area Start --> */}
                        <div className="topbar-area style2">
                            <div className="container">
                                <div className="row y-middle">
                                    <div className="col-lg-8">
                                        <ul className="topbar-contact">
                                            <li>
                                                <i className="flaticon-email"></i>
                                                <a href="mailto:info@grootsoftware.com ">info@mayanksoftwares.com</a>
                                            </li>
                                            <li>
                                                <i className="flaticon-call"></i>
                                                <a href="tel:+917790847091"> +917597788711</a>
                                            </li>
                                            <li>
                                                <i className="flaticon-location"></i>
                                                p73/34, Paramhans Marg, Mansarovar, Jaipur
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 text-right">
                                        <div className="toolbar-sl-share">
                                            <ul>
                                                <li className="opening"> <em><i className="flaticon-clock"></i> 08:00am-9:00pm</em>
                                                </li>
                                                <li><a href="https://www.facebook.com/GrootSoftware/" target="_blank"><i
                                                    className="fa fa-facebook"></i></a></li>
                                                <li><a href="https://twitter.com/grootsoftware" target="_blank"><i
                                                    className="fa fa-twitter"></i></a></li>
                                                <li><a href="https://github.com/grootsoftware" target="_blank"><i
                                                    className="fa fa-git"></i></a></li>
                                                <li><a href="https://www.instagram.com/grootsoftware/" target="_blank"><i
                                                    className="fa fa-instagram"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/grootsoftware/" target="_blank"><i
                                                    className="fa fa-linkedin"></i></a></li>
                                                <li><a href="https://stackoverflow.com/c/grootsoftware/" target="_blank"><i
                                                    className="fa fa-stack-overflow"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Topbar Area End --> */}
                        {/* <!-- Menu Start --> */}
                        <nav className="rizwan">
                            <div className="brand-and-icon">
                                <Link to="/">
                                    <a href="index-2.html" className="navbar-brand"><img className="groot-logo-img"
                                        src={logo} /></a>
                                </Link>
                                <button type="button" className="navbar-toggler">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>

                            <div className="navbar-collapse">
                                <ul className="navbar-bar">

                                    <li>
                                        <Link to="/about">
                                            <a href="#" className="menu-link">
                                                About Us

                                                <span className="drop-icon">
                                                    <i className="fa fa-arrow-down"></i>
                                                </span>
                                            </a>
                                        </Link>

                                        <div className="sub-menu">
                                            {/* <!-- item --> */}
                                            <div className="sub-menu-item">
                                                {/* <h5>ABOUT US</h5> */}
                                                {/* <Link to={Contact} */}

                                                {/* <ul>
                                                    <li><a href="about-us.html">Company Profile</a></li> */}
                                                {/* <!-- <li><a href="groot-infrastructure.php">Infrastructure</a></li> --> */}
                                                {/* <li><a href="#">Life @ Groot</a></li> */}
                                                {/* <li><a href="contact-us.html">Contact Us</a></li> */}
                                                {/* <!-- <li><a href="groot-partnership-programs.php">Partnership</a></li> --> */}
                                                {/* </ul> */}
                                                {/* </Link> */}
                                            </div>
                                            {/* <!-- end of item --> */}
                                            {/* <!-- item --> */}
                                            <div className="sub-menu-item">
                                                {/* <!-- <h4>AWARDS</h4> --> */}
                                                {/* <h4></h4> */}
                                                <ul>
                                                    {/* <!-- <li><a href="our-strategic-alliance.php">Alliances</a></li> --> */}
                                                    {/* <!-- <li><a href="industry-ranking-and-awards.php">Awards</a></li> --> */}
                                                    {/* <li><a href="groot-software-testimonials.html">Testimonials</a></li> */}
                                                    {/* <li><a href="our-portfolio.html">Portfolio</a></li> */}
                                                    {/* <li><a href="career-at-groot-software.html">Career @ Groot</a></li> */}
                                                </ul>
                                            </div>
                                            {/* <!-- end of item --> */}
                                            {/* <!-- item --> */}
                                            {/* <!-- <div className="sub-menu-item">
                                        <h5>RESOURCES</h5>
                                        <ul>
                                            <li><a href="blog.php">Blog</a></li>
                                            <li><a href="career-at-groot-software.php">Career @ Groot</a></li>
                                            <li><a href="contact-us.php">Contact Us</a></li>
                                            <li><a href="get-a-quote.php">Get a Quote</a></li>
                                        </ul>
                                    </div> --> */}
                                            {/* <!-- end of item --> */}
                                            {/* <!-- item --> */}
                                            {/* <div className="sub-menu-item">
                                                <ul>
                                                    <li><a className="quote-btn-wide" href="https://www.grootacademy.com/">Learn at
                                                        Groot</a></li>
                                                </ul>
                                            </div> */}
                                            {/* <!-- end of item --> */}
                                        </div>
                                    </li>

                                    <li>
                                        <Link to="/Blog">
                                            <a href="#" className="menu-link">
                                            Blog
                                                <span className="drop-icon">
                                                    <i className="fa fa-arrow-down"></i>
                                                </span>
                                            </a>
                                        </Link>

                                        <div className="sub-menu">
                                            {/* <!-- item --> */}
                                            <div className="sub-menu-item">
                                                {/* <h5>ABOUT US</h5> */}
                                                {/* <Link to={Contact} */}

                                                {/* <ul>
                                                    <li><a href="about-us.html">Company Profile</a></li> */}
                                                {/* <!-- <li><a href="groot-infrastructure.php">Infrastructure</a></li> --> */}
                                                {/* <li><a href="#">Life @ Groot</a></li> */}
                                                {/* <li><a href="contact-us.html">Contact Us</a></li> */}
                                                {/* <!-- <li><a href="groot-partnership-programs.php">Partnership</a></li> --> */}
                                                {/* </ul> */}
                                                {/* </Link> */}
                                            </div>
                                            {/* <!-- end of item --> */}
                                            {/* <!-- item --> */}
                                            <div className="sub-menu-item">
                                                {/* <!-- <h4>AWARDS</h4> --> */}
                                                {/* <h4></h4> */}
                                                <ul>
                                                    {/* <!-- <li><a href="our-strategic-alliance.php">Alliances</a></li> --> */}
                                                    {/* <!-- <li><a href="industry-ranking-and-awards.php">Awards</a></li> --> */}
                                                    {/* <li><a href="groot-software-testimonials.html">Testimonials</a></li> */}
                                                    {/* <li><a href="our-portfolio.html">Portfolio</a></li> */}
                                                    {/* <li><a href="career-at-groot-software.html">Career @ Groot</a></li> */}
                                                </ul>
                                            </div>
                                            {/* <!-- end of item --> */}
                                            {/* <!-- item --> */}
                                            {/* <!-- <div className="sub-menu-item">
                                        <h5>RESOURCES</h5>
                                        <ul>
                                            <li><a href="blog.php">Blog</a></li>
                                            <li><a href="career-at-groot-software.php">Career @ Groot</a></li>
                                            <li><a href="contact-us.php">Contact Us</a></li>
                                            <li><a href="get-a-quote.php">Get a Quote</a></li>
                                        </ul>
                                    </div> --> */}
                                            {/* <!-- end of item --> */}
                                            {/* <!-- item --> */}
                                            {/* <div className="sub-menu-item">
                                                <ul>
                                                    <li><a className="quote-btn-wide" href="https://www.grootacademy.com/">Learn at
                                                        Groot</a></li>
                                                </ul>
                                            </div> */}
                                            {/* <!-- end of item --> */}
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="menu-link">
                                            <Link to="/Mobileappdevelopment">
                                                Services
                                            </Link>
                                            <span className="drop-icon">
                                                <i className="fa fa-arrow-down"></i>
                                            </span>
                                        </a>
                                        <div className="sub-menu">
                                            {/* <!-- item --> */}
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">Web Development</a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">Windows Development
                                                </a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">Android
                                                </a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">IOS
                                                </a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">Database

                                                </a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">Tally Customization
                                                </a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">Web Hosting
                                                </a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">Email Server
                                                </a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Webdevelopment"> */}
                                                <h4><a href="#testwebdevelopment">Cloud Server
                                                </a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style="visibility: hidden;>--> */}
                                                {/* <!--  <li><a href="php-development.php">PHP</a></li > --> */}
                                                {/* < !-- < li > <a href="magento-development-services.php">Magento</a></li > --> */}
                                                {/* < !--  < li > <a href="java-script-development-company.php">JavaScript</a></li > --> */}
                                                {/* < !--  < li > <a href="mean-stack-development.php">MEANStack</a></li > --> */}
                                                {/* < !--  < li > <a href="mern-stack-development.php">MERNStack</a></li > --> */}
                                                {/* < !--  < li > <a href="full-stack-development-company.php">Full Stack</a></li > --> */}
                                                {/* < !--  < li > <a href="NodeJS-development-services.php">Node</a></li > --> */}
                                                {/* < !--  < li > <a href="Symfony-development-services.php">Symfony</a></li > --> */}
                                                {/* < !--  < li > a href="Wordpress-development-services.php">Wordpress</a></li > --> */}
                                                {/* < !--</ul > --> */}
                                            </div >
                                            <div className="sub-menu-item">
                                                {/* <Link to="/Mobileappdevelopment"> */}
                                                <h4><a href="#testmobileappdevelopment" >Mobile App Development</a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style={{visibility: "hidden"}}>--> */}
                                                {/* <!-- <li><a href="iphone-application-development.php">iPhone</a></li> --> */}
                                                {/* <!--  <li><a href="android-application-development.php">Android</a></li>--> */}
                                                {/* <!-- <li><a href="ipad-application-development.php">iPad</a></li> --> */}
                                                {/* <!--  <li><a href="react-native-app-development.php">React Native</a></li>--> */}
                                                {/* <!--  <li><a href="hybrid-mobile-application-development.php">Hybrid</a></li>--> */}
                                                {/* <!--  <li><a href="ionic-mobile-app-development.php">Ionic</a></li>--> */}
                                                {/* <!--  <li><a href="flutter-app-development.php">Flutter</a></li>--> */}
                                                {/* <!--  <li><a href="wearable-devices-app-development.php">Wearables</a></li>--> */}
                                                {/* <!--  <li><a href="mobile-web-design.php">mobile UX/UI</a></li>--> */}
                                                {/* <!--</ul>--> */}
                                            </div>

                                            <div className="sub-menu-item">
                                                {/* <Link to="/Softwaredevelopment"> */}
                                                <h4><a href="#test">Software Development</a></h4>
                                                {/* </Link> */}
                                                {/* <!--<ul style={{visibility: "hidden"}}>--> */}
                                                {/* <!-- <li><a href="iphone-application-development.php">iPhone</a></li> --> */}
                                                {/* <!--  <li><a href="android-application-development.php">Android</a></li>--> */}
                                                {/* <!-- <li><a href="ipad-application-development.php">iPad</a></li> --> */}
                                                {/* <!--  <li><a href="react-native-app-development.php">React Native</a></li>--> */}
                                                {/* <!--  <li><a href="hybrid-mobile-application-development.php">Hybrid</a></li>--> */}
                                                {/* <!--  <li><a href="ionic-mobile-app-development.php">Ionic</a></li>--> */}
                                                {/* <!--  <li><a href="flutter-app-development.php">Flutter</a></li>--> */}
                                                {/* <!--  <li><a href="wearable-devices-app-development.php">Wearables</a></li>--> */}
                                                {/* <!--  <li><a href="mobile-web-design.php">mobile UX/UI</a></li>--> */}
                                                {/* <!--</ul>--> */}
                                            </div >
                                            {/* < !--end of item-- > */}
                                            {/* < !--item --> */}




                                            {/* < !--end of item-- > */}
                                            {/* < !--item --> */}
                                            {/* < !--< div className="sub-menu-item" style={{visibility: "hidden"}} > --> */}
                                            {/* < !--  < h5 > <a href="software-consulting.php">Software Consulting</a></h5 > --> */}
                                            {/* < !--  < ul > --> */}
                                            {/* < !--    < li > <a href="saas-development-services.php">SaaS</a></li > --> */}
                                            {/* < !--    < li > <a href="crm-development.php">CRM</a></li > --> */}
                                            {/* < !--    < li > <a href="business-intelligence-application-development.php">BI</a></li > --> */}
                                            {/* < !--    < li > <a href="ERP-software.php">ERP</a></li > --> */}
                                            {/* < !--    < li > <a href="cloud-computing-solutions">Cloud</a></li > --> */}
                                            {/* < !--    < li > <a href="Middleware-solution.php">MIddleware</a></li > --> */}
                                            {/* < !--  </ul > --> */}
                                            {/* < !--</div > --> */}
                                            {/* < !--end of item-- > */}
                                            {/* < !--item --> */}
                                            <div className="sub-menu-item" style={{ visibility: "hidden" }}>
                                                <h5>MicroSoft Solutions</h5>
                                                <ul>
                                                    <li><a href="asp-net-development-services.html">Asp.Net</a></li>
                                                    <li><a href="sharepoint-development-solutions.html">Sharpoint</a></li>
                                                    <li><a href="windows-azure-development-services.html">Azure</a></li>
                                                    <li><a href="dynamics-crm-solutions.html">Dynamics CRM</a></li>
                                                    <li><a href="microsoft-sitecore-cms-development.html">Sitecore CMS</a></li>
                                                    <li><a href="microsoft-sitecore-cms-development.html">Site CRM</a></li>
                                                </ul>
                                            </div >
                                            {/* < !--end of item-- > */}
                                        </div>
                                    </li >

                                    <li>
                                        <Link to="/Contact">
                                            <a href="contact-us.html">Contact Us</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                            <a href="https://www.grootacademy.com/enroll.php"> Enroll Now</a>
                                        </li> */}
                                    <li>
                                        <a href="#" className="menu-link" style={{ visibility: "hidden" }}>
                                            Solutions

                                            <span className="drop-icon">
                                                <i className="fa fa-arrow-down"></i>
                                            </span>
                                        </a>

                                        <div className="sub-menu" style={{ visibility: "hidden" }}>
                                            {/* <!-- item --> */}
                                            <div className="sub-menu-item" style={{ visibility: "hidden" }}>
                                                <h5>Technologies</h5>
                                                <ul>
                                                    {/* <!-- <li><a href="apple-watch-app-development.php">Apple Watch</a></li> --> */}
                                                    <li><a href="aws-cloud-consulting.html">AWS</a></li>
                                                    <li><a href="big-data-solution.html">Big Data</a></li>
                                                    {/* <!-- <li><a href="bitcoin-app-development.php">Bitcoin</a></li> --> */}
                                                    <li><a href="e-commerce-solutions.html">Ecommerce</a></li>
                                                    <li><a href="elearning-gamification.html">E-Learning</a></li>
                                                    <li><a href="enterprise-mobility.html">Enterprise Mobility</a></li>
                                                    {/* <!-- <li><a href="iot-app-development.php">IoT</a></li> --> */}
                                                    {/* <!-- <li><a href="tvOS-app-development.php">TvOS</a></li> --> */}
                                                    <li><a href="machine-learning-solutions.html">Machine Learning</a></li>
                                                    <li><a href="artificial-intelligence-solutions.html">AI</a></li>
                                                    <li><a href="crm-development.html">CRM</a></li>

                                                </ul>
                                            </div>
                                            {/* <!-- end of item -->NDUSTRIES */}
                                            {/* <!-- item --> */}
                                            {/* <!-- <div className="sub-menu-item" style="visibility: hidden;">
                                        <h4><a href="on-demand-solutions.php">ON DEMAND SOLUTIONS</a></h4>
                                        <ul>
                                            <li><a href="food-portal.php">Food Delivery</a></li>
                                            <li><a href="ewallet-app-development.php">E-Wallet</a></li>
                                            <li><a href="on-demand-taxi-booking-app-development.php">Taxi Booking</a></li>
                                            <li><a href="sports-betting-app-development.php">Supports Betting</a></li>
                                            <li><a href="grocery-delivery-app-development.php">Gorocery Delivery</a></li>
                                            <li><a href="handyman-on-demand-app-development.php">Handymen</a></li>
                                            <li><a href="on-demand-medicine-delivery-app-development.php">Medicine Delivery</a></li>
                                            <li><a href="on-demand-car-wash-app-development.php">Car Wash</a></li>
                                            <li><a href="fantasy-sports-application-development.php">Fantasy Sports</a></li>
                                            <li><a href="elearning-app-development.php">eLearning</a></li>
                                            <li><a href="online-dating-app-development.php">Dating</a></li>
                                            <li><a href="on-demand-laundry-app-development.php">Laundry</a></li>
                                        </ul>
                                    </div> --> */}
                                            {/* <!-- end of item --> */}
                                            {/* <!-- item --> */}
                                            <div className="sub-menu-item" style={{ visibility: "hidden" }}>
                                                <h4><a href="#">INDUSTRIES</a></h4>
                                                <ul>
                                                    {/* <!-- Ref From https://www.leewayhertz.com/healthcare-software-development/
                                            https://www.octalsoftware.com/healthcare-solutions--> */}
                                                    <li><a href="healthcare-solutions.html">Healthcare</a></li>
                                                    <li><a href="banking-finance-solutions.html">Banking/FinTech</a></li>
                                                    <li><a
                                                        href="transportation-automobile-solutions.html">Transportation/Logistics</a>
                                                    </li>
                                                    {/* <li><a href="travel-leisure-solutions.html">Travel</a></li>
                                                    <li><a href="job-portal.html">Career</a></li>
                                                    <li><a href="manufacturing-software-development.html">Manufacturing</a></li>
                                                    <li><a href="edtech-app-development.html">EdTech</a></li>
                                                    <li><a href="on-demand-solutions.html">On-Demand Development</a></li>
                                                    <li><a href="on-demand-solutions.html">B2B & B2C</a></li>
                                                    <li><a href="on-demand-solutions.html">Job Portal</a></li>
                                                    <li><a href="on-demand-solutions.html">Marketplace</a></li>
                                                    <li><a href="food-restaurant-solutions.html">Food & Restaurant</a></li>
                                                    <li><a href="real-estate-housing-solutions.html">Real Estate</a></li>
                                                    <li><a href="startup-product-development.html">Startup</a></li> */}
                                                    {/* <!-- Ref From
                                            https://www.leewayhertz.com/fintech-software-development/?utm_source=menu
                                            https://www.octalsoftware.com/banking-finance-solutions
  --> */}
                                                    {/* <!-- <li><a href="education-elearning-solutions.php">E-Learing</a></li> --> */}
                                                    {/* <!-- Ref from https://www.leewayhertz.com/logistics-software-development/
                                            https://www.octalsoftware.com/transportation-automobile-solutions --> */}
                                                    {/* <!-- <li><a href="media-entertainment-solutions.php">Media & Enterainment</a></li> --> */}
                                                    {/* <!-- <li><a href="consumer-electronics.php">Consumer Electronics</a></li> --> */}
                                                    {/* <!-- ref from https://www.leewayhertz.com/insurance-software-development/ --> */}
                                                    {/* <!-- <li><a href="insurance-software-development.php">Insurance</a></li> --> */}
                                                    {/* <!-- ref from https://www.leewayhertz.com/manufacturing-software-development/ --> */}
                                                    {/* <!-- ref from https://www.leewayhertz.com/edtech-app-development/ --> */}
                                                    {/* <!-- ref from https://www.leewayhertz.com/startup-product-development/ --> */}


                                                </ul>
                                            </div>


                                            {/* <!-- end of item --> */}
                                            {/* <!-- item --> */}
                                            {/* <!-- <div className="sub-menu-item">
                                        <h4><a href="#">PORTALS</a></h4>
                                        <ul>
                                            <li><a href="b2b-and-b2c-portal.php">B2B & B2C</a></li>
                                            <li><a href="job-portal.php">Job Portal</a></li>
                                            <li><a href="daily-deals-website-development.php">Daily Deals</a></li>
                                            <li><a href="dating-portal.php">Dating</a></li>
                                            <li><a href="social-networking.php">Socail Networking</a></li>
                                            <li><a href="food-portal.php">Food Portal</a></li>
                                            <li><a href="online-marketplace-portal.php">Marketplace</a></li>
                                            <li><a href="price-comparison-portal.php">Price Comparison</a></li>
                                            <li><a href="real-estate.php">Real Estate</a></li>
                                        </ul>
                                    </div> --> */}
                                            {/* <!-- end of item --> */}

                                        </div>
                                    </li>

                                    {/* <!-- < li >
                                <a href="our-portfolio.php">PORTFOLIO</a>
                            </li >
                            <li>
                                <a href="contact-us.php">Contact Us</a>
                            </li> --> */}
                                    {/* < !-- < li >
                                <a style="font-size: 14px; background-image: linear-gradient(90deg, #708409 0%, #b7d327 100%); padding: 13px 22px; border-radius: 3px; color: #fff; font-weight: 500; margin-top: 10%;" className="quote-btn" href="#">Get A Quote</a>
                            </li > --> */}

                                </ul >
                            </div >
                        </nav >
                        {/* < !--Menu End-- > */}
                    </header >
                    {/* < !--Header End-- > */}
                </div>
            </div >
        </>
    )
}

export default Header;