import React from "react";
import { Filter } from "../../types";

interface Props {
    ref?: React.RefObject<HTMLDivElement>;
    allFilters: Filter[];
    onFilterAdd: (filter: Filter) => void;
    onFilterRemove: (filter: Filter) => void;
    enabledFilters: Filter[];
}

export function FiltersDropdown({ ref, allFilters, onFilterAdd, onFilterRemove, enabledFilters }: Props) {
    return (
        <div ref={ref} className="absolute p-4 bg-gray-700 shadow-2xl rounded-lg text-gray-300">
            <h1 className="text-md text-gray-300 font-semibold">Filters</h1>
            <form className="flex flex-col space-y-2 text-sm mt-4">
                { allFilters.map((f) => 
                    <div>
                        <input onChange={ (event) => { 
                            if (event.target.checked) { 
                                onFilterAdd(f) 
                            } else { 
                                onFilterRemove(f) 
                            }
                        }} checked={ enabledFilters.find((ef) => ef.id === f.id) ? true : false } className="mr-2" type="checkbox" id={`filter-${f.id}`} />
                        <label htmlFor={`filter-${ f.id }`}>{ f.name }</label>
                    </div>
                )}
                <div className="text-center">
                    <button className="rounded-lg mt-4 hover:bg-green-300 hover:text-green-700 transition ease-in-out bg-green-400 text-sm px-3 py-2 text-green-800 font-medium">Apply</button>
                </div>
            </form>
        </div>
    )
}