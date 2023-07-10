import React, {useState, useEffect, useRef} from 'react';
import './style.css';

export default About => {

    return (

<div className='aboutme' id='About'>
                    <h1>About me</h1>
                    <p>Hi! My name is <b>Fernando</b>, and I'm a nursing technology graduate with extensive experience in emergency, urgent care, and intensive care. Throughout my career, I have worked in diverse areas such as emergency rooms, pediatric emergencies, Covid ICU, and ambulance services. However, I have always been passionate about programming and technology.</p>

                    <div className='cards'>

                        <div className='card background'>
                            <h2>My Background</h2>
                            <p>My background in healthcare has instilled in me a strong attention to detail, problem-solving skills, and the ability to thrive in high-pressure environments. I'm eager to apply these qualities to the world of programming, where I can create innovative solutions and contribute to the advancement of any project!</p>
                        </div>

                        <div className='card career'>
                            <h2>Carreer</h2>
                            <p>But now, I'm embarking on an exciting career transition to pursue my passion for programming. I've taken the first steps by studying ADS (Analysis and Systems Development) at Estácio University and a Full Stack Course at DevMedia, where I'm gaining a solid foundation in software development.</p>
                        </div>

                        <div className='card opportunities'>
                            <h2>Opportunities</h2>
                            <p>So, I'm open to any opportunities that will be gived to me on my programming journey, eager to collaborate on projects and teams. and of course, explore with you how I can bring my healthcare expertise and programming skills together to create innovative and meaningful solutions</p>
                        </div>
                    </div>
            </div>

)

        }
