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
import alertModalSlice from '../store/modals/alert';

@connect(
  ({ modals }) => ({
    isShown: modals.alert.isShown,
    message: modals.alert.message,
  }),
  dispatch => ({
    hide: () => dispatch(alertModalSlice.actions.hide()),
  }),
)
class AlertModal extends Component {
  hideModalHandler = () => {
    const { hide } = this.props;
    hide();
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
