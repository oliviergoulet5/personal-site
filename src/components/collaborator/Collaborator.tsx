import React from 'react';

interface Props {
    avatarUrl: string,
    profileUrl: string
}
export function Collaborator({ avatarUrl, profileUrl }: Props) {
    return (
        <a className="border-2 rounded-full border-transparent hover:border-white transition duration-300" href={profileUrl}>
            <img className="rounded-full h-12 p-1" src={avatarUrl} alt="Profile of a collaborator." />
        </a>
    )
}