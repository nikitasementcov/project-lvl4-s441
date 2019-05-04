import React, { Component } from 'react';
import cn from 'classnames';

export default class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className } = this.props;
    const classes = cn(className);
    return <div className={classes} />;
  }
}
