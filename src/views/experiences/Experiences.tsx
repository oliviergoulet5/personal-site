import React, { MouseEvent, MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import { FilterTag } from "../../components/filterTag/FilterTag";
import { Timeline } from "../../components/timeline/Timeline";
import { events } from "../../data/events";
import { HiOutlineFilter } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Filters } from "../../components/filters/Filters";

export function Experiences() {
    const [selectedEvent, setSelectedEvent] = useState(0);

    const currentEvent = events[selectedEvent];

    const { t } = useTranslation();

    return (
        <div id="experiences" className="min-h-screen">
            <h1 className="ps-heading">Experiences</h1>
            <Filters 
                filters={[
                    { propertyName: "Education", defaultEnabled: true },
                    { propertyName: "Career", defaultEnabled: true },
                    { propertyName: "Activities", defaultEnabled: true },
                    { propertyName: "Projects", defaultEnabled: true },
                ]} 
            />
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