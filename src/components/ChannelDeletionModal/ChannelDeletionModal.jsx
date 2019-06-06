import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import { hideChannelDeletionModal, deleteChannel } from '../../actions';

@connect(
  ({ app }) => ({
    isShown: app.channelDeletionModal.isShown,
    channelId: app.channelDeletionModal.channelId,
  }),
  {
    hideChannelDeletionModal,
    deleteChannel,
  }
)
class ChannelDeletionModal extends Component {
  deleteChannelHandler = id => async e => {
    const {
      deleteChannel: deleteChannelAction,
      hideChannelDeletionModal: hideChannelDeletionModalAction,
    } = this.props;
    e.preventDefault();
    await deleteChannelAction(id);
    hideChannelDeletionModalAction();
  };

  render() {
    const {
      channelId,
      isShown,
      hideChannelDeletionModalAction: hideHandler,
    } = this.props;

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

export default ChannelDeletionModal;
