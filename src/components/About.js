import React from 'react'
import './css/style.css'

function About() {
    return (
        <div>
            <section id="about_area" class="section_padding">
			<div class="container">				
				<div class="row">					
					<div class="col-md-5 col-sm-5 col-xs-12">
						<div class="about_img  wow fadeInLeft">
							<img src="img/about.png" class="img-responsive" alt="" />
						</div>
					</div>
					
					<div class="col-md-7 col-sm-7 col-xs-12">
						<div class="about_content">													
							<h2 class="about_title">About Me</h2>																					
							<p>
								 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exeracita aation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

							</p>						
							<img class="about-signature" src="img/sign.png" alt="signature" />
							<div class="about-buttons">
								<a href="/" class="main-btn">Hire Me</a>
								<a href="http://www.youtu.be/94yLIKZ-HjU" data-autoplay="true" data-vbtype="video" class="video-popup vide_btn vbox-item"><i class="fa fa-play"></i> Watch Video</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}

export default About
