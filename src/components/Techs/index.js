import React, {useState, useEffect, useRef} from 'react';
import './style.css';


export default Techs => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const DarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    }
    return(
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div className='limit techs' id='Techs'>
                <div>
                    <h1>My Technologies</h1>

                    <div className='tech-cards'>
                        <div className='cardtech html'>
                            <img src='./assets/techIcons/html5.svg'/>
                        </div>
                        <div className='cardtech css'>
                            <img src='./assets/techIcons/css3.svg'/>
                        </div>
                        <div className='cardtech js'>
                            <img src='./assets/techIcons/js.svg'/>
                        </div>
                        <div className='cardtech react'>
                            <img src='./assets/techIcons/react.svg'/>
                        </div>
                        <div className='cardtech php'>
                            <img src='./assets/techIcons/php.svg'/>
                        </div>
                        <h1>Portfolio under construction c:</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}