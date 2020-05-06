import React from "react";
import MessageCard from "./messagecard";
import "./messagelist.css";

const MessageList = (props) => {
  const messages = props.messageList.map((message) => {
    return (
      <MessageCard
        author={message.author}
        message={message.message}
        date={message.date}
        messageId={message.id}
        localId={props.id}
      />
    );
  });

  return <div className="message-list">{messages}</div>;
};

export default MessageList;
