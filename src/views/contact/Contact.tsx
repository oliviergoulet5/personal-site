import React, { useState } from "react";
import { RoundButton } from "../../components/roundButton/RoundButton";
import { SiDiscord } from 'react-icons/si';
import { ImLinkedin2 } from 'react-icons/im';
import { DiGithubAlt } from 'react-icons/di';
import { useTranslation } from "react-i18next";

type Section = "form" | "none" | "discord";

export function Contact() {
    const [activeSection, setActiveSection] = useState<Section>("none");
    const { t } = useTranslation();

    return (
        <div id="contact" className="">
            <h1 className="ps-heading text-center mb-3">{ t("contact.heading") }</h1>
            <p className="text-gray-300 text-center mb-6">{ t("contact.subheading") }</p>
                <div className="flex justify-center w-full">
                <div className="m-auto inline-flex flex-col sm:flex-row justify-center mb-8 items-center space-y-6 sm:space-y-0 sm:space-x-8">
                    <RoundButton onClick={ () => setActiveSection("form") } text={ t("contact.options.message") } />
                    <p className="font-bold justify-self-stretch grow uppercase">
                        { t("contact.options.or")}
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
            </div>
            { activeSection === "discord" && 
            <div className="flex justify-center">
                <p className="inline-block bg-gray-900 border-2 rounded-lg p-6 border-gray-700 m-auto">{ t("contact.options.discord") }</p>
            </div>
            }
            

            { activeSection === "form" && 
                <form className="w-full sm:w-8/12 m-auto grid grid-cols-2 gap-4">
                        <div className="ps-input-group col-span-2 sm:col-span-1">
                            <label className="ps-label">{ t("contact.form.email") }</label>
                            <input className="ps-input"/>
                        </div>
                        <div className="ps-input-group col-span-2 sm:col-span-1">
                            <label className="ps-label">{ t("contact.form.name") }</label>
                            <input className="ps-input" />
                        </div>
                        <div className="ps-input-group col-span-2">
                            <label className="ps-label">{ t("contact.form.subject") }</label>
                            <input className="ps-input w-full" />
                        </div>
                        <div className="ps-input-group col-span-2">
                            <label className="ps-label">{ t("contact.form.message") }</label>
                            <textarea className="ps-input" rows={5} />
                        </div>
                </form>
            }
        </div>
    );
}