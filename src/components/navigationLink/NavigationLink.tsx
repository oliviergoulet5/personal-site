import React from 'react';

interface Props {
    text: string;
    href: string;
}

export function NavigationLink({ text, href }: Props) {
    return (
        <li>
            <a className="hover:underline" href={href}>{text}</a>
        </li>
    )
}