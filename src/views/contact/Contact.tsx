import React, { useState } from "react";
import { RoundButton } from "../../components/roundButton/RoundButton";
import { SiDiscord } from 'react-icons/si';
import { ImLinkedin2 } from 'react-icons/im';
import { DiGithubAlt } from 'react-icons/di';

type Section = "form" | "none" | "discord";

export function Contact() {
    const [activeSection, setActiveSection] = useState<Section>("none");

    return (
        <div id="contact">
            <h1 className="ps-heading text-center mb-3">Contact</h1>
            <p className="text-gray-300 text-center mb-6">Feel free to send me a message through the site or social media!</p>
            <div className="flex flex-col sm:flex-row justify-center mb-8 items-center space-y-6 sm:space-y-0 sm:space-x-8">
                <RoundButton onClick={ () => setActiveSection("form") } text="Message" />
                <p className="font-bold">
                    OR
                </p>
                <div className="flex space-x-3">
                    <button onClick={  () => setActiveSection("discord") } className="transition duration-300 rounded-full p-2 border-2 border-transparent hover:border-white" style={{ backgroundColor: "#5865F2" }}>
                        <SiDiscord color="#FFF" size="100%" className="w-8 h-8" />
                    </button>
                    <a className="transition duration-300 rounded-full p-2 border-2 border-transparent hover:border-white" href="https://www.linkedin.com/in/olivier-goulet/" style={{ backgroundColor: "#0e76a8" }}>
                        <ImLinkedin2 color="#FFF" size="100%" className="h-8 w-8" />
                    </a>
                    <a className="transition duration-300 rounded-full p-2 border-2 border-transparent hover:border-white" href="https://github.com/oliviergoulet5" style={{ backgroundColor: "#6e5494" }}>
                        <DiGithubAlt color="#FFF" size="100%" className="w-8 h-8" />
                    </a>
                </div>
            </div>

            { activeSection === "discord" && 
            <div className="flex justify-center">
                <p className="inline-block bg-gray-900 border-2 rounded-lg p-6 border-gray-700 m-auto">My discord name is zxcv#6382.</p>
            </div>
            }
            

            { activeSection === "form" && 
                <form className="w-full sm:w-8/12 m-auto grid grid-cols-2 gap-4">
                        <div className="ps-input-group col-span-2 sm:col-span-1">
                            <label className="ps-label">Email</label>
                            <input className="ps-input"/>
                        </div>
                        <div className="ps-input-group col-span-2 sm:col-span-1">
                            <label className="ps-label">Name</label>
                            <input className="ps-input" />
                        </div>
                        <div className="ps-input-group col-span-2">
                            <label className="ps-label">Subject</label>
                            <input className="ps-input w-full" />
                        </div>
                        <div className="ps-input-group col-span-2">
                            <label className="ps-label">Message</label>
                            <textarea className="ps-input" rows={5} />
                        </div>
                </form>
            }
        </div>
    );
}