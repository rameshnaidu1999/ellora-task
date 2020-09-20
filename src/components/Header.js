import React from 'react'
import './css/style.css'

function Header() {
    return (
        <div>
		{/* <!-- START PRELOADER --> */}
		<div className="preloader">
			<div className="spinner">
				<div className="double-bounce1"></div>
				<div className="double-bounce2"></div>
			</div>
		</div>
		{/* <!-- END PRELOADER --> */}
		
		{/* <!-- Star Header Area -->		 */}
		<header id="header">
			<div className="container">	
				<div className="row">			
					<div className="col-md-4 col-xs-4">
						{/* <!-- Logo Area --> */}
						<div className="logo_area">
							 <a href="index.html"><img src="img/logo.png" alt="Logo" /></a>
						</div>					
					</div>
				
					{/* <!-- Main Menu Area --> */}
					<div className="col-md-8 col-xs-8 menu_wrap">
						<nav id="navigation" className="navbar-right">								
							<ul id="nav" className="nav navbar-nav ml-auto">
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
							<ul className="nav navbar-nav">
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
			{/* <!-- /.container-fluid --> */}
		</header>
		{/* <!-- End header area --> */}
        </div>
    )
}

export default Header
