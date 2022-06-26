import React, { useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "../../components/timeline/Timeline";
import { events } from "../../data/events";
import { Filters } from "../../components/filters/Filters";
import { Filter, Event } from "../../types";
import { AiOutlineQuestionCircle } from "react-icons/ai";

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

        // set selected event to first event found which meets filter criteria
        if (selectedEvent.type === filter.id) setSelectedEvent(events.find(e => e.type !== filter.id)!);
    }

    const handleFilterAdd = (filter: Filter) => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter]);
        }
    }

    return (
        <div id="experiences" className="min-h-screen">
            <p className="w-full bg-red-500/10 border border-red-500 text-red-300 p-2 rounded-lg mb-7">This section is still a work in progress and contains many bugs. It needs a big refactor as well.</p>
            <h1 className="ps-heading">{ t("experiences.heading") }</h1>
            <Filters onFilterRemove={ handleFilterRemove } onFilterAdd={ handleFilterAdd } allFilters={initialFilters} enabledFilters={ filters } />
                { filters.length !== 0 ? 
                    <>  
                        <div className="mb-24 flex justify-between">
                            <div className="w-1/3">
                                <h2 className="ps-subheading">{ t(`experiences.events.${selectedEvent.id}.title`) }</h2>
                                <p className="mb-2">{ t(`experiences.events.${selectedEvent.id}.description1`)}</p>
                                <p>{ t(`experiences.events.${selectedEvent.id}.description2`) }</p>
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
                    </>
                    :
                    <div className="flex flex-col justify-center items-center mt-24">
                        <AiOutlineQuestionCircle size="100%" className="h-16 w-16 text-gray-500" />
                        <p className="mt-6 mb-2 text-gray-400 font-bold uppercase text-3xl">No results</p>
                        <p className="text-gray-500 font-medium text-xl">Try modifying the filters to find events</p>
                    </div>
                }
            
        </div>
    )
}