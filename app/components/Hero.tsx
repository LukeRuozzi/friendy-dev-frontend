import React from 'react';
import {Link} from "react-router";

const Hero = ({name = '[NAME]', text = 'I build friendly web experiences and help other become confident'}) => {
    return (
        <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
            <h2 className="text-4xl font-bold mb-4">
                Hey, I'm {name}
            </h2>
            <p className="text-md text-gray-300 max-w-2xl mx-auto mb-6">
                {text}
            </p>
            <div className="flex justify-center gap-4">
                <Link to="/projects" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded">
                    View Projects
                </Link>
                <Link to="/contact" className="px-6 py-2 border hover:bg-blue-600 transition text-blue-400 hover:text-white rounded border-blue-500">
                    Contact Me
                </Link>
            </div>
        </header>
    );
};

export default Hero;