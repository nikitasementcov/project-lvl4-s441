import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = state => ({
  channels: state.domain.channels,
  currentChannelId: state.app.currentChannelId,
});

@connect(mapStateToProps)
class ChannelsList extends Component {
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
            >
              {channel.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChannelsList;
