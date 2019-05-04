import React, { Component } from 'react';
import cn from 'classnames';

import styles from './messageInputForm.css';

export default class MessageInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className } = this.props;

    return (
      <div className={cn(className, { 'input-group': true, 'mb-3': true })}>
        <input
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
            type="button"
          >
            {'Send'}
          </button>
        </div>
      </div>
    );
  }
}
