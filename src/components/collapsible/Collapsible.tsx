import React, { useState, PropsWithChildren } from 'react';
import { IconType } from 'react-icons';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

interface Props {
    heading: string;
    icon: IconType;
    iconColor: string;
}

export function Collapsible({ heading, icon, iconColor, children }: PropsWithChildren<Props>) {
    const [collapsed, setCollapsed] = useState(true);

    const handleClick = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="">
            <div onClick={handleClick} className="select-none rounded-lg hover:bg-gray-700 p-2.5 flex justify-between cursor-pointer">
                <span>
                    <span className="mr-2">{ React.createElement(icon, { size: "100%" ,color: iconColor, className: "inline-block w-8" }) }</span> 
                    { heading }
                </span>
                { collapsed ? <IoChevronUp size="100%" className="w-8" /> : <IoChevronDown size="100%" className="w-8" /> }
            </div>
            { collapsed && 
                <div className="flex">
                    <span className="shrink-0 inline-block w-px ml-6 mr-2 mt-0.5 bg-gray-500" />
                    <div className="text-sm text-gray-300">
                        { children }
                    </div>
                </div>  
            }
        </div>
    )
}