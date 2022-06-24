import React from "react";
import { IoBriefcase, IoSchool, IoConstruct, IoHappy } from "react-icons/io5"
import { EventType, Event } from "../../types";

interface Props {
    events: Event[];
    selectedEvent: number;
    setSelectedEvent: React.Dispatch<number>;
}

const iconMap: Record<EventType, any> = {
    education: IoSchool,
    career: IoBriefcase,
    job: IoBriefcase,
    project: IoConstruct,
    activity: IoHappy
}

export function Timeline({ events, setSelectedEvent, selectedEvent }: Props) {

    return (
        <div>
            <div className="relative flex justify-between">
                <hr className="absolute w-full my-auto mt-3 border-gray-500" />
                {
                    events.map((e, i) => {
                        const isSelectedEvent = selectedEvent === i;
                        return <div 
                            onClick={ () => setSelectedEvent(i) }
                            className={`cursor-pointer w-8 h-8 p-1 rounded-full border-2 ${ isSelectedEvent ? "border-green-300" : "border-gray-500 hover:border-gray-400" } z-10 bg-gray-800`}>
                                { React.createElement(iconMap[e.type], { size:"100%", className: isSelectedEvent ? "text-gray-300" : "text-gray-400" }) }
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