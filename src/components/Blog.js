import React from 'react'
import './css/style.css'

function Blog() {
    return (
        <div>
            <section id="blog_area" className="section_padding">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-xs-12 text-center">
						<div className="section_title">		
							<h2>Latest Blog</h2>
							<p>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout</p>
						</div>
					</div>
				</div>
				
				<div className="row">
				
					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeIn">
						<div className="single_post">
							<div className="post-img">
								<img src="img/blog/1.jpeg" alt="" />
							</div>
							
							<div className="blog_content">
								<ul className="post-bar">
									<li className="post-date"><i className="fa fa-calendar"></i> January 7, 2019</li>
									<li className="author"><i className="fa fa-user"></i>   <a href="/">admin</a></li>
								</ul>
								<h5 className="post-title"><a href="/">Group of people watching on laptop</a></h5>								
								<p className="post-description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis in orci condimentum, at viverra
								</p>							
							</div>
						</div>
					</div>				

					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeIn">
						<div className="single_post">
							<div className="post-img">
								<img src="img/blog/1.jpeg" alt="" />								
							</div>
							
							<div className="blog_content">
								<ul className="post-bar">
									<li className="post-date"><i className="fa fa-calendar"></i> February 15, 2019</li>
									<li className="author"><i className="fa fa-user"></i>   <a href="/">admin</a></li>
								</ul>			
								<h5 className="post-title"><a href="/">A Handsam man holding a book for Study</a></h5>		
								<p className="post-description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices felis in orci condimentum, at viverra
								</p>							
							</div>
						</div>
					</div>				

					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeIn">
						<div className="single_post">
							<div className="post-img">
								<img src="img/blog/1.jpeg" alt="" />	
							</div>
							
							<div className="blog_content">
								<ul className="post-bar">
									<li className="post-date"><i className="fa fa-calendar"></i> March 28, 2019</li>
									<li className="author"><i className="fa fa-user"></i>   <a href="/">admin</a></li>
								</ul>							
								<h5 className="post-title"><a href="/">photo of group of people in a meeting</a></h5>					
								<p className="post-description">
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
