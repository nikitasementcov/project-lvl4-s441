import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import {
  renameChannel as renameChannelAction,
  hideChannelEditingModal as hideChannelEditingModalAction,
} from '../actions';

@connect(
  ({ modals }) => ({
    isShown: modals.channelEditing.isShown,
    id: modals.channelEditing.channelId,
    name: modals.channelEditing.channelName,
    initialValues: { name: modals.channelEditing.channelName },
  }),
  {
    renameChannelAction,
    hideChannelEditingModalAction,
  },
)
@reduxForm({ form: 'channelEditing', enableReinitialize: true })
class ChannelEditingModal extends Component {
  handleSubmit = async ({ name }) => {
    const { renameChannelAction: renameChannel, reset, id } = this.props;
    await renameChannel(id, { name }).then(() => reset());
    this.hideModalHandler();
  };

  hideModalHandler = () => {
    const {
      hideChannelEditingModalAction: hideChannelEditingModal,
    } = this.props;
    hideChannelEditingModal();
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
