import React from 'react';

const Message = ({ message }) => (
  <div className="mb-1">
    <span className="font-weight-bold">
      {message.userName}
      {': '}
    </span>
    {message.message}
  </div>
);
export default Message;
