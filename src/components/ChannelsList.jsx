/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row, Col } from 'reactstrap';

import {
  showChannelDeletionModal as showChannelDeletionModalAction,
  showChannelEditingModal as showChannelEditingModalAction,
} from '../actions';
import ChannelCreationForm from './ChannelCreationForm';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';
import IconButton from './icons/IconButton';
import { deleteChannel } from '../store/channels';
import appSlice from '../store/app';
import channelDeletionSlice from '../store/modals/channelDeletion';

const mapStateToProps = state => ({
  channels: state.channels,
  currentChannelId: state.app.currentChannelId,
});

const mapDispatchToProps = dispatch => ({
  changeChannel: id => dispatch(appSlice.actions.changeChannel(id)),
  showChannelDeletionModal: (id, channelName) =>
    dispatch(channelDeletionSlice.actions.show({ id, channelName })),
  showChannelEditingModal: (id, channelName) =>
    dispatch(showChannelEditingModalAction({ id, channelName })),
  // TODO: use modal window
  deleteChannelWithoutModal: id => dispatch(deleteChannel(id)),
});

@connect(mapStateToProps, mapDispatchToProps)
class ChannelsList extends Component {
  handleChannelChange = id => e => {
    const { changeChannel } = this.props;
    e.preventDefault();
    changeChannel(id);
  };

  handleChannelDeletion = (id, name) => e => {
    const { deleteChannelWithoutModal, showChannelDeletionModal } = this.props;
    e.stopPropagation();
    showChannelDeletionModal(id, name);
    // deleteChannelWithoutModal(id);
  };

  handleChannelUpdating = (id, name) => e => {
    const { showChannelEditingModal } = this.props;
    e.stopPropagation();
    showChannelEditingModal(id, name);
  };

  render() {
    const { className, channels, currentChannelId } = this.props;
    const classes = cn(className);

    const renderChannel = ({ id, name, removable }) => {
      const isActiveChannel = currentChannelId === id;
      return (
        <li
          className={cn({
            'list-group-item': true,
            active: isActiveChannel,
          })}
          key={id}
          onClick={this.handleChannelChange(id)}
        >
          <Row noGutters className="justify-content-between">
            <Col className="col-8">
              <span className="text-capitalize">{name}</span>
            </Col>
            {removable ? (
              <Col className="col-4 flex-grow-0">
                <IconButton
                  icon={EditIcon}
                  fill={isActiveChannel ? '#fff' : null}
                  onClick={this.handleChannelUpdating(id, name)}
                  className="mr-1"
                />
                <IconButton
                  icon={TrashIcon}
                  fill={isActiveChannel ? '#fff' : null}
                  onClick={this.handleChannelDeletion(id, name)}
                />
              </Col>
            ) : null}
          </Row>
        </li>
      );
    };

    return (
      <>
        <div className={classes}>
          <ul className="list-group mb-4">
            {_.map(channels.byId, renderChannel)}
          </ul>
        </div>
        <div className="new-channel">
          <ChannelCreationForm />
        </div>
      </>
    );
  }
}

export default ChannelsList;
