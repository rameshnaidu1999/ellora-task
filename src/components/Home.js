import React from 'react'
import './css/Header.css'

function Home() {
    return (
        <div>
            
			<section class="banner-area">
				<div class="container">
					<div class="row fullscreen align-items-center justify-content-between">
						<div class="col-lg-6 col-md-6 banner-left">
							<h6>This is me</h6>
							<h1>Philip Gilbert</h1>
							<p>
								You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.
							</p>
							<a href="/" class="primary-btn text-uppercase">discover now</a>
						</div>
						<div class="col-lg-6 col-md-6 banner-right d-flex align-self-end">
							<img class="img-fluid" src="./assets/img/hero-img.png" alt="" />
						</div>
					</div>
				</div>					
			</section>
			
			<section class="home-about-area pt-120">
				<div class="container">
					<div class="row align-items-center justify-content-between">
						<div class="col-lg-6 col-md-6 home-about-left">
							<img class="img-fluid" src="./assets/img/about-img.png" alt="" />
						</div>
						<div class="col-lg-5 col-md-6 home-about-right">
							<h6>About Me</h6>
							<h1 class="text-uppercase">Personal Details</h1>
							<p>
								Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
							<a href="/" class="primary-btn text-uppercase">View Full Details</a>
						</div>
					</div>
				</div>	
			</section>
        </div>
    )
}

export default Home
