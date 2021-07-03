import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface IDropdownItemProps {
  inner: string;
}

export const DropdownItem: FC<IDropdownItemProps> = ({ inner }) => {
  return (
    <motion.div className='p-2 cursor-pointer hover:bg-gray-100 text-center capitalize text-sm transition-colors duration-200'>
      <div>{inner}</div>
    </motion.div>
  );
};
