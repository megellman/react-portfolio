import React from 'react';
import headshot from '../../assets/headshot.png'

export default function AboutMe() {
    return (
        <div>
            <h2>About Me</h2>
            <img src={headshot} alt='headshot'/>
            <p>Here's some stuff about me</p>
        </div>
    )
}