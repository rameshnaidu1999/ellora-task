import React from 'react'
import './css/style.css'


function Footer() {
    return (
        <div>
        <footer id="footer_area">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<p>Copyright © 2019 <a href="/">Ellora</a>, All rights Reserved.<br/>
							Created by Themes_Vila</p>
						<div class="footer_social_icons">
							<ul>
								<li><a href="/"><i class="fa fa-facebook"></i></a></li>
								<li><a href="/"><i class="fa fa-instagram"></i></a></li>
								<li><a href="/"><i class="fa fa-twitter"></i></a></li>
								<li><a href="/"><i class="fa fa-pinterest"></i></a></li>
							</ul>
						</div>							
					</div>	
				</div>
			</div>
		</footer>
        </div>
    )
}

export default Footer
