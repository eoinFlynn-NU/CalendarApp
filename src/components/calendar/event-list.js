import React, { Component } from "react";
import Event from "./event.js";

export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
      }

    render() {
        return (
            <div className="EventList">

                <p>List of your events</p>
                <Event
                name="Example1"
                start="9:00"
                end="10:00"/>
                <button className="addEvent"
                //need component for adding events
                //onClick={this.addEvent()}
                >
                    Add Event
                </button>
            </div>
            
        );
    }
}