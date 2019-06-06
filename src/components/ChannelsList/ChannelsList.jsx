/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  changeChannel as changeChannelAction,
  showChannelDeletionModal as showChannelDeletionModalAction,
  showChannelEditingModal as showChannelEditingModalAction,
} from '../../actions';

import ChannelCreationForm from '../ChannelCreationForm/ChannelCreationForm';
import TrashIcon from '../icons/TrashIcon';
import EditIcon from '../icons/EditIcon';

const mapStateToProps = state => ({
  channels: state.domain.channels,
  currentChannelId: state.app.channels.currentChannelId,
});

const mapDispatchToProps = dispatch => ({
  changeChannel: id => dispatch(changeChannelAction(id)),
  showChannelDeletionModal: (id, channelName) =>
    dispatch(showChannelDeletionModalAction({ id, channelName })),
  showChannelEditingModal: (id, channelName) =>
    dispatch(showChannelEditingModalAction({ id, channelName })),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class ChannelsList extends Component {
  handleChannelChange = id => e => {
    const { changeChannel } = this.props;
    e.preventDefault();
    changeChannel(id);
  };

  handleChannelDeletion = (id, name) => e => {
    const { showChannelDeletionModal } = this.props;
    e.stopPropagation();
    showChannelDeletionModal(id, name);
  };

  handleChannelUpdating = (id, name) => e => {
    const { showChannelEditingModal } = this.props;
    e.stopPropagation();
    showChannelEditingModal(id, name);
  };

  render() {
    const { className, channels, currentChannelId } = this.props;
    const classes = cn(className);

    const renderChannel = channel => {
      const isActiveChannel = currentChannelId === channel.id;
      return (
        <li
          className={cn({
            'list-group-item': true,
            active: isActiveChannel,
          })}
          key={channel.id}
          onClick={this.handleChannelChange(channel.id)}
        >
          <span>{channel.name}</span>
          {channel.removable ? (
            <>
              <button
                type="button"
                onClick={this.handleChannelUpdating(channel.id, channel.name)}
              >
                <EditIcon fill={isActiveChannel ? '#fff' : null} />
              </button>
              <button
                type="button"
                onClick={this.handleChannelDeletion(channel.id, channel.name)}
              >
                <TrashIcon fill={isActiveChannel ? '#fff' : null} />
              </button>
            </>
          ) : null}
        </li>
      );
    };

    return (
      <div className={classes}>
        <ul className="list-group">{_.map(channels.byId, renderChannel)}</ul>
        <ChannelCreationForm />
      </div>
    );
  }
}

export default ChannelsList;
