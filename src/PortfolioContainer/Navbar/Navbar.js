import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl ml-10">Ador's Portfolio</a>
                </div>
                <div className="flex-none mr-10">
                    <Link className='m-2' to="/">Home</Link>
                    <Link className='m-2' to="/projects">Projects</Link>
                    <Link className='m-2' to="/blogs">Blogs</Link>
                    <Link className='m-2' to="/aboutme">About Me</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;