import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Message from './Message';
import MessageInput from './MessageInput';
import IconButton from './icons/IconButton';
import EditIcon from './icons/EditIcon';
import connect from '../store/connect';

const Messages = ({ currentChannelId, showEditingModal }) => {
  const { messages, channelsById } = useSelector(state => ({
    messages: state.messages.byId,
    channelsById: state.channels.byId,
  }));
  console.log(currentChannelId);
  console.log(channelsById);
  const channel = channelsById[currentChannelId];
  const handleChannelUpdating = (id, name) => e => {
    e.stopPropagation();
    showEditingModal({ id, channelName: name });
  };
  const renderMessages = () =>
    _.filter(messages, m => m.channelId === channel.id).map(m => (
      <Message key={m.id} message={m} />
    ));

  return (
    <section className="messages overflow-hidden">
      <div className="h-100 d-flex flex-column">
        <div className="d-flex mb-3">
          <h4 className="mb-0 text-capitalize">{channel.name}</h4>
          {channel.removable ? (
            <IconButton
              icon={EditIcon}
              fill="#000"
              onClick={handleChannelUpdating(channel.id, channel.name)}
              className="mx-2"
            />
          ) : null}
        </div>
        <div className="flex-grow-1 border rounded mb-3 p-3 overflow-auto">
          {renderMessages()}
        </div>
        <MessageInput />
      </div>
    </section>
  );
};
export default connect()(Messages);
