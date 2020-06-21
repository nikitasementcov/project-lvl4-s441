/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Button, Row } from 'reactstrap';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';
import IconButton from './icons/IconButton';
import connect from '../store/connect';

const Channels = ({
  className,
  changeChannel,
  showDeletionModal,
  showEditingModal,
  showCreationModal,
}) => {
  const { channels, currentChannelId } = useSelector(state => ({
    channels: state.channels,
    currentChannelId: state.app.currentChannelId,
  }));

  const handleChannelChange = id => e => {
    e.preventDefault();
    changeChannel(id);
  };
  const handleChannelDeletion = (id, name) => e => {
    e.stopPropagation();
    showDeletionModal({ id, channelName: name });
  };
  const handleChannelUpdating = (id, name) => e => {
    e.stopPropagation();
    showEditingModal({ id, channelName: name });
  };
  const handleHeaderClick = () => {
    showCreationModal();
  };

  const renderChannelIcons = ({ id, name, isActive, removable }) =>
    removable ? (
      <section>
        <IconButton
          icon={EditIcon}
          fill={isActive ? '#fff' : null}
          onClick={handleChannelUpdating(id, name)}
          className="mr-1"
        />
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
        <Row noGutters className="justify-content-between">
          <span className="text-capitalize">{name}</span>
          {renderChannelIcons({ id, name, isActive, removable })}
        </Row>
      </li>
    );
  };

  return (
    <section className={className}>
      <div className="d-flex justify-content-between mb-3">
        <h4 className="mb-0">Channels</h4>
        <Button close onClick={handleHeaderClick}>
          <span>+</span>
        </Button>
      </div>
      <div>
        <ul className="list-group mb-4">
          {_.map(channels.byId, renderChannel)}
        </ul>
      </div>
    </section>
  );
};

export default connect()(Channels);
