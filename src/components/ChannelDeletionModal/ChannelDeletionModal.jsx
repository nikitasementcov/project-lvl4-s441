import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import { hideChannelDeletionModal, deleteChannel } from '../../actions';

@connect(
  ({ app }) => ({
    isShown: app.channelDeletionModal.isShown,
    channelId: app.channelDeletionModal.channelId,
    channelName: app.channelDeletionModal.channelName,
  }),
  {
    hideChannelDeletionModal,
    deleteChannel,
  }
)
class ChannelDeletionModal extends Component {
  deleteChannelHandler = id => async e => {
    const { deleteChannel: deleteChannelAction } = this.props;
    e.preventDefault();
    await deleteChannelAction(id);
    this.hideModalHandler();
  };

  hideModalHandler = () => {
    const {
      hideChannelDeletionModal: hideChannelDeletionModalAction,
    } = this.props;
    hideChannelDeletionModalAction();
  };

  render() {
    const { isShown, channelId, channelName } = this.props;

    return (
      <div>
        <Modal isOpen={isShown} toggle={this.hideModalHandler}>
          <ModalHeader toggle={this.hideModalHandler}>
            Channel Deletion
          </ModalHeader>
          <ModalBody>
            Do you really want to delete
            {` '${channelName}' `}
            channel?
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.deleteChannelHandler(channelId)}
            >
              Delete
            </Button>
            <Button color="secondary" onClick={this.hideModalHandler}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ChannelDeletionModal;
