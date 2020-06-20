import React, { useContext } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import UserContext from '../userContext';
import connect from '../store/connect';

const MessageInput = ({ classNames, reset, handleSubmit, createMessage }) => {
  const userName = useContext(UserContext);

  const { channelId, isMessageLoading } = useSelector(state => ({
    isMessageLoading: state.ui.isMessageLoading,
    channelId: state.app.currentChannelId,
  }));

  const submit = async values => {
    const message = { ...values, userName };
    await createMessage({ channelId, message });
    reset();
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit(submit)} className="input-group">
        <Field
          name="message"
          component="input"
          type="text"
          className="form-control"
          placeholder="Enter your message"
        />
      </form>
    );
  };

  const loaderSelfClasses = 'spinner-border spinner-border-sm text-dark mx-2';
  const loader = (
    <div
      className={cn(loaderSelfClasses, {
        invisible: !isMessageLoading,
        visible: isMessageLoading,
      })}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
  const containerSelfClasses = 'my-3 d-flex align-items-center';
  return (
    <div className={cn(classNames, containerSelfClasses)}>
      {renderForm()}
      {loader}
    </div>
  );
};

export default reduxForm({ form: 'message' })(connect()(MessageInput));
