import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import channelDeletionSlice from '../store/modals/channelDeletion';
import { deleteChannel } from '../store/channels';

@connect(
  ({
    modals: {
      channelDeletion: { isShown, channelId, channelName },
    },
  }) => ({
    isShown,
    channelId,
    channelName,
  }),
  dispatch => ({
    hide: () => dispatch(channelDeletionSlice.actions.hide()),
    deleteChannelAction: id => dispatch(deleteChannel(id)),
  }),
)
class ChannelDeletionModal extends Component {
  deleteChannelHandler = id => async () => {
    const { deleteChannelAction } = this.props;
    await deleteChannelAction(id);
    this.hideModalHandler();
  };

  hideModalHandler = () => {
    const { hide } = this.props;
    hide();
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
