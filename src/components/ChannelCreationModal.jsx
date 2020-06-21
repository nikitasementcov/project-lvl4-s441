import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import connect from '../store/connect';

const ChannelCreationModal = ({ isShown, handleSubmit, hide }) => {
  return (
    <div>
      <Modal isOpen={isShown} toggle={hide}>
        <ModalHeader toggle={hide}>Create Channel</ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            Enter the name of the new channel
            <Field name="name" component="input" type="text" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Create
            </Button>
            <Button color="secondary" onClick={hide}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

const ChannelEditingModalForm = reduxForm({
  form: 'channelCreation',
  enableReinitialize: true,
})(ChannelCreationModal);

const ChannelCreationModalFormContainer = ({
  hideCreationModal,
  addChannel,
}) => {
  const { isShown } = useSelector(({ modals }) => ({
    isShown: modals.channelCreation.isShown,
  }));
  const handleSubmit = async ({ name }) => {
    await addChannel(name);
    hideCreationModal();
  };

  return (
    <ChannelEditingModalForm
      isShown={isShown}
      onSubmit={values => handleSubmit(values)}
      hide={() => hideCreationModal()}
    />
  );
};

export default connect()(ChannelCreationModalFormContainer);
