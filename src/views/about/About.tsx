import React from 'react';

export function About() {
    return (
        <div className="">
            <h1 className="ps-heading">About</h1>
            <div className="text-gray-300 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                <div>
                    <h2 className="ps-subheading">About Me</h2>
                    <p className="mb-2">I have been passionate about software development for many years now. 
                        My interests shifted from game development to systems programming and, 
                        finally, into web development.
                    </p>
                    <p>When I am not sitting in front of a computer, I like to watch hockey and MMA.</p>
                </div>
                <div>
                    <h2 className="ps-subheading">Education</h2>
                    <p className="mb-2">In 2018, I moved to Toronto to study Computer Programming & Analysis at Seneca College.</p>
                    <p>I attended multiple hackathons during my college years and met plenty of interesting future software 
                        developers. These events inspired me to keep learning beyond the standard curriculum and pursue side-projects 
                        that I can be proud of.
                    </p>
                </div>
            </div>
        </div>

    );
}