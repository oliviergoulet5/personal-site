import React from 'react';
import { IoMenu } from 'react-icons/io5';

export function MenuButton() {
    return (
        <button className="flex justify-center align-middle w-12 h-12 p-2 rounded-full border-2 border-solid border-gray-600 hover:border-white cursor-pointer">
            <IoMenu color="#FFF" size="100%" />
        </button>
    );
}