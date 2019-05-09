import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';

import MessageInputForm from '../MessageInputForm/MessageInputForm';
import { createMessage as createMessageAction } from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  createMessage: (channelId, message) =>
    dispatch(createMessageAction(channelId, message)),
});

@connect(
  null,
  mapDispatchToProps
)
class MessageInput extends Component {
  handleSubmit = values => {
    const { createMessage } = this.props;
    createMessage(1, values.message);
  };

  render() {
    const { classNames } = this.props;
    return (
      <MessageInputForm
        onSubmit={this.handleSubmit}
        classNames={cn(classNames, { 'input-group': true, 'mb-3': true })}
      />
    );
  }
}

export default MessageInput;
