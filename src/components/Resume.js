import React from 'react'
import './css/style.css'

function Resume() {
    return (
        <div>
            <section id="resume_area" className="our_resume_area section_padding">
			<div className="container">			
				<div className="row">
					<div className="col-sm-12 col-xs-12 text-center">
						<div className="section_title">		
							<h2>Our Resume</h2>
							<p>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout</p>
						</div>
					</div>
				</div>
			
				<div className="row">
					<div className="col-sm-6 wow fadeIn">
						<h4 className="sing_resume_title"><i className="ti-crown"></i> Education</h4>
						<div className="single_resume">
							<span className="resume_duration">March 2013 - 2017</span>
							<h3>Computer Science</h3>
							<span className="resume-designation">International University</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud .	
							</p>
							
						</div>

						<div className="single_resume">
							<span className="resume_duration">March 2012 - 2018</span>
							<h3> Graphic Design </h3>
							<span className="resume-designation">University of California</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud . 	
							</p>
							
						</div>

					</div>

					<div className="col-sm-6 wow fadeIn">
						<h4 className="sing_resume_title"><i className="ti-briefcase"></i> Experience</h4>
						<div className="single_resume">
							<span className="resume_duration">March 2010 - 2019</span>
							<h3>Behance</h3>
							<span className="resume-designation">Senior UI UX Designer</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud . 
							</p>
							
						</div>

						<div className="single_resume">
							<span className="resume_duration">March 2012 - 2019</span>
							<h3>Themeforest </h3>
							<span className="resume-designation">WordPress Theme Developer</span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud . 
							</p>						
						</div>							
					</div>					
				</div>	
			</div>
		</section>
        </div>
    )
}

export default Resume
