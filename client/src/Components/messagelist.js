import React from "react";
import MessageCard from "./messagecard";
import "./messagelist.css";

const MessageList = (props) => {
  const messages = props.messageList.map((message) => {
    return <MessageCard author="self" message={message} />;
  });

  return <div className="message-list">{messages}</div>;
};

export default MessageList;
