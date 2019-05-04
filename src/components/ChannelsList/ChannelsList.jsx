import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = state => ({
  channels: state.domain.channels,
});

@connect(mapStateToProps)
class ChannelsList extends Component {
  render() {
    const { className, channels } = this.props;
    const classes = cn(className);
    return (
      <div className={classes}>
        <ul className="list-group">
          {_.map(channels.byId, channel => (
            <li className="list-group-item" key={channel.id}>
              {channel.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChannelsList;
