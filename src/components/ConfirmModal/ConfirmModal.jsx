import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import { hideConfirmModal, confirm } from '../../actions';

@connect(
  ({ app }) => ({
    isShown: app.confirmModal.isShown,
    title: app.confirmModal.title,
    body: app.confirmModal.body,
    footer: app.confirmModal.footer,
    confirmActionType: app.confirmModal.confirmActionType,
    confirmActionPayload: app.confirmModal.confirmPayload,
  }),
  {
    hideConfirmModal,
    confirm,
  }
)
class ConfirmModal extends Component {
  render() {
    const {
      isShown,
      hideConfirmModal: hideHandler,
      confirm: confirmHandler,
    } = this.props;

    return (
      <div>
        <Button color="danger" onClick={hideHandler}>
          Label
        </Button>
        <Modal isOpen={isShown} toggle={hideHandler}>
          <ModalHeader toggle={hideHandler}>Modal title</ModalHeader>
          <ModalBody>Lorem</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={confirmHandler}>
              Do Something
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
