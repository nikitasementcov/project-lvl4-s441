import React from 'react';
import ChannelsList from '../ChannelsList/ChannelsList';
import MessagesList from '../MessagesList/MessagesList';
import MessageInput from '../MessageInput/MessageInput';
import ChannelDeletionModal from '../ChannelDeletionModal/ChannelDeletionModal';
import ChannelEditingModal from '../ChannelEditingModal/ChannelEditingModal';

import './chat.css';

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
