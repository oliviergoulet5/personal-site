import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { FilterTag } from "../filterTag/FilterTag";
import { Filter } from "../../types";
import { useOutsideAlerter } from "../../hooks/outsideAlerter";
import { FiltersDropdown } from "../filtersDropdown/FiltersDropdown";
import { useTranslation } from "react-i18next";

// Needs refactoring. Dislike the state management and props between Experiences.tsx and Filters.tsx

interface Props {
    enabledFilters: Filter[];
    onFilterRemove: (filter: Filter) => void;
    onFilterAdd: (filter: Filter) => void;
    allFilters: Filter[];
}

export function Filters({ enabledFilters, onFilterRemove, onFilterAdd, allFilters }: Props) {
    const { visible, setVisible, ref } = useOutsideAlerter<HTMLDivElement>(false);
    const { t } = useTranslation();
    return (
        <>
            <div className="flex space-x-3 my-2">
                <button onClick={ () => setVisible(!visible)} className="flex items-center rounded-lg bg-gray-700 p-2 uppercase text-xs cursor-pointer text-gray-300 transition ease-in-out  hover:bg-gray-600">
                    <HiOutlineFilter size="100%" className="h-4 w-4 text-gray-300 mr-1" />
                    { t("experiences.filters.filter-button") }
                </button>
                <div className="flex text-xs align-middle space-x-3">
                    { enabledFilters.map((f) => <FilterTag onClick={ () => onFilterRemove(f) } text={ t(`experiences.event-types.${f.id}`) } />)}
                </div>
            </div>
            { visible && 
                <FiltersDropdown 
                    ref={ref} 
                    enabledFilters={ enabledFilters }
                    allFilters={ allFilters }
                    onFilterAdd={ onFilterAdd }
                    onFilterRemove={ onFilterRemove }  
                /> 
            }
        </>
    )
}