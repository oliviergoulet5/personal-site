import React, { useRef, useState } from 'react';
import { MenuOverlay } from './components/menuOverlay/MenuOverlay';
import { NavigationBar } from './components/navigationBar/NavigationBar';
import { RoundButton } from './components/roundButton/RoundButton';
import { About } from './views/about/About';
import { Contact } from './views/contact/Contact';
import { Home } from './views/home/Home';
import { Projects } from './views/projects/Projects';
import { IoArrowUp } from 'react-icons/io5';
import { scrollToTop } from './utils/scroll-to-top';

export function App() {
    const [menuActive, setMenuActive] = useState(false);
    const appRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={appRef} className="bg-gray-800 h-screen text-white">
            <header>
                <NavigationBar menuActive={menuActive} onMenuClick={ () => setMenuActive(!menuActive) } />
            </header>
            <main className="relative w-11/12 sm:w-10/12 m-auto">
                <div className="hidden bg-yellow-300 bg-opacity-20 border-2 rounded-lg p-1 mb-2 text-center border-opacity-20 border-yellow-500 text-sm">Website is still in development!</div>
                <div className="flex flex-col space-y-24">
                <Home/>
                <About />
                <Projects />
                <Contact />
                </div>
                { menuActive && <MenuOverlay onClose={ () => setMenuActive(!menuActive) } />}
            </main>
            <footer className="w-full">
                <div className="flex justify-center h-64 items-center">
                <RoundButton 
                    text="Scroll to Top" 
                    icon={<IoArrowUp color="#FFF" size="100%" className="h-6 w-6 mr-2" />} 
                    onClick={ () => {
                        scrollToTop(appRef.current);
                    }}
                />
                </div>

            </footer>   
        </div>
    );
}