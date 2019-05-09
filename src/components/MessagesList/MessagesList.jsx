import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';

import Message from '../Message/Message';

const mapStateToProps = state => ({
  messages: state.domain.messages.byId, // TODO: selector
});

@connect(mapStateToProps)
class MessagesList extends Component {
  render() {
    const { className, messages } = this.props;
    const classes = cn(className);
    return (
      <div className={classes}>
        {_.map(messages, m => (
          <Message key={m.id} message={m} />
        ))}
      </div>
    );
  }
}
export default MessagesList;
