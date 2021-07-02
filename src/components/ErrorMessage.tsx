import React, { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface IErrorMessageProps {
  message: string;
  show: boolean;
  setShow: Function;
}

export const ErrorMessage: FC<IErrorMessageProps> = ({
  message,
  show,
  setShow,
}) => {
  return show ? (
    <div className='bg-red-400 w-full px-3 py-2 text-sm text-white flex items-center justify-between'>
      {message}
      <AiOutlineClose
        onClick={() => setShow(false)}
        className='w-4 h-4 cursor-pointer'
      />
    </div>
  ) : null;
};
