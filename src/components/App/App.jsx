import React from 'react';

const App = ({ channels }) => (
  <ul>
    {channels.map(channel => (
      <li key={channel.id}>{channel.name}</li>
    ))}
  </ul>
);

export default App;
