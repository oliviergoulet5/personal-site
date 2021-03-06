import React from 'react';

interface Props {
    text: string;
    onClick?: React.MouseEventHandler;
}

export function FilledRoundButton({ text, onClick: click }: Props) {

    return (
        <div className="group transition duration-500 rounded-full p-1 cursor-pointer border-2 border-transparent hover:border-green-300 select-none">
            <button onClick={ click } className="rounded-full py-4 px-6 border-2 border-transparent bg-white text-gray-800">
                { text }
            </button>
        </div>  
    );
}