import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';

interface IOrderButtonProps {
  inner: string;
  onClick: any;
}

export const OrderButton: FC<IOrderButtonProps> = ({ inner, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className='bg-gray-900 cursor-pointer px-2 py-1 capitalize hover:bg-gray-800 text-center text-white rounded-full shadow flex items-center justify-center text-xs tracking-wide font-bold space-x-1 cst-transition sm:mt-0 mt-2'
    >
      <div className='flex items-center justify-center w-4 h-4 text-black bg-white rounded-full'>
        <AiOutlinePlus className='w-3 h-3' />
      </div>
      <p>{inner}</p>
    </motion.button>
  );
};
