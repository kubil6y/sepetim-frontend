import React, { FC } from 'react';

interface ICircleProps {
  children: React.ReactNode;
}

export const Circle: FC<ICircleProps> = ({ children }) => {
  return (
    <div className='flex items-center justify-center p-3 rounded-full cursor-pointer hover:bg-gray-200 cst-transition'>
      {children}
    </div>
  );
};
