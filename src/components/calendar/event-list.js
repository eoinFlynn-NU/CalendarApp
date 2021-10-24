import React, { Component } from "react";
import Event from "./event.js";

export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [{"name":"test1", "start":"9:00", "end":"9:15"}
            ,{"name":"test2", "start":"5:00", "end":"6:05"}],
        };
      }

    addEvent() {
        const events = this.state.events.slice();
        //needs to link to seperate add page, set vars to values gotten from page
        let name = "added event";
        let start = "x:xx";
        let end = "x:xx";
        this.setState({
            events : events.concat([{"name":name, 
            "start":start, "end":end}]),
          });
        return null;
    }

    render() {
        const data = this.state.events;
        return (
            
            <div className="EventList">

                <p>List of your events:</p>
                <div>{data.map(function(d, idx){
                    return (<Event key={idx}
                        name={d.name}
                        start={d.start}
                        end={d.end} />)
                })}</div>
                <button className="addEvent"
                //need component for adding events
                onClick={() => this.addEvent()}>
                    Add Event (Under construction)
                </button>
            </div>
            
        );
    }
}