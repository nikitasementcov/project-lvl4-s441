import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import { hideConfirmModal, deleteChannel } from '../../actions';

@connect(
  ({ app }) => ({
    isShown: app.confirmModal.isShown,
    channelId: app.confirmModal.channelId,
  }),
  {
    hideConfirmModal,
    deleteChannel,
  }
)
class ConfirmModal extends Component {
  deleteChannelHandler = id => async e => {
    const {
      deleteChannel: deleteChannelAction,
      hideConfirmModal: hideConfirmModalAction,
    } = this.props;
    e.preventDefault();
    await deleteChannelAction(id);
    hideConfirmModalAction();
  };

  render() {
    const { channelId, isShown, hideConfirmModal: hideHandler } = this.props;

    return (
      <div>
        <Modal isOpen={isShown} toggle={hideHandler}>
          <ModalHeader toggle={hideHandler}>Modal title</ModalHeader>
          <ModalBody>Lorem</ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.deleteChannelHandler(channelId)}
            >
              Delete
            </Button>
            <Button color="secondary" onClick={hideHandler}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConfirmModal;
