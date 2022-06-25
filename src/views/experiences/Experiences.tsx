import React, { useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "../../components/timeline/Timeline";
import { events } from "../../data/events";
import { Filters } from "../../components/filters/Filters";
import { Filter } from "../../types";

const initialFilters = [
    { propertyName: "Education", defaultEnabled: true },
    { propertyName: "Career", defaultEnabled: true },
    { propertyName: "Activity", defaultEnabled: true },
    { propertyName: "Project", defaultEnabled: true },
]

export function Experiences() {
    const [selectedEvent, setSelectedEvent] = useState(0);
    const currentEvent = events[selectedEvent];
    const { t } = useTranslation();

    const [filters, setFilters] = useState<Filter[]>(initialFilters);

    const handleFilterRemove = (filter: Filter) => {
        const updatedFilters = filters.filter(f => f.propertyName !== filter.propertyName);
        setFilters([...updatedFilters]);
    }

    const handleFilterAdd = (filter: Filter) => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter]);
        }
    }

    return (
        <div id="experiences" className="min-h-screen">
            <h1 className="ps-heading">Experiences</h1>
            <Filters onFilterRemove={ handleFilterRemove } onFilterAdd={ handleFilterAdd } allFilters={initialFilters} enabledFilters={ filters } />
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
                events={ events.filter((e) => filters.find((f) => f.propertyName.toLowerCase() === e.type)) } 
                selectedEvent={selectedEvent}
            />
        </div>
    )
}