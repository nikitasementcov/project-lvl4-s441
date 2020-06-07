/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Col, Row } from 'reactstrap';
import ChannelCreationForm from './ChannelCreationForm';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';
import IconButton from './icons/IconButton';
import { actions as appActions } from '../store/app';
import { actions as channelDeletionActions } from '../store/modals/channelDeletion';
import { actions as channelEditingActions } from '../store/modals/channelEditing';

const ChannelsList = ({ className }) => {
  const { channels, currentChannelId } = useSelector(state => ({
    channels: state.channels,
    currentChannelId: state.app.currentChannelId,
  }));

  const dispatch = useDispatch();
  const handleChannelChange = id => e => {
    e.preventDefault();
    dispatch(appActions.changeChannel(id));
  };
  const handleChannelDeletion = (id, name) => e => {
    e.stopPropagation();
    dispatch(
      channelDeletionActions.showDeletionModal({ id, channelName: name }),
    );
  };
  const handleChannelUpdating = (id, name) => e => {
    e.stopPropagation();
    dispatch(channelEditingActions.showEditingModal({ id, channelName: name }));
  };

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
        onClick={handleChannelChange(id)}
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
                onClick={handleChannelUpdating(id, name)}
                className="mr-1"
              />
              <IconButton
                icon={TrashIcon}
                fill={isActiveChannel ? '#fff' : null}
                onClick={handleChannelDeletion(id, name)}
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
};

export default ChannelsList;
