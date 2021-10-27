import React, { Component } from "react";
import Event from "./event.js";
import './event-list.css';


class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(window.localStorage.getItem('calendarState')) || {
            events: [{"name":"test1", "start":"9:00", "end":"9:15", "number":1}
            ,{"name":"test2", "start":"5:00", "end":"6:05","number":2}],
            removeMode: false,
            eventCount: 3,
        };
      }

      setState(state) {
        window.localStorage.setItem('calendarState', JSON.stringify(state));
        super.setState(state);
      }

    //removes the bottom-most event (temporary solution)
    removeEvent() {
        const events = this.state.events.slice(0, this.state.events.length - 1);
        this.setState({
            events : events,
        })
    }

    addEvent() {
        const events = this.state.events.slice();
        const eventCount = this.state.eventCount;
        //needs to link to seperate add page, set vars to values gotten from page
        let name = "Event (Test)";
        let start = "x:xx";
        let end = "x:xx";
        this.setState({
            events : events.concat([{"name":name, 
            "start":start, "end":end, "number":eventCount}]),
            eventCount : eventCount + 1,
          });
    }

    render() {
        const data = this.state.events;
        const removeMode = this.state.removeMode;

        const removeThing = () => this.removeEvent();
        
        return (
            <div className="EventList">
                <p>List of your events:</p>
                <div>{data.map(function(d, idx){
                    return (<div class="event-container">
                        <Event key={idx}
                            name={d.name}
                            start={d.start}
                            end={d.end}/>
                        <button className="removeEvent"
                            //need way for user to choose which event
                            onClick={removeThing}>
                            Remove Event
                        </button>
                        </div>
                    )
                })}</div>

                        <button className="removeEvent"
                            //need way for user to choose which event
                            onClick={() => this.removeEvent()}>
                            Remove Event
                        </button>

                <button className="addEvent"
                //need component for adding events
                onClick={() => this.addEvent()}>
                    Add Event (Under construction)
                </button>

                
            </div>
            
        );
    }
}

export default EventList;