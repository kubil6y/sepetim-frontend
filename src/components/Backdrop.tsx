import React, { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { backdropAnim } from '../animations';

interface IBackdropProps {
  isOpen: boolean;
}

export const Backdrop: FC<IBackdropProps> = ({ isOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-black'
            variants={backdropAnim}
            initial='hidden'
            animate='show'
            exit='hidden'
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
