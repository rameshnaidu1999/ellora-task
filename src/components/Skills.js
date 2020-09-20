import React, { Component } from 'react'
import './css/style.css'
import data from './data.json'

class Skills extends Component {
    render() {
        return (
            <div>
                <section id="skill_area" class="section_padding">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12 text-center">
                            <div class="section_title ">		
                                <h2>My Skills</h2>							
                                <p>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout</p>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">	
                    {
                        data.Skills.map((skill, index) => {
                            return(
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <div class="progress-bar-linear pr-15">
                                        <p class="progress-bar-text">{skill.skillName}</p>
                                        <div class="progress-bar">
                                            <span data-percent={skill.percentage}></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }				
                    </div>
                </div>
            </section>
            </div>
        )
    }
    
}

export default Skills
