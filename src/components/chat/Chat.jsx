import React from 'react';
import ChannelsList from '../ChannelsList/ChannelsList';
import MessagesList from '../MessagesList/MessagesList';
import MessageInputForm from '../MessageInputForm/MessageInputForm';

const Chat = () => {
  return (
    <div className="chat">
      <ChannelsList />
      <MessagesList />
      <MessageInputForm />
    </div>
  );
};

export default Chat;
