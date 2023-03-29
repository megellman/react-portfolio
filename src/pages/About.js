import React from 'react';
import headshot from '../assets/headshot.png'

export default function AboutMe() {
    return (
        <div>
            <h2 style={{margin: '20px auto 40px 20px', fontWeight: 'bold'}}>About Me</h2>
            <div className="container" >
                <div className='row'>
                    <div style={{marginTop: '20px'}} className='about-me col-xl-6'>
                        <img style={{ border: 'solid black 2px', width: '30rem', height: '30rem' }} src={headshot} alt='headshot' />
                   </div>
                   <div className='about-me col-xl-6'>
                        <p style={{marginTop: '20px', fontSize: '1.5rem', width: '40rem'}}>Aspiring Fullstack Developer, Megan Ellman, is a problem solver with a passion for software development. She has experience in both front-end and back-end development, making her a valuable asset to any software development team. She has worked as a Talent Development Specialist and Onboarding Coordinator at ClickUp, where she designed and implemented an onboarding program that ensured new hires seamlessly integrated into the organization. Additionally, they developed and delivered training programs for employees at all levels, including leadership development, soft skills training, and technical training.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}