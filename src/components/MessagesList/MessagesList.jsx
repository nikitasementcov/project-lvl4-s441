import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';

import Message from '../Message/Message';

const mapStateToProps = state => ({
  messages: state.domain.messages.byId, // TODO: selector
  currentChannelId: state.app.channels.currentChannelId,
});

@connect(mapStateToProps)
class MessagesList extends Component {
  render() {
    const { className, messages, currentChannelId } = this.props;
    const classes = cn(className);
    const currentChannelMessages = _.filter(
      messages,
      m => m.channelId === currentChannelId
    ).map(m => <Message key={m.id} message={m} />);
    return <div className={classes}>{currentChannelMessages}</div>;
  }
}
export default MessagesList;
