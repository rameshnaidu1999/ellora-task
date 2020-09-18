import React from 'react'
import './css/style.css'

function Works() {
    return (
        <div>
		<section id="work_area" class="our_works_area">
			<div class="container">			
				<div class="row">
					<div class="col-sm-12 col-xs-12 text-center">
						<div class="section_title">		
							<h2>Latest Work</h2>
							<p>It is a long established fact that a reader will be distracted by the readable <br/>content of a page when looking at its layout
							</p>
						</div>
					</div>
				</div>
			
				<div class="row text-center">
					<div class="portfolio_filter">
						<ul>
							<li class="active filter" data-filter="all">All</li>
							<li class="filter" data-filter=".web_design">WEB DESIGN</li>
							<li class="filter" data-filter=".illustrator">ILLUSTRATOR</li>
							<li class="filter" data-filter=".ux_design">UL/UX DESIGN</li>
							<li class="filter" data-filter=".print">PRINT</li>
							<li class="filter" data-filter=".video">VIDEO</li>
						</ul>
					</div>
				</div>	
				
				<div class="row">
					<div class="portfolio_item text-center">
						<div class="col-md-4 col-sm-6 mix web_design video ux_design">
							<div class="single_portfolio">														
								<div class="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" class="port-icon lightbox" data-gall="gall-work"><i class="ti-plus"></i></a>												
								</div>
								<div class="port-text text-left">	
									<h3 class="title">Portfolio Title</h3>
									<span class="post">Web Design</span>
								</div>
							</div>
						</div> 						
						
						<div class="col-md-4 col-sm-6 mix web_design video">
							<div class="single_portfolio">														
								<div class="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" class="port-icon lightbox" data-gall="gall-work"><i class="ti-plus"></i></a>												
								</div>
								<div class="port-text text-left">	
									<h3 class="title">Portfolio Title</h3>
									<span class="post">Web Design</span>
								</div>
							</div>
						</div> 	

						<div class="col-md-4 col-sm-6 mix web_design print ux_design">
							<div class="single_portfolio">														
								<div class="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" class="port-icon lightbox" data-gall="gall-work"><i class="ti-plus"></i></a>												
								</div>
								<div class="port-text text-left">	
									<h3 class="title">Portfolio Title</h3>
									<span class="post">Web Design</span>
								</div>
							</div>
						</div> 

						<div class="col-md-4 col-sm-6 mix web_design illustrator ux_design">
							<div class="single_portfolio">														
								<div class="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" class="port-icon lightbox" data-gall="gall-work"><i class="ti-plus"></i></a>												
								</div>
								<div class="port-text text-left">	
									<h3 class="title">Portfolio Title</h3>
									<span class="post">Web Design</span>
								</div>
							</div>
						</div> 	

						<div class="col-md-4 col-sm-6 mix web_design illustrator">
							<div class="single_portfolio">														
								<div class="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" class="port-icon lightbox" data-gall="gall-work"><i class="ti-plus"></i></a>												
								</div>
								<div class="port-text text-left">	
									<h3 class="title">Portfolio Title</h3>
									<span class="post">Web Design</span>
								</div>
							</div>
						</div> 					

						<div class="col-md-4 col-sm-6 mix print">
							<div class="single_portfolio">														
								<div class="port-box-content">
									<img src="img/portfolio/1.jpeg" alt="" />						
									<a href="img/portfolio/1.jpeg" class="port-icon lightbox" data-gall="gall-work"><i class="ti-plus"></i></a>												
								</div>
								<div class="port-text text-left">	
									<h3 class="title">Portfolio Title</h3>
									<span class="post">Web Design</span>
								</div>
							</div>
						</div> 
					</div>
					
					<div class="col-md-12 text-center">
						<a href="/" class="main-btn">Load More</a>
					</div>
				</div>
				
			</div>
		</section>
        </div>
    )
}

export default Works
