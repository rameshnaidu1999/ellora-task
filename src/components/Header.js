import React from 'react'
import './css/style.css'

function Header() {
    return (
        <div>
				
		<div class="preloader">
			<div class="spinner">
				<div class="double-bounce1"></div>
				<div class="double-bounce2"></div>
			</div>
		</div>
		
		
			
		<header id="header">
			<div class="container">	
				<div class="row">			
					<div class="col-md-4 col-xs-4">
						{/* <!-- Logo Area --> */}
						<div class="logo_area">
							 <a href="index.html"><img src="img/logo.png" alt="Logo" /></a>
						</div>					
					</div>
				
					{/* <!-- Main Menu Area --> */}
					<div class="col-md-8 col-xs-8 menu_wrap">
						<nav id="navigation" class="navbar-right">								
							<ul id="nav" class="nav navbar-nav">
								<li><a href="index.html">Home</a></li>
								<li><a href="#service_area">Services</a></li>
								<li><a href="#work_area">Works</a></li>
								<li><a href="#resume_area">Resume</a></li>
								<li><a href="#testimonial_area">testimonials</a></li>
								<li><a href="#blog_area">Blog</a></li>
								<li><a href="#contact_area">Contact</a></li>
							</ul>						
						</nav>		
						
						<nav id="mobile_menu">								
							<ul class="nav navbar-nav">
								<li><a href="index.html">Home</a></li>
								<li><a href="#service_area">Services</a></li>
								<li><a href="#work_area">Works</a></li>
								<li><a href="#team_area">Team</a></li>
								<li><a href="#testimonial_area">testimonials</a></li>
								<li><a href="#blog_area">Blog</a></li>
								<li><a href="#contact_area">Contact</a></li>
							</ul>						
						</nav>
					</div>					
				</div>
			</div>
		</header>
		
        </div>
    )
}

export default Header
