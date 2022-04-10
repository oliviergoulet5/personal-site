import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationLink } from '../navigationLink/NavigationLink';
import { MenuButton } from '../menuButton/MenuButton';

interface Props {
    onMenuClick: React.MouseEventHandler;
    menuActive: boolean;
}

export function NavigationBar({ menuActive, onMenuClick: menuClick }: Props) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <nav className="p-4 uppercase flex-nowrap grid grid-cols-2 sm:grid-cols-3 justify-start">
            <p className="">Olivier Goulet</p>
            <ul className="list-none flex-none hidden sm:flex space-x-3 md:space-x-6 justify-center">
                <NavigationLink href="/#home" text={t("navigationBar.links.home")} />
                <NavigationLink href="/#about" text={t("navigationBar.links.about")} />
                <NavigationLink href="/#projects" text={t("navigationBar.links.projects")} />
                <NavigationLink href="/#contact" text={t("navigationBar.links.contact")} />
            </ul>
            <div>
                <div className="sm:hidden flex justify-end">
                    <MenuButton menuActive={menuActive} onClick={menuClick} />
                </div>
                <div className="hidden space-x-6 justify-end sm:flex">
                    <button onClick={ () => changeLanguage("en") }>EN</button>
                    <button onClick={ () => changeLanguage("fr") }>FR</button>
                </div>
            </div>
        </nav>
    )
}