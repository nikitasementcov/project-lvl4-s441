import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, Form, Label } from 'reactstrap';

import { addChannel } from '../store/channels';

const mapDispatchToProps = dispatch => ({
  handleChannelCreation: name => dispatch(addChannel(name)),
});

@reduxForm({ form: 'channelCreation' })
@connect(null, mapDispatchToProps)
class ChannelCreationForm extends React.Component {
  handleSubmit = async ({ name }) => {
    const { handleChannelCreation, reset } = this.props;
    await handleChannelCreation(name);
    reset();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form
        inline
        onSubmit={handleSubmit(this.handleSubmit)}
        className="position-sticky"
      >
        <Label for="name">Create new channel:</Label>
        <Field
          name="name"
          component="input"
          type="text"
          className="form-control w-100 my-2"
          placeholder="Name"
        />
        <Button
          outline
          color="primary"
          type="submit"
          className="new-channel-button col-md-12 "
        >
          Create
        </Button>
      </Form>
    );
  }
}

export default ChannelCreationForm;
