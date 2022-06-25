import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
    propertyName: string;
}
export function FilterTag({ propertyName }: Props) {
    return (
        <div 
            className="flex my-auto py-1 px-2 bg-green-700/50 text-green-300 rounded-lg select-none cursor-pointer">
                <p className="uppercase">{ propertyName }</p>
                <IoClose size="100%" className="ml-1 h-4 w-4 self-center" />
        </div>
    )
}