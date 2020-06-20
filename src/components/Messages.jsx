import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Message from './Message';
import MessageInput from './MessageInput';

const Messages = ({ className }) => {
  const { messages, currentChannelId } = useSelector(state => ({
    messages: state.messages.byId,
    currentChannelId: state.app.currentChannelId,
  }));

  const renderMessages = () =>
    _.filter(messages, m => m.channelId === currentChannelId).map(m => (
      <Message key={m.id} message={m} />
    ));

  return (
    <section className={cn(className)}>
      <div className="h-100 d-flex flex-column justify-content-between">
        <div className="h-100 border rounded p-3 overflow-auto">
          {renderMessages()}
        </div>
        <MessageInput />
      </div>
    </section>
  );
};
export default Messages;
