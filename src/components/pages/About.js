import React from 'react';
import headshot from '../../assets/headshot.png'

export default function AboutMe() {
    return (
        <div>
            <img src={headshot} alt='headshot'/>
            <p>Here's some stuff about me</p>
        </div>
    )
}