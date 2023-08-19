import React from 'react';
import './Navigation.css';

export default function Navigation(){
    return(
        <div className='nav'>
           <ul>
            {/* <li>Home</li> */}
            <a href='home'>Home</a>
            <a href='about'>About</a>
            <a href='contact'>Contact</a>
            <a href='blog'>Blog</a>
           </ul>
           

        </div>
    )
};