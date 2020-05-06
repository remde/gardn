import React from "react";
import MessageCard from "./messagecard";
import "./messagelist.css";

const MessageList = (props) => {
  const messages = props.messageList.map((message) => {
    return (
      <MessageCard
        author={message.author}
        username={props.username}
        message={message.message}
        date={message.date}
        key={message.id}
      />
    );
  });

  return <div className="message-list">{messages}</div>;
};

export default MessageList;
