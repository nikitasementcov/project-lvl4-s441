import React from 'react';
import cn from 'classnames';

import ChannelsList from '../ChannelsList/ChannelsList';
import MessagesList from '../MessagesList/MessagesList';
import MessageInput from '../MessageInput/MessageInput';

import styles from './chat.css';
import ChannelDeletionModal from '../ChannelDeletionModal/ChannelDeletionModal';
import ChannelEditingModal from '../ChannelEditingModal/ChannelEditingModal';

const Chat = () => {
  return (
    <div className={cn(styles.chat, 'my-3')}>
      <ChannelsList className={cn(styles.channels)} />
      <MessagesList
        className={cn(styles.messages, { border: true, 'p-3': true })}
      />
      <MessageInput classNames={styles.messageForm} />
      <ChannelDeletionModal />
      <ChannelEditingModal />
    </div>
  );
};

export default Chat;
