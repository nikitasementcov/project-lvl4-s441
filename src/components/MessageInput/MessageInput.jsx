import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';

import MessageInputForm from '../MessageInputForm/MessageInputForm';
import { createMessage } from '../../store/actions';
import { getUserName } from '../../cookies';

const mapDispatchToProps = dispatch => ({
  handleMessageCreation: (channelId, message) =>
    dispatch(createMessage(channelId, message)),
});

@connect(
  null,
  mapDispatchToProps
)
class MessageInput extends Component {
  handleSubmit = values => {
    const { handleMessageCreation } = this.props;
    const message = { ...values, userName: getUserName() };
    handleMessageCreation(1, message);
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
