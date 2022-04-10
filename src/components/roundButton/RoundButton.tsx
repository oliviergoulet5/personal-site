import React from 'react';

interface Props {
    text: string;
    onClick?: React.MouseEventHandler;
    icon?: JSX.Element;
}

export function RoundButton({ text, onClick: click, icon }: Props) {

    return (
        <div className="w-fit group transition duration-500 rounded-full p-1 cursor-pointer border-2 border-transparent hover:border-green-300 select-none">
            <button onClick={ click } className="border-gray-600 rounded-full py-4 px-6 border-2 group-hover:border-transparent flex align-middle items-center justify-around">
                { icon }
                { text }
            </button>
        </div>  
    );
}