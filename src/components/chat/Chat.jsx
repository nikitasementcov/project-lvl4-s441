import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const Chat = ({ channels }) => {
  return (
    <ul>
      {_.map(channels.byId, ch => (
        <li key={ch.id}>{ch.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    channels: state.domain.channels,
  };
};

export default connect(mapStateToProps)(Chat);
