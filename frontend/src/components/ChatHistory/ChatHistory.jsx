import React, { Component } from "react";
import './ChatHistory.scss';
import Message from '../Message';
import { FaComments } from "react-icons/fa";

class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map((msg, index) => (
      <Message
        key={index}
        message={msg.data}
        className={msg.sender === "me" ? "me" : ""}
      />
    ));

    return (
      <div className="ChatHistory">
        <div className="header">
          <FaComments className="chat-icon" />
          <h2>Chat History</h2>
        </div>
        <div className="message-container">
          {messages.length > 0 ? (
            messages
          ) : (
            <div className="empty-state">
              <p>No messages yet...</p>
              <div className="typing-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ChatHistory;
