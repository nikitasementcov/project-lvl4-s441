import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import cn from 'classnames';

import styles from './messageInputForm.css';

@reduxForm({ form: 'message' })
class MessageInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit, classNames } = this.props;
    const selfClassNames = 'input-group';

    return (
      <form onSubmit={handleSubmit} className={cn(classNames, selfClassNames)}>
        <Field
          name="message"
          component="input"
          type="text"
          className="form-control"
          placeholder="Enter your message"
        />
        <div className="input-group-append">
          <button
            className={cn(styles.button, {
              btn: true,
              'btn-outline-secondary': true,
            })}
            type="submit"
          >
            {'Send'}
          </button>
        </div>
      </form>
    );
  }
}

export default MessageInputForm;
