import React from 'react';
import cn from 'classnames';

const IconButton = ({ icon: Icon, fill, onClick, className }) => {
  return (
    <button
      className={cn('btn btn-default p-0', className)}
      type="button"
      onClick={onClick}
    >
      <Icon fill={fill} />
    </button>
  );
};

export default IconButton;
