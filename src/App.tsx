import React, { useState } from 'react';
import { MenuOverlay } from './components/menuOverlay/MenuOverlay';
import { NavigationBar } from './components/navigationBar/NavigationBar';
import { Home } from './views/home/Home';

export function App() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="bg-gray-800 h-screen text-white overflow-hidden">
            <header>
                <NavigationBar menuActive={menuActive} onMenuClick={ () => setMenuActive(!menuActive) } />
            </header>
            <main className="relative h-full w-screen sm:w-10/12 m-auto">
                <Home />
                { menuActive && <MenuOverlay onClose={ () => setMenuActive(!menuActive) } />}
            </main>
        </div>
    );
}