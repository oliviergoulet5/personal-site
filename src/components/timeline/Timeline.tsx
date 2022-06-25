import React from "react";
import { Event } from "../../types";
import { TimelineEvent } from "../timelineEvent/TimelineEvent";

interface Props {
    events: Event[];
    selectedEvent: Event;
    setSelectedEvent: React.Dispatch<Event>;
}


export function Timeline({ events, setSelectedEvent, selectedEvent }: Props) {

    return (
        <div>
            <div className="relative flex justify-between">
                <hr className="absolute w-full my-auto mt-3 border-gray-500" />
                {
                    events.map((e, i) => <TimelineEvent event={e} isSelected={e.id === selectedEvent.id} onClick={ () => setSelectedEvent({...e}) } />) 
                }
            </div>
        </div>
    )
}