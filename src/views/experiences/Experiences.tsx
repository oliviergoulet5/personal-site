import React, { useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "../../components/timeline/Timeline";
import { events } from "../../data/events";
import { Filters } from "../../components/filters/Filters";
import { Filter, Event } from "../../types";

const initialFilters = [
    { id: "education", name: "Education", defaultEnabled: true },
    { id: "career", name: "Career", defaultEnabled: true },
    { id: "activity", name: "Activity", defaultEnabled: true },
    { id: "project", name: "Project", defaultEnabled: true },
]

export function Experiences() {
    const [selectedEvent, setSelectedEvent] = useState<Event>(events[0]);
    const { t } = useTranslation();

    const [filters, setFilters] = useState<Filter[]>(initialFilters);

    const handleFilterRemove = (filter: Filter) => {
        const updatedFilters = filters.filter(f => f.id !== filter.id);
        setFilters([...updatedFilters]);
    }

    const handleFilterAdd = (filter: Filter) => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter]);
        }
    }

    return (
        <div id="experiences" className="min-h-screen">
            <p className="w-full bg-red-500/10 border border-red-500 text-red-300 p-2 rounded-lg mb-7">This section is still a work in progress and contains many bugs. It needs a big refactor as well.</p>
            <h1 className="ps-heading">Experiences</h1>
            <Filters onFilterRemove={ handleFilterRemove } onFilterAdd={ handleFilterAdd } allFilters={initialFilters} enabledFilters={ filters } />
            <div className="mb-24 flex justify-between">
                <div className="w-1/3">
                    <h2 className="ps-subheading">{ t(`timeline.events.${selectedEvent.id}.title`) }</h2>
                    <p className="mb-2">{ t(`timeline.events.${selectedEvent.id}.description1`)}</p>
                    <p>{ t(`timeline.events.${selectedEvent.id}.description2`) }</p>
                </div>
                <figure className="m-auto">
                    <img className="rounded-lg shadow-xl h-96" src={selectedEvent.imageSrc} />
                </figure>
            </div>
            
            <Timeline 
                setSelectedEvent={ setSelectedEvent }
                events={ events.filter((e) => filters.find((f) => f.id === e.type)) } 
                selectedEvent={selectedEvent}
            />
        </div>
    )
}