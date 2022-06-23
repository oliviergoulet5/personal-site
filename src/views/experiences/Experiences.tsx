import React from "react";
import { Timeline } from "../../components/timeline/Timeline";

export function Experiences() {
    return (
        <div id="experiences" className="min-h-screen">
            <h1 className="ps-heading">Timeline</h1>
            <div className="mb-24 flex justify-between">
                <div className="w-1/3">
                    <h2 className="ps-subheading">Began Seneca College</h2>
                    <p>In September of 2018, I began my studies in Computer Programming & Analysis at Seneca College in Toronto, ON. It was a three year program where we learned about web development, database, cloud computing, game development, and systems programming.</p>
                </div>
                <figure className="m-auto">
                    <img className="rounded-lg shadow-xl max-h-64" src="https://images.dailyhive.com/20200313074400/shutterstock_1450069133.jpg" />
                </figure>
            </div>
            
            <Timeline events={[
                {
                    title: "Seneca College",
                    type: "education",
                    date: "Sep 2018"
                },
                {
                    title: "NSBEHacks 2018",
                    type: "activity",
                    date: "Nov 2018"
                },
                {
                    title: "PrivaNote",
                    type: "project",
                    date: "Apr 2021 - Dec 2021"
                },
                {
                    title: "Graduation",
                    type: "education",
                    date: "Dec 2021" 
                },
                {
                    title: "Eclipse Foundation",
                    type: "career",
                    date: "Jul 2022 - Current"
                }
            ]} />
        </div>
    )
}