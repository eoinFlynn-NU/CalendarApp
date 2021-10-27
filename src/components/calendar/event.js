import React, { Component } from "react";
import './event.css';


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
            <p> Start: {this.props.start} </p>
            <p> End: {this.props.end} </p>
            <p>event placeholder text</p>
        </div>

      )
    }
  }
  export default Event;