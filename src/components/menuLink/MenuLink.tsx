import React from "react";

interface Props {
    text: string;
    href: string;
}

export function MenuLink({ text, href }: Props) {
    return (
        <li className="p-6 -mb-px border-y border-solid border-gray-600 hover:bg-gray-600 cursor-pointer">
            <a href={href}>{text}</a>
        </li>
    )
}