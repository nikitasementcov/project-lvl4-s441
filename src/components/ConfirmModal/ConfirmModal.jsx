import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { showConfirmModal, hideConfirmModal } from '../../actions';

@connect(
  ({ app }) => ({
    isConfirmModalShown: app.isConfirmModalShown,
  }),
  {
    showConfirmModal,
    hideConfirmModal,
  }
)
class ConfirmModal extends React.Component {
  render = () => {
    const {
      isConfirmModalShown,
      hideConfirmModal: hideHandler,
      showConfirmModal: showHandler,
    } = this.props;
    return (
      <Modal show={isConfirmModalShown} onHide={hideHandler} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={showHandler}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
}

export default ConfirmModal;
