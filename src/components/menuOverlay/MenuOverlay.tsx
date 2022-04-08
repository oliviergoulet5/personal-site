import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5'
import { MenuLink } from '../menuLink/MenuLink';

interface Props {
    onClose: React.MouseEventHandler;
}

export function MenuOverlay({ onClose: close }: Props) {
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <div onClick={close} className="sm:hidden block h-full w-full bg-gray-800 z-10 absolute left-0 top-0 overflow-hidden uppercase">
            <ul className="list-none">
                <MenuLink href="/#home" text={t("navigationBar.links.home")} />
                <MenuLink href="/#about" text={t("navigationBar.links.about")} />
                <MenuLink href="/#projects" text={t("navigationBar.links.projects")} />
                <MenuLink href="/#resume" text={t("navigationBar.links.resume")} />
                <MenuLink href="/#contact" text={t("navigationBar.links.contact")} />
            </ul>
            <div className="flex p-6 space-x-8 mt-8">
                <p>Language</p>
                <button onClick={ () => changeLanguage("en") } className="border-b px-1 border-solid border-gray-600">EN</button>
                <button onClick={ () => changeLanguage("fr") } className="border-b px-1 border-solid border-gray-600">FR</button>
            </div>
        </div>
    )
}