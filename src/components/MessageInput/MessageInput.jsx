import React, { Component } from 'react';
import cn from 'classnames';

import MessageInputForm from '../MessageInputForm/MessageInputForm';

class ContactPage extends Component {
  handleSubmit = values => {
    // print the form values to the console
    console.log(values);
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

export default ContactPage;
