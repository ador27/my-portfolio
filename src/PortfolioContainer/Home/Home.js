import React from 'react';
import Profile from './Profile';
import './Home.css';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default function Home() {
    return (
        <div className='home-container'>
            <Profile />
            <Projects />
            <Contact />
        </div>
    )
}
