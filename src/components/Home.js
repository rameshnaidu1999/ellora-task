import React from 'react'
import './css/style.css'

function Home() {
    return (
        <div>
		
		<section id="home_banner_area" className="text-left">	
			<div className="container">	
				<div className="single-slide-item-table">
					<div className="single-slide-item-tablecell">
						<div className="row">
							<div className="col-md-7 col-sm-12 col-xs-12">
								<div className="slider_content">
									<h1>Hello I'm John.  <span classNameName="typed" data-elements="A Creative Web Designer,A WordPress Developer"></span></h1>
									
									<a href="/" className="main-btn ">Download CV</a>	
		
								</div>
							</div>	
							
							<div className="col-md-5 hidden-sm hidden-xs">
								<div className="banner-image">
									<img src="img/men.png" alt="" />
								</div>
							</div>	
						</div>

					</div>						
				</div>
			</div>
		</section>
						
		<div className="clearfix"></div>
        </div>
    )
}

export default Home
