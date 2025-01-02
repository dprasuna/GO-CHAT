import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import './ChatInput.scss';
import {sendMsg } from '../../api';

class ChatInput extends React.Component {
  handleButtonClick = () => {
    const message = document.querySelector("input").value.trim(); // Get the value from the input
    if (message) {
      sendMsg(message);
      document.querySelector("input").value = ""; 
    }
  };

  render() {
    return (
      <div className="ChatInput">
        <input
          onKeyDown={this.props.send}
          placeholder="Type a message..."
        />
        <button onClick={this.handleButtonClick}>
          <FaPaperPlane />
        </button>
      </div>
    );
  }
}

export default ChatInput;
