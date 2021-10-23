import React, { Component } from "react";
import './event.css';


export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            start : props.start,
            end : props.end,
        };
      }

      //We need to figure out how to list all events, not just an example
    render() {
      return (
        <div className="event">
            <h1> props.name </h1>
            <p>event placeholder</p>
        </div>

      )
    }
  }