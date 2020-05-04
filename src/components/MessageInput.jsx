import React, { useContext } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createMessage } from '../store/messages';
import UserContext from '../userContext';

const MessageInput = ({ classNames, reset, handleSubmit }) => {
  const dispatch = useDispatch();
  const userName = useContext(UserContext);

  const { channelId, newMessageLoading } = useSelector(state => ({
    newMessageLoading: state.ui.newMessageLoading,
    channelId: state.app.currentChannelId,
  }));

  const submit = async values => {
    const message = { ...values, userName };
    await dispatch(createMessage({ channelId, message }));
    reset();
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(submit)} className="input-group mb-3">
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
  };

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
      {renderForm()}
      {loader}
    </div>
  );
};

export default reduxForm({ form: 'message' })(MessageInput);
