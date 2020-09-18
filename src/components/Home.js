import React from 'react'
import './css/style.css'

function Home() {
    return (
        <div>
		
		<section id="home_banner_area" class="text-left">	
			<div class="container">	
				<div class="single-slide-item-table">
					<div class="single-slide-item-tablecell">
						<div class="row">
							<div class="col-md-7 col-sm-12 col-xs-12">
								<div class="slider_content">
									<h1>Hello I'm John.  <span className="typed" data-elements="A Creative Web Designer,A WordPress Developer"></span></h1>
									
									<a href="/" class="main-btn ">Download CV</a>	
		
								</div>
							</div>	
							
							<div class="col-md-5 hidden-sm hidden-xs">
								<div class="banner-image">
									<img src="img/men.png" alt="" />
								</div>
							</div>	
						</div>

					</div>						
				</div>
			</div>
		</section>
						
		<div class="clearfix"></div>
        </div>
    )
}

export default Home
