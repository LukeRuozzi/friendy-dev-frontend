import React from 'react';

import type {Route} from "./+types/index";

const ContactPage = ({actionData}: Route.ComponentProps) => {

    return (
        <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
            <h2 className="text-center text-3xl font-bold text-white mb-8">
                Contact Me
            </h2>

            <form method="post" action="https://formspree.io/f/mgvzjjda" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-left block text-sm font-medium text-gray-300">
                        Full Name
                    </label>
                    <input type="text"
                           id="name"
                           name="name"
                           className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"/>
                </div>
                <div>
                    <label htmlFor="email" className="text-left block text-sm font-medium text-gray-300">
                        E-mail
                    </label>
                    <input type="email"
                           id="email"
                           name="email"
                           className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"/>
                </div>
                <div>
                    <label htmlFor="subject" className="text-left block text-sm font-medium text-gray-300">
                        Subject
                    </label>
                    <input type="text"
                           id="subject"
                           name="subject"
                           className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"/>
                </div>
                <div>
                    <label htmlFor="message" className="text-left block text-sm font-medium text-gray-300">
                        Message
                    </label>
                    <textarea id="message"
                              name="message"
                              className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"/>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                    Send message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;