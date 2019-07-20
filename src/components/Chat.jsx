import React from 'react';
import ChannelsList from './ChannelsList';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';
import ChannelDeletionModal from './ChannelDeletionModal';
import ChannelEditingModal from './ChannelEditingModal';

const Chat = () => (
  <div className="my-3 chat">
    <ChannelsList className="channels" />
    <MessagesList className="messages border p-3" />
    <MessageInput classNames="messageForm" />
    <ChannelDeletionModal />
    <ChannelEditingModal />
  </div>
);

export default Chat;
