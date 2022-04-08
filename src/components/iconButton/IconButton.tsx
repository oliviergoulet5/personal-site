import React from 'react';
import { IconType } from 'react-icons';

interface Props {
    icon: IconType;
}

export function IconButton({ icon }: Props) {
    return (
        <button className="border-gray-600 rounded-full h-12 w-12 p-2 border-2 hover:border-white">
            { React.createElement(icon, { color: "#FFF", size: "100%" }) }
        </button>
    )
}