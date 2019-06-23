import React from 'react';

const Message = ({ message }) => (
  <div>
    {message.userName}
    {': '}
    {message.message}
  </div>
);
export default Message;
