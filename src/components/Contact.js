import React from 'react'
import './css/style.css'

function Contact() {
    return (
        <div>
            <section id="contact_area" className="section_padding">
			<div className="container">			
				<div className="row">
					<div className="col-sm-12 col-xs-12 text-center">
						<div className="section_title">		
							<h2>Contact Me</h2>
							<p>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout</p>
						</div>
					</div>
				</div>
				
				<div className="row">
				
					<div className="col-sm-7">
						<div className="contact_form">
							<form id="contact-form" method="post" action="contact.php" enctype="multipart/form-data">
								<div className="row">
									<div className="form-group col-md-4">
										<input type="text" name="name" className="form-control" id="first-name" placeholder="Full Name" required="required" />
									</div>
									
									<div className="form-group col-md-4">
										<input type="email" name="email" className="form-control" id="emailn" placeholder="Email" required="required" />
									</div>

									<div className="form-group col-md-4">
										<input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required="required" />
									</div>
									
									<div className="form-group col-md-12">
										<textarea rows="6" name="message" className="form-control" id="description" placeholder="Your Message" required="required"></textarea>
									</div>
									
									<div className="col-md-12 text-center">
										<div className="actions">
											<input type="submit" value="Send Me" name="submit" id="submitButton" className="main-btn" />
										</div>
									</div>
									
								</div>
							</form>
						</div>
					</div>
					
					<div className="col-sm-5">
						<div className="contact_info">
							<div className="single_con">
								<i className="ti-map-alt"></i>
								<p>3010 Raoul Wallenberg  <br />PlaceWallingford CT 06492</p>
							</div>	

							<div className="single_con">
								<i className="ti-headphone-alt"></i>
								<p>
									203-906-9388<br />
									205-806-9368
								</p>
							</div>	

							<div className="single_con">
								<i className="ti-email"></i>
								<p>
									yourmail@example.com<br />
									your@mail.com
								</p>
							</div>		

						</div>
					</div>

				</div>
			</div>
		</section>	
        </div>
    )
}

export default Contact
