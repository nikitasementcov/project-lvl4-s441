import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import {
  updateChannel as updateChannelAction,
  hideChannelEditingModal as hideChannelEditingModalAction,
} from '../actions';

@connect(
  ({ app }) => ({
    isShown: app.channelEditingModal.isShown,
    id: app.channelEditingModal.channelId,
    name: app.channelEditingModal.channelName,
    initialValues: { name: app.channelEditingModal.channelName },
  }),
  {
    updateChannelAction,
    hideChannelEditingModalAction,
  },
)
@reduxForm({ form: 'channelEditing', enableReinitialize: true })
class ChannelEditingModal extends Component {
  handleSubmit = async ({ name }) => {
    const { updateChannelAction: updateChannel, reset, id } = this.props;
    await updateChannel(id, { name }).then(() => reset());
    this.hideModalHandler();
  };

  hideModalHandler = () => {
    const {
      hideChannelEditingModalAction: hideChannelEditingModal,
    } = this.props;
    hideChannelEditingModal();
  };

  render() {
    const { isShown, name, handleSubmit } = this.props;
    return (
      <div>
        <Modal isOpen={isShown} toggle={this.hideModalHandler}>
          <ModalHeader toggle={this.hideModalHandler}>
            Channel Editing
          </ModalHeader>
          <form onSubmit={handleSubmit(this.handleSubmit)}>
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
              <Button color="secondary" onClick={this.hideModalHandler}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ChannelEditingModal;
