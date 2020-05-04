import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import channelEditingSlice from '../store/modals/channelEditing';
import { updateChannel } from '../store/channels';

@connect(
  ({ modals }) => ({
    isShown: modals.channelEditing.isShown,
    id: modals.channelEditing.channelId,
    name: modals.channelEditing.channelName,
    initialValues: { name: modals.channelEditing.channelName },
  }),
  dispatch => ({
    renameChannelAction: (id, name) => dispatch(updateChannel(id, { name })),
    hide: () => dispatch(channelEditingSlice.actions.hide()),
  }),
)
@reduxForm({ form: 'channelEditing', enableReinitialize: true })
class ChannelEditingModal extends Component {
  handleSubmit = async ({ name }) => {
    const { renameChannelAction, reset, id } = this.props;
    await renameChannelAction({ id, name });
    reset();
    this.hideModalHandler();
  };

  hideModalHandler = () => {
    const { hide } = this.props;
    hide();
  };

  render() {
    const { isShown, name, handleSubmit } = this.props;
    return (
      <div>
        <Modal isOpen={isShown} toggle={this.hideModalHandler}>
          <ModalHeader toggle={this.hideModalHandler}>
            Channel Editing
          </ModalHeader>
          <form onSubmit={handleSubmit(this.handleSubmit)}>
            <ModalBody>
              Do you really want to update
              {` '${name}' `}
              channel?
              <Field name="name" component="input" type="text" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit">
                Update
              </Button>
              <Button color="secondary" onClick={this.hideModalHandler}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ChannelEditingModal;
