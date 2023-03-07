import React from 'react';
import headshot from '../../assets/headshot.png'

export default function AboutMe() {
    return (
        <div>
            <h2>About Me</h2>
            <img src={headshot} alt='headshot' />
            <p>Aspiring Fullstack Developer, Megan Ellman, is a problem solver with a passion for software development. She has experience in both front-end and back-end development, making her a valuable asset to any software development team. She has worked as a Talent Development Specialist and Onboarding Coordinator at ClickUp, where she designed and implemented an onboarding program that ensured new hires seamlessly integrated into the organization. Additionally, they developed and delivered training programs for employees at all levels, including leadership development, soft skills training, and technical training.</p>
        </div>
    )
}