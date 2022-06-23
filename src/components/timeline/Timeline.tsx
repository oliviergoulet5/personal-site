import React from "react";
import { IoBriefcase, IoSchool, IoConstruct, IoHappy } from "react-icons/io5"
type EventType = "education" | "career" | "job" | "project" | "activity"

interface Event {
    date: string; // ex: May 2022
    type: EventType
    title: string;
}

interface Props {
    events: Event[]
}

const iconMap: Record<EventType, JSX.Element> = {
    education: <IoSchool size="100%" className="text-gray-400" />,
    career: <IoBriefcase size="100%" className="text-gray-400" />,
    job: <IoBriefcase size="100%" className="text-gray-400" />,
    project: <IoConstruct size="100%" className="text-gray-400" />,
    activity: <IoHappy size="100%" className="text-gray-400" />
}

export function Timeline({ events }: Props) {

    return (
        <div>
            <div className="relative flex justify-between">
                <hr className="absolute w-full my-auto mt-3 border-gray-500" />
                {
                    events.map((e) => {
                        return <div className="cursor-pointer w-8 h-8 p-1 rounded-full border-2 border-gray-500 hover:border-gray-400 z-10 bg-gray-800">
                            { iconMap[e.type] }
                            <div className="mt-6 text-center whitespace-nowrap">
                                <p className="text-sm">{ e.title }</p>
                                <p className="text-xs">{ e.date } </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}