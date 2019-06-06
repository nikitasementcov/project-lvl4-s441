import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import {
  updateChannel as updateChannelAction,
  hideChannelEditingModal as hideChannelEditingModalAction,
} from '../../actions';

@connect(
  ({ app }) => ({
    isShown: app.channelEditingModal.isShown,
    channelId: app.channelEditingModal.channelId,
    channelName: app.channelEditingModal.channelName,
  }),
  {
    updateChannelAction,
    hideChannelEditingModalAction,
  }
)
class ChannelEditingModal extends Component {
  updateChannelHandler = id => async e => {
    const { updateChannelAction: updateChannel } = this.props;
    e.preventDefault();
    await updateChannel(id);
    this.hideModalHandler();
  };

  hideModalHandler = () => {
    const {
      hideChannelEditingModalAction: hideChannelEditingModal,
    } = this.props;
    hideChannelEditingModal();
  };

  render() {
    const { isShown, channelId, channelName } = this.props;

    return (
      <div>
        <Modal isOpen={isShown} toggle={this.hideModalHandler}>
          <ModalHeader toggle={this.hideModalHandler}>
            Channel Editing
          </ModalHeader>
          <ModalBody>
            Do you really want to update
            {` '${channelName}' `}
            channel?
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={this.updateChannelHandler(channelId)}
            >
              Update
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

export default ChannelEditingModal;
