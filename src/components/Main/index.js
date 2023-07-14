import React, {useState, useEffect, useRef} from 'react';
import './style.css';
import Typed from 'typed.js';


export default Portfolio => {

    
    const type = useRef(null);
    useEffect(() => {
        const typed = new Typed(type.current, {
          strings: ["Nurse", "Student", "Programmer", "Front End Developer ❤️ "], 
          startDelay: 300,
          typeSpeed: 130,
          backSpeed: 80,
          backDelay: 100
        })
        return () => {
            typed.destroy();
          };
        }, []);


    return (
            <div className='head limit'>
                <div className='left'>
                    <h1 className='gradient'>I'm Fernando, a <br/><span ref={type}></span></h1>
                </div>
                <div className='right'>
                    <img className='animationright' src='./assets/animated.svg'/> 
                </div>
            </div>
    
    )

}