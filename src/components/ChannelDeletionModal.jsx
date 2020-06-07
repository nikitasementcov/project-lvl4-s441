import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector } from 'react-redux';
import connect from '../store/connect';

const ChannelDeletionModal = ({ hideDeletionModal, deleteChannel }) => {
  const { isShown, channelId, channelName } = useSelector(
    ({ modals: { channelDeletion } }) => ({
      isShown: channelDeletion.isShown,
      channelId: channelDeletion.channelId,
      channelName: channelDeletion.channelName,
    }),
  );
  const hide = () => hideDeletionModal();
  const deleteChannelHandler = id => async () => {
    await deleteChannel(id);
    hide();
  };

  return (
    <div>
      <Modal isOpen={isShown} toggle={hide}>
        <ModalHeader toggle={hide}>Channel Deletion</ModalHeader>
        <ModalBody>
          Do you really want to delete
          {` '${channelName}' `}
          channel?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteChannelHandler(channelId)}>
            Delete
          </Button>
          <Button color="secondary" onClick={hide}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect()(ChannelDeletionModal);
