import React from 'react';
import cn from 'classnames';

import ChannelsList from '../ChannelsList/ChannelsList';
import MessagesList from '../MessagesList/MessagesList';
import MessageInput from '../MessageInput/MessageInput';

import styles from './chat.css';

const Chat = () => {
  return (
    <div className={cn(styles.chat, 'my-3')}>
      <ChannelsList className={cn(styles.channels)} />
      <MessagesList
        className={(styles.messages, { border: true, 'p-3': true })}
      />
      <MessageInput classNames={styles.messageForm} />
    </div>
  );
};

export default Chat;
