/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';
import { changeChannel as changeChannelAction } from '../../store/actions';
import ChannelCreationForm from '../ChannelCreationForm/ChannelCreationForm';

const mapStateToProps = state => ({
  channels: state.domain.channels,
  currentChannelId: state.app.currentChannelId,
});

const mapDispatchToProps = dispatch => ({
  changeChannel: id => dispatch(changeChannelAction(id)),
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

  render() {
    const { className, channels, currentChannelId } = this.props;
    const classes = cn(className);
    return (
      <div className={classes}>
        <ul className="list-group">
          {_.map(channels.byId, channel => (
            <li
              className={cn({
                'list-group-item': true,
                active: currentChannelId === channel.id,
              })}
              key={channel.id}
              onClick={this.handleChannelChange(channel.id)}
            >
              {channel.name}
            </li>
          ))}
        </ul>
        <ChannelCreationForm />
      </div>
    );
  }
}

export default ChannelsList;
