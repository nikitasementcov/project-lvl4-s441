import React from 'react';

const Message = ({ message }) => {
  return (
    <div>
      {message.userName}
      {': '}
      {message.message}
    </div>
  );
};
export default Message;
