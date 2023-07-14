import React, { useState } from 'react';
import './style.css'

export default Menu => {
  
  return (
    <header>
      <div className='limitar'>
        <nav>
          <a href='#About'>About Me</a>
          <a href='#Techs'>Techs</a>
        </nav>
      </div>
    </header>
  );
};
