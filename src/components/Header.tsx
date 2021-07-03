import { FC, useRef, useState } from 'react';
import { Logo } from './Logo';
import { FaUserAlt } from 'react-icons/fa';
import { Circle, Search } from '../components';
import { Link, useHistory } from 'react-router-dom';
import { LOCALSTORAGE_TOKEN, paths } from '../constants';
import { useMediaQuery } from '@react-hook/media-query';
import { DropdownItem } from './DropdownItem';
import { AnimatePresence, motion } from 'framer-motion';
import { dropdownAnim } from '../animations';
import { isLoggedInVar } from '../apollo';
import { useReactiveVar } from '@apollo/client';
import { useClickOutside } from '../hooks';
import { AiOutlineLogin } from 'react-icons/ai';

const dropdownLinks = [
  { id: 0, to: paths.myProfile, inner: 'My Profile' },
  { id: 1, to: paths.editProfile, inner: 'Edit Profile' },
];

const dropdownItems = [{ id: 100, inner: 'Logout' }];

export const Header: FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const history = useHistory();
  const smallScreen = useMediaQuery('only screen and (max-width: 400px)');

  // dropdown misc
  const dropdownRef = useRef(null);
  const boxRef = useRef(null);

  const [dropdownShow, setDropdownShow] = useState(false);
  const handleClickOutside = () => setDropdownShow(false);
  useClickOutside(dropdownRef, boxRef, handleClickOutside);

  const handleLogout = () => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
    isLoggedInVar(false);
    history.push(paths.home);
  };

  return (
    <div className='cst-container'>
      <div className='flex items-center justify-between px-3 pt-4 pb-2 md:px-10'>
        <Link to={paths.home} className='mr-2 md:mr-10'>
          <div className='flex items-center space-x-3'>
            <Logo size='sm' />
            <h1 className='hidden select-none md:block cst-title'>Sepetim</h1>
          </div>
        </Link>

        {!smallScreen && <Search />}

        {isLoggedIn ? (
          <div
            ref={dropdownRef}
            className='relative z-10 ml-2 md:ml-10'
            onClick={() => setDropdownShow((st) => !st)}
          >
            <Circle>
              <FaUserAlt />
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
                  {isLoggedIn &&
                    dropdownLinks.map(({ id, to, inner }) => (
                      <Link to={to} key={id}>
                        <DropdownItem inner={inner} />
                      </Link>
                    ))}

                  {dropdownItems.map(({ id, inner }) => (
                    <div onClick={handleLogout} key={id}>
                      <DropdownItem key={id} inner={inner} />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link className='ml-2 md:ml-10' to={paths.login}>
            <Circle>
              <AiOutlineLogin />
            </Circle>
          </Link>
        )}
      </div>

      {smallScreen && <Search />}
    </div>
  );
};
