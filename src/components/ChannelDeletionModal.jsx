import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import {
  hideChannelDeletionModal as hideChannelDeletionModalAction,
  deleteChannel as deleteChannelAction,
} from '../actions';

@connect(
  ({
    app: {
      channelDeletionModal: { isShown, channelId, channelName },
    },
  }) => ({
    isShown,
    channelId,
    channelName,
  }),
  {
    hideChannelDeletionModalAction,
    deleteChannelAction,
  }
)
class ChannelDeletionModal extends Component {
  deleteChannelHandler = id => async () => {
    const { deleteChannelAction: deleteChannel } = this.props;
    await deleteChannel(id);
    this.hideModalHandler();
  };

  hideModalHandler = () => {
    const {
      hideChannelDeletionModalAction: hideChannelDeletionModal,
    } = this.props;
    hideChannelDeletionModal();
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
