import React, { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AiFillUnlock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
import { paths } from '../constants';

export const VerificationPage = () => {
  const [code, setCode] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (code === '') return;
    console.log(code);
  };
  return (
    <>
      <Helmet>
        <title>Sepetim | Verification</title>
      </Helmet>
      <div className='flex flex-col items-center justify-center w-screen h-screen px-2 -mt-16'>
        <div className='flex items-center py-12 space-x-5'>
          <Logo size='lg' />
          <div className='space-y-3'>
            <p className='text-3xl lg:text-5xl'>Sepetim</p>
            <p className='text-right text-yellow-500 underline lg:text-2xl text:lg'>
              Verification
            </p>
          </div>
        </div>

        <div className='w-20 w-full md:max-w-md space-y-3'>
          <h1 className='cst-title'>Account Verification</h1>

          <h3 className='text-xs text-gray-600'>
            Please enter the verification code, you have received in your email.
          </h3>

          <form onSubmit={handleSubmit} className='flex items-center'>
            <input
              type='text'
              placeholder='Enter your code'
              className='cst-input'
              style={{ height: 55, borderRight: 0 }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <div
              className='flex items-center justify-center bg-red-500 cursor-pointer hover:bg-red-600 cst-transition'
              style={{ height: 55, width: 55 }}
              onClick={handleSubmit}
            >
              <AiFillUnlock className='w-5 h-5 text-white ' />
            </div>
          </form>

          <h4 className='text-xs text-gray-600'>
            If you do not have a valid code,
            <Link to={paths.home}>
              {' '}
              <span className='cst-link'>go back.</span>
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
};
