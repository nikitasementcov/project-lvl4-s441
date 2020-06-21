/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Button, Row } from 'reactstrap';
import TrashIcon from './icons/TrashIcon';
import IconButton from './icons/IconButton';
import connect from '../store/connect';

const Channels = ({ changeChannel, showDeletionModal, showCreationModal }) => {
  const { channels, currentChannelId } = useSelector(state => ({
    channels: state.channels,
    currentChannelId: state.app.currentChannelId,
  }));

  const handleChannelChange = id => () => {
    changeChannel(id);
  };
  const handleChannelDeletion = (id, name) => e => {
    e.stopPropagation();
    showDeletionModal({ id, channelName: name });
  };
  const handleChannelCreation = () => {
    showCreationModal();
  };

  const renderChannelIcons = ({ id, name, isActive, removable }) =>
    removable ? (
      <section className="col-3 text-right">
        <IconButton
          icon={TrashIcon}
          fill={isActive ? '#fff' : null}
          onClick={handleChannelDeletion(id, name)}
        />
      </section>
    ) : null;

  const renderChannel = ({ id, name, removable }) => {
    const isActive = currentChannelId === id;
    return (
      <li
        className={cn({
          'list-group-item': true,
          active: isActive,
        })}
        key={id}
        onClick={handleChannelChange(id)}
      >
        <Row noGutters>
          <span className="col-9 text-nowrap text-truncate text-capitalize">
            {name}
          </span>
          {renderChannelIcons({ id, name, isActive, removable })}
        </Row>
      </li>
    );
  };

  return (
    <section className="channels overflow-hidden d-flex flex-column">
      <div className="d-flex justify-content-between mb-3">
        <h4 className="mb-0">Channels</h4>
        <Button close onClick={handleChannelCreation}>
          <span>+</span>
        </Button>
      </div>
      <div className="h-100 overflow-auto">
        <ul className="list-group">{_.map(channels.byId, renderChannel)}</ul>
      </div>
    </section>
  );
};

export default connect()(Channels);
