import React from "react";

export function Contact() {
    return (
        <div id="contact">
            <form className="w-full sm:w-8/12 m-auto grid grid-cols-2 gap-4">
                    <div className="ps-input-group">
                        <label className="ps-label">Email</label>
                        <input className="ps-input"/>
                    </div>
                    <div className="ps-input-group">
                        <label className="ps-label">Name</label>
                        <input className="ps-input" />
                    </div>
                    <div className="ps-input-group col-span-2">
                        <label className="ps-label">Subject</label>
                        <input className="ps-input w-full" />
                    </div>
                    <div className="ps-input-group col-span-2">
                        <label className="ps-label">Message</label>
                        <textarea className="ps-input" />
                    </div>
            </form>
        </div>
    );
}