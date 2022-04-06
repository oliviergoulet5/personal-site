import React from 'react';
import { NavigationBar } from './components/navigationBar/NavigationBar';

export function App() {
    return (
        <div className="bg-gray-800 h-screen text-white">
            <header>
                <NavigationBar />
            </header>
        </div>
    );
}