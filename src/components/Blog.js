import React from 'react'
import './css/style.css'

function Blog() {
    return (
        <div>
            <section id="blog_area" class="section_padding">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-xs-12 text-center">
						<div class="section_title">		
							<h2>Latest Blog</h2>
							<p>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout</p>
						</div>
					</div>
				</div>
				
				<div class="row">
				
					<div class="col-md-4 col-sm-6 col-xs-12 wow fadeIn">
						<div class="single_post">
							<div class="post-img">
								<img src="img/blog/1.jpeg" alt="" />
							</div>
							
							<div class="blog_content">
								<ul class="post-bar">
									<li class="post-date"><i class="fa fa-calendar"></i> January 7, 2019</li>
									<li class="author"><i class="fa fa-user"></i>   <a href="/">admin</a></li>
								</ul>
								<h5 class="post-title"><a href="/">Group of people watching on laptop</a></h5>								
								<p class="post-description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis in orci condimentum, at viverra
								</p>							
							</div>
						</div>
					</div>				

					<div class="col-md-4 col-sm-6 col-xs-12 wow fadeIn">
						<div class="single_post">
							<div class="post-img">
								<img src="img/blog/1.jpeg" alt="" />								
							</div>
							
							<div class="blog_content">
								<ul class="post-bar">
									<li class="post-date"><i class="fa fa-calendar"></i> February 15, 2019</li>
									<li class="author"><i class="fa fa-user"></i>   <a href="/">admin</a></li>
								</ul>			
								<h5 class="post-title"><a href="/">A Handsam man holding a book for Study</a></h5>		
								<p class="post-description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis in orci condimentum, at viverra
								</p>							
							</div>
						</div>
					</div>				

					<div class="col-md-4 col-sm-6 col-xs-12 wow fadeIn">
						<div class="single_post">
							<div class="post-img">
								<img src="img/blog/1.jpeg" alt="" />	
							</div>
							
							<div class="blog_content">
								<ul class="post-bar">
									<li class="post-date"><i class="fa fa-calendar"></i> March 28, 2019</li>
									<li class="author"><i class="fa fa-user"></i>   <a href="/">admin</a></li>
								</ul>							
								<h5 class="post-title"><a href="/">photo of group of people in a meeting</a></h5>					
								<p class="post-description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis in orci condimentum, at viverra
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

export default Blog
