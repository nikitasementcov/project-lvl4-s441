import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import connect from '../store/connect';

const ChannelEditingModal = ({
  isShown,
  handleSubmit,
  hide,
  initialValues: { name },
}) => {
  return (
    <div>
      <Modal isOpen={isShown} toggle={hide}>
        <ModalHeader toggle={hide}>Channel Editing</ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            Do you really want to update
            {` '${name}' `}
            channel?
            <Field name="name" component="input" type="text" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Update
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
  form: 'channelEditing',
  enableReinitialize: true,
})(ChannelEditingModal);

const ChannelEditingModalFormContainer = ({
  hideEditingModal,
  updateChannel,
}) => {
  const { id, isShown, name } = useSelector(({ modals }) => ({
    id: modals.channelEditing.channelId,
    isShown: modals.channelEditing.isShown,
    name: modals.channelEditing.channelName,
  }));
  const hide = () => hideEditingModal();
  const handleSubmit = async newName => {
    await updateChannel({ id, name: newName });
    hide();
  };
  return (
    <ChannelEditingModalForm
      isShown={isShown}
      initialValues={{ name }}
      onSubmit={values => handleSubmit(values.name)}
      hide={hide}
    />
  );
};

export default connect()(ChannelEditingModalFormContainer);
