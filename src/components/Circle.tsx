import React, { FC } from 'react';

interface ICircleProps {
  children: React.ReactNode;
  onClick?: any;
}

export const Circle: FC<ICircleProps> = ({ children, onClick }) => {
  return (
    <div
      className='flex items-center justify-center p-3 rounded-full cursor-pointer hover:bg-gray-100 cst-transition'
      {...(onClick && { onClick })}
    >
      {children}
    </div>
  );
};
