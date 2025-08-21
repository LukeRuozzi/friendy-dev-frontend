import React, {useState} from 'react';
import {NavLink} from "react-router";
import {FaBars, FaLaptopCode, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const baseClasses = 'transition hover:text-blue-400';
    const activeClasses = 'text-blue-400 font-semibold';

    return (
        <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-blue-300">
                    <FaLaptopCode className="text-blue-400 text-xl"/>
                    <span>The Friendly Developer</span>
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="space-x-4 text-sm text-gray-300">
                        <NavLink to="/"
                                 className={({isActive}) => isActive ? activeClasses : baseClasses}>Home</NavLink>
                        <NavLink to="/projects"
                                 className={({isActive}) => isActive ? activeClasses : baseClasses}>Projects</NavLink>
                        <NavLink to="/blog"
                                 className={({isActive}) => isActive ? activeClasses : baseClasses}>Blog</NavLink>
                        <NavLink to="/about"
                                 className={({isActive}) => isActive ? activeClasses : baseClasses}>About</NavLink>
                        <NavLink to="/contact"
                                 className={({isActive}) => isActive ? activeClasses : baseClasses}>Contact</NavLink>
                    </div>
                </div>


                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="text-blue-400 text-xl cursor-pointer"
                        title="Menu"
                    >
                        {menuOpen ? <FaTimes/> : <FaBars/>}
                    </button>

                </div>

            </div>

            {/*Mobile Nav*/}
            {
                menuOpen && (
                    <div
                        className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-x-4 space-y-2 text-center">
                        <NavLink
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className={({isActive}) => isActive ? activeClasses : baseClasses}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/projects"
                            onClick={() => setMenuOpen(false)}
                            className={({isActive}) => isActive ? activeClasses : baseClasses}>
                            Projects
                        </NavLink>
                        <NavLink
                            to="/blog"
                            onClick={() => setMenuOpen(false)}
                            className={({isActive}) => isActive ? activeClasses : baseClasses}>
                            Blog
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className={({isActive}) => isActive ? activeClasses : baseClasses}>
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                            className={({isActive}) => isActive ? activeClasses : baseClasses}>
                            Contact
                        </NavLink>
                    </div>
                )
            }

        </nav>
    );
};

export default Navbar;