import React from 'react'
import './css/style.css'

function Contact() {
    return (
        <div>
            <section id="contact_area" class="section_padding">
			<div class="container">			
				<div class="row">
					<div class="col-sm-12 col-xs-12 text-center">
						<div class="section_title">		
							<h2>Contact Me</h2>
							<p>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout</p>
						</div>
					</div>
				</div>
				
				<div class="row">
				
					<div class="col-sm-7">
						<div class="contact_form">
							<form id="contact-form" method="post" action="contact.php" enctype="multipart/form-data">
								<div class="row">
									<div class="form-group col-md-4">
										<input type="text" name="name" class="form-control" id="first-name" placeholder="Full Name" required="required" />
									</div>
									
									<div class="form-group col-md-4">
										<input type="email" name="email" class="form-control" id="emailn" placeholder="Email" required="required" />
									</div>

									<div class="form-group col-md-4">
										<input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required="required" />
									</div>
									
									<div class="form-group col-md-12">
										<textarea rows="6" name="message" class="form-control" id="description" placeholder="Your Message" required="required"></textarea>
									</div>
									
									<div class="col-md-12 text-center">
										<div class="actions">
											<input type="submit" value="Send Me" name="submit" id="submitButton" class="main-btn" />
										</div>
									</div>
									
								</div>
							</form>
						</div>
					</div>
					
					<div class="col-sm-5">
						<div class="contact_info">
							<div class="single_con">
								<i class="ti-map-alt"></i>
								<p>3010 Raoul Wallenberg  <br />PlaceWallingford CT 06492</p>
							</div>	

							<div class="single_con">
								<i class="ti-headphone-alt"></i>
								<p>
									203-906-9388<br />
									205-806-9368
								</p>
							</div>	

							<div class="single_con">
								<i class="ti-email"></i>
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
