import React, { Component } from "react";
import Event from "./event.js";

export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          events: Array(9).fill(null),
        };
      }

    render() {
        return (
            <div className="EventList">
                <p>Placehold text for event page</p>
                <Event
                name="Example1"
                start="9:00"
                end="10:00"/>
            </div>
            
        );
    }
}