import React, { MouseEvent, MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "../../components/timeline/Timeline";
import { events } from "../../data/events";

export function Experiences() {
    const [selectedEvent, setSelectedEvent] = useState(0);

    const currentEvent = events[selectedEvent];

    const { t } = useTranslation();

    return (
        <div id="experiences" className="min-h-screen">
            <h1 className="ps-heading">Timeline</h1>
            <div className="mb-24 flex justify-between">
                <div className="w-1/3">
                    <h2 className="ps-subheading">{ t(`timeline.events.${currentEvent.id}.title`) }</h2>
                    <p className="mb-2">{ t(`timeline.events.${currentEvent.id}.description1`)}</p>
                    <p>{ t(`timeline.events.${currentEvent.id}.description2`) }</p>
                </div>
                <figure className="m-auto">
                    <img className="rounded-lg shadow-xl h-96" src={currentEvent.imageSrc} />
                </figure>
            </div>
            
            <Timeline 
                setSelectedEvent={ setSelectedEvent }
                events={ events } 
                selectedEvent={selectedEvent}
            />
        </div>
    )
}