import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addChannel } from '../actions/channels/channelActions';

const mapDispatchToProps = dispatch => ({
  handleChannelCreation: name => dispatch(addChannel(name)),
});

@reduxForm({ form: 'channelCreation' })
@connect(
  null,
  mapDispatchToProps
)
class ChannelCreationForm extends React.Component {
  handleSubmit = ({ name }) => {
    const { handleChannelCreation, reset } = this.props;
    handleChannelCreation(name).then(() => reset());
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Field name="name" component="input" type="text" />
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default ChannelCreationForm;
