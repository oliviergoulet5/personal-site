import React from 'react';
import { NavigationLink } from '../navigationLink/NavigationLink';

export function NavigationBar() {
    return (
        <nav className="p-4 uppercase hidden sm:grid grid-cols-3 gap-1 justify-start">
            <div>
                <p>Olivier Goulet</p>
            </div>
            <ul className="list-none flex space-x-6 justify-center">
                <NavigationLink href="/#home" text="home" />
                <NavigationLink href="/#about" text="about" />
                <NavigationLink href="/#projects" text="projects" />
                <NavigationLink href="/#resume" text="resume" />
                <NavigationLink href="/#contact" text="contact" />
            </ul>
            <ul className="list-none flex space-x-6 justify-end">
                <li>EN</li>
                <li>FR</li>
            </ul>
        </nav>
    )
}