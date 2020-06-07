import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../store';

const AlertModal = () => {
  const { isShown, message } = useSelector(({ modals }) => ({
    isShown: modals.alert.isShown,
    message: modals.alert.message,
  }));
  const dispatch = useDispatch();
  const hide = () => dispatch(actions.modals.hideAlertModal());

  return (
    <div>
      <Modal isOpen={isShown} toggle={hide}>
        <ModalHeader toggle={hide}>Alert</ModalHeader>
        <ModalBody>
          <Alert color="danger">{message}</Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={hide}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AlertModal;
