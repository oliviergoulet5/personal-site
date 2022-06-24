import React from "react";
import { Event } from "../../types";
import { TimelineEvent } from "../timelineEvent/TimelineEvent";

interface Props {
    events: Event[];
    selectedEvent: number;
    setSelectedEvent: React.Dispatch<number>;
}


export function Timeline({ events, setSelectedEvent, selectedEvent }: Props) {

    return (
        <div>
            <div className="relative flex justify-between">
                <hr className="absolute w-full my-auto mt-3 border-gray-500" />
                {
                    events.map((e, i) => <TimelineEvent event={e} isSelected={selectedEvent === i} onClick={ () => setSelectedEvent(i) } />) 
                }
            </div>
        </div>
    )
}