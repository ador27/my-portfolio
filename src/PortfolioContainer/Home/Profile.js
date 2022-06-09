import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                            <a href="https://www.facebook.com/rashedulhaque.ador">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://mail.google.com/mail/u/0/">
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href="">
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href="https://www.instagram.com/i_am_rashed/">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>

                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Ador</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Junior Web Developer",
                                        3000,
                                        "Full Stack Developer",
                                        3000,
                                        "MERN Stack Developer",
                                        3000,
                                        "Cross Platform",
                                        3000,
                                        "ReactJs Developer",
                                        3000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Hello! I am Junior Web Developer and Wordpress Developer
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="Md. Rashedul Haque Ador Resume.pdf" download='Md. Rashedul Haque Ador Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>

        </div>
    );
}
