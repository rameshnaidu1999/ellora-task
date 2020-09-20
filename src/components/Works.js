import React from 'react'
import './css/style.css'

function Works() {
    return (
        <div>
		<section id="work_area" className="our_works_area">
			<div className="container">			
				<div className="row">
					<div className="col-sm-12 col-xs-12 text-center">
						<div className="section_title">		
							<h2>Latest Work</h2>
							<p>It is a long established fact that a reader will be distracted by the readable <br/>content of a page when looking at its layout
							</p>
						</div>
					</div>
				</div>
			
				<div className="row text-center">
					<div className="portfolio_filter text-center">
						<ul>
							<li className="active filter" data-filter="all">All</li>
							<li className="filter" data-filter=".web_design">WEB DESIGN</li>
							<li className="filter" data-filter=".illustrator">ILLUSTRATOR</li>
							<li className="filter" data-filter=".ux_design">UL/UX DESIGN</li>
							<li className="filter" data-filter=".print">PRINT</li>
							<li className="filter" data-filter=".video">VIDEO</li>
						</ul>
					</div>
				</div>	
				
				<div className="row">
					<div className="portfolio_item text-center">
						<div className="col-md-4 col-sm-6 mix web_design video ux_design">
							<div className="single_portfolio">														
								<div className="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-plus"></i></a>												
								</div>
								<div className="port-text text-left">	
									<h3 className="title">Portfolio Title</h3>
									<span className="post">Web Design</span>
								</div>
							</div>
						</div> 						
						
						<div className="col-md-4 col-sm-6 mix web_design video">
							<div className="single_portfolio">														
								<div className="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-plus"></i></a>												
								</div>
								<div className="port-text text-left">	
									<h3 className="title">Portfolio Title</h3>
									<span className="post">Web Design</span>
								</div>
							</div>
						</div> 	

						<div className="col-md-4 col-sm-6 mix web_design print ux_design">
							<div className="single_portfolio">														
								<div className="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-plus"></i></a>												
								</div>
								<div className="port-text text-left">	
									<h3 className="title">Portfolio Title</h3>
									<span className="post">Web Design</span>
								</div>
							</div>
						</div> 

						<div className="col-md-4 col-sm-6 mix web_design illustrator ux_design">
							<div className="single_portfolio">														
								<div className="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-plus"></i></a>												
								</div>
								<div className="port-text text-left">	
									<h3 className="title">Portfolio Title</h3>
									<span className="post">Web Design</span>
								</div>
							</div>
						</div> 	

						<div className="col-md-4 col-sm-6 mix web_design illustrator">
							<div className="single_portfolio">														
								<div className="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-plus"></i></a>												
								</div>
								<div className="port-text text-left">	
									<h3 className="title">Portfolio Title</h3>
									<span className="post">Web Design</span>
								</div>
							</div>
						</div> 					

						<div className="col-md-4 col-sm-6 mix print">
							<div className="single_portfolio">														
								<div className="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-plus"></i></a>												
								</div>
								<div className="port-text text-left">	
									<h3 className="title">Portfolio Title</h3>
									<span className="post">Web Design</span>
								</div>
							</div>
						</div> 
					</div>
					
					<div className="col-md-12 text-center">
						<a href="/" className="main-btn">Load More</a>
					</div>
				</div>
				
			</div>
		</section>
        </div>
    )
}

export default Works
