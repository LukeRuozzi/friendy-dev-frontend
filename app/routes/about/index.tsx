import React from 'react';

const AboutPage = () => {
    return (
        <div className="m-w-5xl mx-auto px-6 py-16 bg-gray-900">

            <div className="flex flex-col items-center md:flex-row md:items-start gap-10 mb-12">
                <img src="/images/profile.jpg" alt=""
                     className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
                />
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Hey, I'm Luca
                    </h1>
                    <p className="text-gray-300 text-lg">
                        I'm a passionate developer and content creator
                    </p>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Mission
                </h2>
                <p className="text gray-300 leading-relaxed">
                    I made it my mission to share what I've learned with others
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
                Tech I Use
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                {['React', 'Next.js', 'Tailwindcss'].map(tech => (
                    <li key={tech}
                        className="bg-gray-700 px-3 py-1 rounded-md"
                    >
                        {tech}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default AboutPage;