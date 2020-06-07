import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { Button, Form, Label } from 'reactstrap';

import { asyncActions } from '../store/channels';

const ChannelCreationForm = ({ reset, handleSubmit }) => {
  const dispatch = useDispatch();
  const submit = async ({ name }) => {
    await dispatch(asyncActions.addChannel(name));
    reset();
  };

  return (
    <Form inline onSubmit={handleSubmit(submit)} className="position-sticky">
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
};

export default reduxForm({ form: 'channelCreation' })(ChannelCreationForm);
