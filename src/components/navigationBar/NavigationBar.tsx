import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationLink } from '../navigationLink/NavigationLink';

export function NavigationBar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <nav className="p-4 uppercase hidden sm:grid grid-cols-3 gap-1 justify-start">
            <div>
                <p>Olivier Goulet</p>
            </div>
            <ul className="list-none flex space-x-6 justify-center">
                <NavigationLink href="/#home" text={t("navigationBar.links.home")} />
                <NavigationLink href="/#about" text="about" />
                <NavigationLink href="/#projects" text="projects" />
                <NavigationLink href="/#resume" text="resume" />
                <NavigationLink href="/#contact" text="contact" />
            </ul>
            <div className="flex space-x-6 justify-end">
                <button onClick={ () => changeLanguage("en") }>EN</button>
                <button onClick={ () => changeLanguage("fr") }>FR</button>
            </div>
        </nav>
    )
}