import React from 'react';
import Channels from './Channels';
import Messages from './Messages';
import ChannelDeletionModal from './ChannelDeletionModal';
import ChannelEditingModal from './ChannelEditingModal';
import ChannelCreationModal from './ChannelCreationModal';

const Chat = () => (
  <>
    <div className="my-3 chat">
      <Channels />
      <Messages />
    </div>
    <ChannelDeletionModal />
    <ChannelEditingModal />
    <ChannelCreationModal />
  </>
);

export default Chat;
