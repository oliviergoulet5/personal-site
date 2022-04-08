import React, { useState } from 'react';
import { MenuOverlay } from './components/menuOverlay/MenuOverlay';
import { NavigationBar } from './components/navigationBar/NavigationBar';
import { About } from './views/about/About';
import { Home } from './views/home/Home';
import { Projects } from './views/projects/Projects';

export function App() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="bg-gray-800 h-screen text-white">
            <header>
                <NavigationBar menuActive={menuActive} onMenuClick={ () => setMenuActive(!menuActive) } />
            </header>
            <main className="relative w-11/12 sm:w-10/12 m-auto">
                <div className="hidden bg-yellow-300 bg-opacity-20 border-2 rounded-lg p-1 mb-2 text-center border-opacity-20 border-yellow-500 text-sm">Website is still in development!</div>
                <div className="flex flex-col space-y-24">
                <Home />
                <About />
                <Projects />
                </div>
                { menuActive && <MenuOverlay onClose={ () => setMenuActive(!menuActive) } />}
            </main>
            <footer className="h-14 w-full">
                
            </footer>
        </div>
    );
}