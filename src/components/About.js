import React from 'react'
import './css/style.css'

function About() {
    return (
        <div>
            <section id="about_area" className="section_padding">
			<div className="container">				
				<div className="row">					
					<div className="col-md-5 col-sm-5 col-xs-12">
						<div className="about_img  wow fadeInLeft">
							<img src="img/about.png" className="img-responsive" alt="" />
						</div>
					</div>
					
					<div className="col-md-7 col-sm-7 col-xs-12">
						<div className="about_content">													
							<h2 className="about_title">About Me</h2>																					
							<p>
								 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exeracita aation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

							</p>						
							<img className="about-signature" src="img/sign.png" alt="signature" />
							<div className="about-buttons">
								<a href="/" className="main-btn">Hire Me</a>
								<a href="http://www.youtu.be/94yLIKZ-HjU" data-autoplay="true" data-vbtype="video" className="video-popup vide_btn vbox-item"><i className="fa fa-play"></i> Watch Video</a>
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
