import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className="flex text-black pt-28 bg-white scroll-smooth font-roboto">
            <div className="w-1/3 bg-white text-black p-8 flex flex-col justify-start gap-6 border-r">
                <p className='tracking-wider'> Nohara Technologies </p>
                <div className='flex flex-row'>
                    <div className='h-10 w-10 border border-black rounded-md flex flex-col items-center justify-center'>
                        <FontAwesomeIcon className="!text-black text-4xl" icon={faCheck}></FontAwesomeIcon>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Chat to us</h2>
                        <p>Our friendly team is here to help.</p>
                        <p className="text-blue-600">hi@untitledui.com</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Visit us</h2>
                    <p>Come say hello at our office HQ.</p>
                    <p>100 Smith Street</p>
                    <p>Collingwood VIC 3066 AU</p>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Call us</h2>
                    <p>Mon-Fri from 8am to 5pm.</p>
                    <p>+1 (555) 000-0000</p>
                </div>
                <div className="flex gap-4 mt-4">
                    {['facebook', 'twitter', 'linkedin', 'instagram', 'settings'].map((platform) => (
                        <span key={platform} className="cursor-pointer text-gray-600 hover:text-gray-900">
                            {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-2/3 bg-orange-500 p-12 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">Got ideas? We’ve got the skills. Let’s team up.</h1>
                <p className="mb-8">Tell us more about yourself and what you’ve got in mind.</p>

                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full border-b border-black p-2 text-lg focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full border-b border-black p-2 text-lg focus:outline-none"
                    />
                    <textarea
                        placeholder="Tell us a little about the project..."
                        rows={3}
                        className="w-full border-b border-black p-2 text-lg focus:outline-none"
                    />

                    <fieldset className="space-y-2">
                        <legend className="font-bold mb-2">How can we help?</legend>
                        {['Website design', 'UX design', 'User research', 'Content creation', 'Strategy & consulting', 'Other'].map((item, index) => (
                            <label key={index} className="block">
                                <input type="checkbox" className="mr-2" />
                                {item}
                            </label>
                        ))}
                    </fieldset>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 text-lg font-bold rounded-lg hover:bg-gray-800 transition"
                    >
                        Let’s get started!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
