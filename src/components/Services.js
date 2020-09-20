import React, { Component } from 'react'
import './css/style.css'
import data from './data.json'
class Services extends Component {
	render() {
		return (
			<div>
			<section id="service_area" class="section_padding">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-xs-12 text-center">
							<div class="section_title ">		
								<h2>Our Services</h2>							
								<p>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout</p>
							
							</div>
						</div>
					</div>
						
					<div class="row">
						<div class="service_details text-left wow fadeIn">
	
						{
							data.Services.map((service, index) => {
								return (
									
									<div class="col-md-4 col-sm-6" >
										<div class="serviceBox">						
											<i class={service.icon}></i>
											<div class="ser_content">
												<h3 class="title">{service.serviceName}</h3>
												<p class="description">
													{service.description}
												</p>
											</div>				
										</div>
									</div>
								)
							})
						}
						</div>
					</div>
				</div>
			</section>
			</div>
		)
	}
    
}

export default Services
