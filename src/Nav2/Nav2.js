import React from 'react'
import '../Nav2/Nav2.css'
export default function Nav2() {
    return (
        <div>
            <div>
                <nav class=" navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container container-fluid">
                        <img class="navbar-brand" src={require('../images/ms (4).png')} style={{ height: "50px" }} />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class=" navbar justify-content-center" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Detail</a></li>
                                        <li><a class="dropdown-item" href="#">Team</a></li>

                                    </ul>
                                </li>

                            </ul>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Web Development</a></li>
                                        <li><a class="dropdown-item" href="#">Windows Development</a></li>
                                        <li><a class="dropdown-item" href="#">Android</a></li>
                                        <li><a class="dropdown-item" href="#">IOS</a></li>
                                        <li><a class="dropdown-item" href="#">Database</a></li>
                                        <li><a class="dropdown-item" href="#">Tally Customization
                                        </a></li>
                                        <li><a class="dropdown-item" href="#">Web Hosting</a></li>
                                        <li><a class="dropdown-item" href="#">Email Server</a></li>
                                        <li><a class="dropdown-item" href="#">Cloud Server</a></li>
                                    </ul>
                                </li>

                            </ul>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Customer Testimonial
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Detail with Proof</a></li>
                                     
                                    </ul>
                                </li>

                            </ul>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Partener
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                     
                                    </ul>
                                </li>

                            </ul>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item ">
                                    <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CTA
                                    </a>
                                    <ul class="dropdown-menu">
                                   
                                    
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
