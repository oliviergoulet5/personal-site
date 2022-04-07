import React from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

interface Props {
    menuActive: boolean,
    onClick: React.MouseEventHandler;
}

export function MenuButton({ menuActive, onClick: click }: Props) {
    return (
        <button onClick={click} className="flex justify-center align-middle w-12 h-12 p-2 rounded-full border-2 border-solid border-gray-600 hover:border-white cursor-pointer">
            { menuActive ? <IoClose color="#FFF" size="100%" /> : <IoMenu color="#FFF" size="100%" /> }
        </button>
    );
}