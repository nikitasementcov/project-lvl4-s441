import React from 'react';
import Channels from './Channels';
import Messages from './Messages';
import ChannelDeletionModal from './ChannelDeletionModal';
import ChannelEditingModal from './ChannelEditingModal';

const Chat = () => (
  <>
    <div className="my-3 chat">
      <Channels className="channels" />
      <Messages className="messages" />
    </div>
    <ChannelDeletionModal />
    <ChannelEditingModal />
  </>
);

export default Chat;
