import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { FilterTag } from "../filterTag/FilterTag";
import { Filter } from "../../types";

interface Props {
    filters: Filter[];
}

export function Filters({ filters }: Props) {
    const defaultFilters = filters.filter((f) => f.defaultEnabled)
    const [enabledFilters, setEnabledFilters] = useState<Filter[]>(defaultFilters);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const addFilter = (filter: Filter) => {
        if (!enabledFilters.includes(filter)) {
            setEnabledFilters([...enabledFilters, filter]);
        }
    }

    const removeFilter = (filter: Filter) => {
        const updatedFilters = enabledFilters.filter((f) => f.propertyName !== filter.propertyName);
        setEnabledFilters([...updatedFilters])
    }

    return (
        <>
            <div className="flex space-x-3 my-2">
                <button onClick={ () => setDropdownVisible(!dropdownVisible)} className="flex items-center rounded-lg bg-gray-700 p-2 uppercase text-xs cursor-pointer text-gray-300 transition ease-in-out  hover:bg-gray-600">
                    <HiOutlineFilter size="100%" className="h-4 w-4 text-gray-300 mr-1" />
                    Filters
                </button>
                <div className="flex text-xs align-middle space-x-3">
                    { enabledFilters.map((f) => <FilterTag onClick={ () => removeFilter(f) } propertyName={ f.propertyName } />)}
                </div>
            </div>
            { dropdownVisible && 
                <div className="absolute p-4 bg-gray-700 shadow-2xl rounded-lg text-gray-300">
                    <h1 className="text-md text-gray-300 font-semibold">Filters</h1>
                    <form className="flex flex-col space-y-2 text-sm mt-4">
                        { filters.map((f) => 
                            <div>
                                <input onChange={ (event) => { 
                                    if (event.target.checked) { 
                                        addFilter(f) 
                                    } else { 
                                        removeFilter(f) 
                                    }
                                }} checked={ enabledFilters.find((ef) => ef.propertyName === f.propertyName) ? true : false } className="mr-2" type="checkbox" id={`filter-${f.propertyName.toLowerCase()}`} />
                                <label htmlFor={`filter-${ f.propertyName.toLowerCase() }`}>{ f.propertyName }</label>
                            </div>
                        )}
                        <div className="text-center">
                            <button className="rounded-lg mt-4 hover:bg-green-300 hover:text-green-700 transition ease-in-out bg-green-400 text-sm px-3 py-2 text-green-800 font-medium">Apply</button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}