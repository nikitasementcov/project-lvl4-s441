import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createMessage } from '../actions';
import UserContext from '../userContext';

const mapStateToProps = state => ({
  newMessageLoading: state.ui.newMessageLoading,
  currentChannelId: state.app.currentChannelId,
});

const mapDispatchToProps = dispatch => ({
  handleMessageCreation: (channelId, message) =>
    dispatch(createMessage(channelId, message)),
});

@reduxForm({ form: 'message' })
@connect(mapStateToProps, mapDispatchToProps)
class MessageInput extends Component {
  handleSubmit = values => {
    const { handleMessageCreation, currentChannelId, reset } = this.props;
    const userName = this.context;
    const message = { ...values, userName };
    handleMessageCreation(currentChannelId, message).then(() => reset());
  };

  static contextType = UserContext;

  renderForm() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.handleSubmit)}
        className="input-group mb-3"
      >
        <Field
          name="message"
          component="input"
          type="text"
          className="form-control"
          placeholder="Enter your message"
        />
        <div className="input-group-append">
          <button className="btn new-message-button btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    );
  }

  render() {
    const { classNames, newMessageLoading } = this.props;
    const loaderSelfClasses = 'spinner-border spinner-border-sm text-dark mx-2';
    const loader = (
      <div
        className={cn(loaderSelfClasses, {
          invisible: !newMessageLoading,
          visible: newMessageLoading,
        })}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
    const containerSelfClasses = 'd-flex align-items-center';
    return (
      <div className={cn(classNames, containerSelfClasses)}>
        {this.renderForm()}
        {loader}
      </div>
    );
  }
}

export default MessageInput;
