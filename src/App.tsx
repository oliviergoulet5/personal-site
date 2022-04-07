import React, { useState } from 'react';
import { MenuOverlay } from './components/menuOverlay/MenuOverlay';
import { NavigationBar } from './components/navigationBar/NavigationBar';

export function App() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="bg-gray-800 h-screen text-white">
            <header>
                <NavigationBar menuActive={menuActive} onMenuClick={ () => setMenuActive(!menuActive) } />
            </header>
            <main className="relative h-screen">
                { menuActive && <MenuOverlay onClose={ () => setMenuActive(!menuActive) } />}
            </main>
        </div>
    );
}