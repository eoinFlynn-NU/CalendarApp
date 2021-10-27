import React, { Component } from "react";
//import './event.css';


class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            start : props.start,
            end : props.end,
        };
      }

    render() {
      return (
        <div className="event">
            <h4> {this.props.name} </h4>
            <p class="event-text"> Start: {this.props.start} </p>
            <p class="event-text"> End: {this.props.end} </p>
            <p class="event-text">event placeholder text</p>
        </div>

      )
    }
  }
  export default Event;