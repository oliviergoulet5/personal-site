import React, { MouseEvent, MouseEventHandler, useState } from "react";
import { useTranslation } from "react-i18next";
import { FilterTag } from "../../components/filterTag/FilterTag";
import { Timeline } from "../../components/timeline/Timeline";
import { events } from "../../data/events";
import { HiOutlineFilter } from "react-icons/hi";

export function Experiences() {
    const [selectedEvent, setSelectedEvent] = useState(0);

    const currentEvent = events[selectedEvent];

    const { t } = useTranslation();

    return (
        <div id="experiences" className="min-h-screen">
            <h1 className="ps-heading">Experiences</h1>
            <div className="flex space-x-3 my-2">
                <button className="flex items-center rounded-lg bg-gray-700 p-2 uppercase text-xs cursor-pointer text-gray-300 transition ease-in-out  hover:bg-gray-600">
                    <HiOutlineFilter size="100%" className="h-4 w-4 text-gray-300 mr-1" />
                    Filters
                </button>
                <div className="flex text-xs align-middle space-x-3">
                    <FilterTag propertyName="Education" />
                    <FilterTag propertyName="Career" />
                    <FilterTag propertyName="Activities" />
                    <FilterTag propertyName="Projects" />
                </div>
            </div>
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