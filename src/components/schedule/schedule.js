import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import "./schedule.css"

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
];

function Schedule() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
        console.log(allEvents);
    }

    function handleDeleteEvent() {
        allEvents.forEach(event => {
            if(sameEvent(event, newEvent)) {
                allEvents.splice(allEvents.indexOf(event), 1);
        }})
        setAllEvents([...allEvents])
    }

    function sameEvent(x, y) {
        return(
            x.title === y.title && x.start === y.start && x.end === y.end
        )
    }

    return (
        <div className="Schedule">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" 
                    style={{ marginRight: "10px"}} 
                    selected={newEvent.start} 
                    onChange={(start) => setNewEvent({ ...newEvent, start })}/>
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
                <button stlye={{ marginTop: "10px" }} onClick={handleDeleteEvent}>
                    Delete Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default Schedule;