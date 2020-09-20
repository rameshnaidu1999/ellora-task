import React from 'react'
import './css/style.css'

function Counter() {
    return (
        <div>
            <div id="counter_area">
			<div className="container-fluid">
				<div className="text-center">
					<div className="col-md-3 col-sm-6">
						<div className="counter-items">			
							<div className="number-number">
								<span className="counter">583</span>
							</div>
							<p className="number-desc">Projects Delivered</p>
						</div>
					</div>
					
					<div className="col-md-3 col-sm-6">
						<div className="counter-items">
							<div className="number-number">
								<span className="counter">6924</span>
							</div>
							<p className="number-desc">Happy Customer</p>
						</div>
					</div>
					
					<div className="col-md-3 col-sm-6">
						<div className="counter-items">
							<div className="number-number">
								<span className="counter">524</span>
							</div>
							<p className="number-desc">Downloads</p>
						</div>
					</div>
					
					<div className="col-md-3 col-sm-6">
						<div className="counter-items">
							<div className="number-number">
								<span className="counter">9372</span>
							</div>
							<p className="number-desc">Awards Win</p>
						</div>
					</div>
				</div>
			</div>	
		</div>
        </div>
    )
}

export default Counter
