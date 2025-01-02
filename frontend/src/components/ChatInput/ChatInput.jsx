import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import './ChatInput.scss';

class ChatInput extends React.Component {
  render() {
    return (
      <div className="ChatInput">
        <input
          onKeyDown={this.props.send}
          placeholder="Type a message..."
        />
        <button onClick={() => alert("Sending message!")}>
          <FaPaperPlane />
        </button>
      </div>
    );
  }
}

export default ChatInput;
