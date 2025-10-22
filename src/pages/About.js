import React from 'react';
// import headshot from '../assets/headshot.png'

export default function AboutMe() {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingBottom:"150px", paddingTop:"80px"}} className="color-main">
            <h2 style={{ fontWeight: 'bold' }}>Megan Ellman</h2>
            <div className='about-me'>
                <p style={{ marginTop: '20px', fontSize: '1.2rem', width: '40rem', textAlign: 'center' }}>Since beginning my journey into software development, I’ve built responsive web applications, collaborated on team projects, and refined my skills through UC Berkeley’s fullstack bootcamp. With a background in SaaS operations and onboarding, I bring both technical and people-focused experience to my work. I’m naturally curious, detail-oriented, and always looking for ways to make code cleaner and user experiences smoother.</p>
            </div>
        </div >
    )
}