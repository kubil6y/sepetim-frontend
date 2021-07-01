import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Logo } from '../components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@apollo/client';
import { LOGIN_USER_MUTATION } from '../graphql';
import { LOCALSTORAGE_TOKEN, paths } from '../constants';
import { isLoggedInVar, tokenVar } from '../apollo';
import { Link, useHistory } from 'react-router-dom';
import {
  loginUserMutation,
  loginUserMutationVariables,
} from '../__generated__/loginUserMutation';

interface IForm {
  credentials: string;
  password: string;
}

export const LoginPage = () => {
  const history = useHistory();
  const onCompleted = (data: loginUserMutation) => {
    const {
      loginUser: { ok, token },
    } = data;
    if (ok && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      tokenVar(token);
      isLoggedInVar(true);
      history.push(paths.home);
    }
  };

  const [loginUser, { data: loginUserMutationResult, loading }] = useMutation<
    loginUserMutation,
    loginUserMutationVariables
  >(LOGIN_USER_MUTATION, {
    onCompleted,
  });

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
    if (loading) return;
    const { credentials, password } = getValues();
    loginUser({
      variables: {
        input: {
          password,
          credentials,
        },
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>Sepetim | Login</title>
      </Helmet>
      <div className='flex flex-col items-center cst-form-container mb-24 '>
        <div className='flex items-center py-12 space-x-5'>
          <Logo size='lg' />
          <div className='space-y-3'>
            <p className='text-3xl lg:text-5xl'>Sepetim</p>
            <p className='text-right text-yellow-500 underline lg:text-2xl text:lg'>
              Login
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
          <Button inner='login' isDisabled={!isValid} isLoading={loading} />
        </form>
        <p className='mt-4 text-sm tracking-wide'>
          Do not have any accounts?{' '}
          <Link to={paths.register} className='cst-link'>
            Register here.
          </Link>
        </p>
      </div>
    </>
  );
};
