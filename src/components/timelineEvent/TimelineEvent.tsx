import { EventType, Event } from "../../types"
import { IoSchool, IoBriefcase, IoConstruct, IoHappy } from "react-icons/io5";
import React from "react";
import { useTranslation } from "react-i18next";
import "./animate.css";

interface Props {
    event: Event
    isSelected: boolean;
    onClick: React.MouseEventHandler
}

const iconMap: Record<EventType, any> = {
    education: IoSchool,
    career: IoBriefcase,
    job: IoBriefcase,
    project: IoConstruct,
    activity: IoHappy
}

export function TimelineEvent({ event, isSelected, onClick }: Props) {
    const { t } = useTranslation();
    const icon = { 
        element: iconMap[event.type],
        props: {
            size: "100%",
            className: isSelected ? "text-gray-300" : "text-gray-400"
        }
    };

    const circleColor = isSelected ? "border-green-300" : "border-gray-500 hover:border-gray-400";

    return (
        <div
            onClick={ onClick }
            className={`cursor-pointer w-8 h-8 p-1 rounded-full border-2 z-10 bg-gray-800 ${ circleColor }`}
            style={{
                animationName: isSelected ? "animate-selection" : undefined,
                animationTimingFunction: "ease-in-out",
                animationDuration: "0.5s"
            }}
        >
            { React.createElement(icon.element, icon.props) }
            <div className={`mt-6 text-center whitespace-nowrap ${ isSelected || "hidden lg:block"}`}>
                <p className="text-sm">{ t(`experiences.events.${ event.id }.title`) }</p>
                <p className="text-xs">{ t(`experiences.events.${ event.id }.date`) }</p>
            </div>
        </div>
    )
}