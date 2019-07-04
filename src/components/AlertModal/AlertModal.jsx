import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from 'reactstrap';
import { connect } from 'react-redux';

import { hideAlertModal as hideAlertModalAction } from '../../actions';

@connect(
  ({ app }) => ({
    isShown: app.alertModal.isShown,
    message: app.alertModal.message,
  }),
  {
    hideAlertModalAction,
  },
)
class AlertModal extends Component {
  hideModalHandler = () => {
    const { hideAlertModalAction: hideAlertModal } = this.props;
    hideAlertModal();
  };

  render() {
    const { isShown, message } = this.props;

    return (
      <div>
        <Modal isOpen={isShown} toggle={this.hideModalHandler}>
          <ModalHeader toggle={this.hideModalHandler}>Alert</ModalHeader>
          <ModalBody>
            <Alert color="danger">{message}</Alert>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.hideModalHandler}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AlertModal;
