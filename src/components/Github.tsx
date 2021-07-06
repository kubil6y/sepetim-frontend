import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { dropdownAnim } from '../animations';
import { Circle, DropdownItem } from '../components';
import { useClickOutside } from '../hooks';

export const Github = () => {
  // dropdown misc
  const dropdownRef = useRef(null);
  const boxRef = useRef(null);

  const [dropdownShow, setDropdownShow] = useState(false);
  const handleClickOutside = () => setDropdownShow(false);
  useClickOutside(dropdownRef, boxRef, handleClickOutside);

  return (
    <div
      className='ml-auto md:ml-6 mr-2 z-10 relative'
      ref={dropdownRef}
      onClick={() => setDropdownShow((st) => !st)}
    >
      <Circle>
        <AiOutlineGithub />
      </Circle>

      <AnimatePresence>
        {dropdownShow && (
          <motion.div
            ref={boxRef}
            variants={dropdownAnim}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='absolute mt-2 bg-white border border-gray-200 shadow space-y-1'
            style={{ height: '-100%', right: 0, minWidth: '120px' }}
          >
            <Link
              to={{ pathname: 'https://github.com/kubil6y/sepetim-backend' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              <DropdownItem inner='Backend' />
            </Link>

            <Link
              to={{ pathname: 'https://github.com/kubil6y/sepetim-frontend' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              <DropdownItem inner='Frontend' />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
