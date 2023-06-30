import React from 'react'
import '../assects/canvas.css'
import '../assects/magnific.css'
import '../assects/menu.css'
import '../assects/new.css'
import '../assects/responsive.css'
import '../Nav1/Nav1.css'
import '../assects/style.css'
export default function Nav1() {
    return (
        <div>
            {/* <div>
                <div className='nav-1 justify-content-end gap-4 px-4'>
                    <a href='/'>Contact us</a>
                    <a href='tel:0000000000'>Question? 0987654321</a>
                    <a href='mailto:abcd89@mail.com'>abcd89@gmail.com</a>
                    <a href='/'>Join us</a>
                </div>
            </div> */}

<div class="topbar-area style2">
          <div class="container">
            <div class="row y-middle">
              <div class="col-lg-8">
                <ul class="topbar-contact">
                  <li>
                    <i class="flaticon-email"></i>
                    <a href="mailto:info@grootsoftware.com ">info@grootsoftware.com</a>
                  </li>
                  <li>
                    <i class="flaticon-call"></i>
                    <a href="tel:+917790847091"> +91 7790847091</a>
                  </li>
                  <li>
                    <i class="flaticon-location"></i>
                    73/34, Paramhans Marg, Mansarovar, Jaipur
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 text-right">
                <div class="toolbar-sl-share">
                  <ul>
                    <li class="opening"> <em><i class="flaticon-clock"></i> 08:00am-9:00pm</em> </li>
                    <li><a href="https://www.facebook.com/GrootSoftware/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/grootsoftware" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://github.com/grootsoftware" target="_blank"><i class="fa fa-git"></i></a></li>
                    <li><a href="https://www.instagram.com/grootsoftware/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/grootsoftware/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://stackoverflow.com/c/grootsoftware/" target="_blank"><i class="fa fa-stack-overflow"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
    )
}
