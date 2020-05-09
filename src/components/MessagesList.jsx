import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Message from './Message';

const MessagesList = ({ className }) => {
  const { messages, currentChannelId } = useSelector(state => ({
    messages: state.messages.byId,
    currentChannelId: state.app.currentChannelId,
  }));

  const renderMessages = () =>
    _.filter(messages, m => m.channelId === currentChannelId).map(m => (
      <Message key={m.id} message={m} />
    ));

  return <div className={cn(className)}>{renderMessages()}</div>;
};
export default MessagesList;
