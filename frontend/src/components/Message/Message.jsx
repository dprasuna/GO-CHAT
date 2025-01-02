import React, { Component } from "react";
import './Message.scss';
import { FaUserCircle } from "react-icons/fa";

class Message extends Component {
  constructor(props) {
    super(props);
    const temp = JSON.parse(this.props.message);
    this.state = {
      message: temp,
    };
  }

  render() {
    const { body } = this.state.message;
    return (
      <div className="Message">
        <FaUserCircle className="user-icon" />
        <div className="message-body">{body}</div>
      </div>
    );
  }
}


export default Message;
