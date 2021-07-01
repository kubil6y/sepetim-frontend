import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Logo } from '../components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';

interface IForm {
  credentials: string;
  password: string;
}

export const RegisterPage = () => {
  const [type, setType] = useState('password');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <>
      <Helmet>
        <title>Sepetim | Register</title>
      </Helmet>
      <div className='flex flex-col items-center cst-container'>
        <div className='flex items-center py-12 space-x-5'>
          <Logo size='lg' />
          <div className='space-y-3'>
            <p className='lg:text-5xl text-3xl'>Sepetim</p>
            <p className='text-right text-red-500 lg:text-2xl text:lg'>
              Register
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-6'>
          <div className='cst-input-group'>
            <div className='cst-title'>Credentials</div>
            <input
              {...register('credentials', {
                required: 'Please enter your email or username',
              })}
              type='text'
              className='cst-input'
              placeholder='Enter your credentials'
            />
            {errors?.credentials?.message && (
              <p className='cst-error-message'>{errors.credentials.message}</p>
            )}
          </div>
          <div className='cst-input-group'>
            <div className='cst-title'>Password</div>
            <div className='flex items-center justify-between'>
              <input
                {...register('password', {
                  required: 'Please enter your password',
                })}
                type={type}
                className='-mr-16 cst-input'
                placeholder='Enter your password'
              />
              {type === 'password' ? (
                <AiOutlineEye
                  className='w-5 h-5 mr-5 text-gray-600 cursor-pointer'
                  onClick={() => setType('text')}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className='w-5 h-5 mr-5 text-gray-600 cursor-pointer'
                  onClick={() => setType('password')}
                />
              )}
            </div>
            {errors?.password?.message && (
              <p className='cst-error-message'>{errors.password.message}</p>
            )}
          </div>
          <Button inner='Register' isDisabled={!isValid} isLoading={true} />
        </form>
      </div>
    </>
  );
};
