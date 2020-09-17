import React from 'react'
import './css/Header.css'

function Header() {
    return (
        <div>
        <header id="header">
		    <div class="container main-menu">
		    	<div class="row align-items-center justify-content-between d-flex">
			      <div id="logo">
			        <a href="index.html"><img src="/assets/img/logo.png" alt="" title="" /></a>
			      </div>
			      <nav id="nav-menu-container">
			        <ul class="nav-menu">
			          <li><a href="/">Home</a></li>
			          <li><a href="/">About</a></li>
			          <li><a href="/">Services</a></li>
			          <li><a href="/">Portfolio</a></li>
			          <li><a href="/">Pricing</a></li>
			          <li class="menu-has-children"><a href="/">Blog</a>
			            <ul>
			              <li><a href="/">Blog Home</a></li>
			              <li><a href="/">Blog Single</a></li>
			            </ul>
			          </li>	
			          <li class="menu-has-children"><a href="/">Pages</a>
			            <ul>
		            	  <li><a href="elements.html">Elements</a></li>
				          <li class="menu-has-children"><a href="/">Level 2 </a>
				            <ul>
				              <li><a href="/">Item One</a></li>
				              <li><a href="/">Item Two</a></li>
				            </ul>
				          </li>					                		
			            </ul>
			          </li>					          					          		          
			          <li><a href="/">Contact</a></li>
			        </ul>
			      </nav>		    		
		    	</div>
		    </div>
		  </header>
        </div>
    )
}

export default Header
