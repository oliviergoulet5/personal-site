import React from 'react';
import { useTranslation } from 'react-i18next';

export function About() {
    const { t } = useTranslation();
    return (
        <div id="about" className="">
            <h1 className="ps-heading">{ t("about.heading") }</h1>
            <div className="flex flex-col sm:flex-row sm:space-x-8 sm:space-y-0 space-y-8">
                <div className="text-gray-300 flex flex-col space-y-4 sm:space-y-0">
                    <div>
                        <h2 className="ps-subheading">{ t("about.aboutMe.heading") }</h2>
                        <p className="mb-3">{ t("about.aboutMe.part1") }</p>
                        <p>{ t("about.aboutMe.part2") }</p>
                    </div>
                    <div>
                        <h2 className="ps-subheading">{ t("about.education.heading") }</h2>
                        <p className="mb-3">{ t("about.education.part1") }</p>
                        <p>{ t("about.education.part2") }</p>
                    </div>
                </div>
                <div>
                    <figure className="text-center text-xs text-gray-300">
                        <img className="rounded-xl shadow-2xl" src="images/nsbehacks.png" />
                        <figcaption className="mt-4">{ t("about.caption") }</figcaption>
                    </figure>
                </div>
            </div>
        </div>

    );
}