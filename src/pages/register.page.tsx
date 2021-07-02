import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, ErrorMessage, Logo } from '../components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../graphql';
import { paths } from '../constants';
import {
  createUserMutation,
  createUserMutationVariables,
} from '../__generated__/createUserMutation';

interface IForm {
  username: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const history = useHistory();
  // server side error states
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  const onCompleted = (data: createUserMutation) => {
    const {
      createUser: { ok, error },
    } = data;

    if (error) {
      setShowErrorMessage(true);
      setErrorMessage(error);
    }

    if (ok) {
      setErrorMessage('');
      history.push(paths.login);
    }
  };
  const [createUser, { loading }] = useMutation<
    createUserMutation,
    createUserMutationVariables
  >(CREATE_USER_MUTATION, { onCompleted });

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
    const values = getValues();
    createUser({
      variables: {
        input: { ...values },
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>Sepetim | Register</title>
      </Helmet>
      <div className='flex flex-col items-center mb-24 cst-form-container'>
        <div className='flex items-center py-12 space-x-5'>
          <Logo size='lg' />
          <div className='space-y-3'>
            <p className='text-3xl lg:text-5xl'>Sepetim</p>
            <p className='text-right text-yellow-500 underline lg:text-2xl text:lg'>
              Register
            </p>
          </div>
        </div>

        {errorMessage && (
          <div className='w-full my-4'>
            <ErrorMessage
              message={errorMessage}
              show={showErrorMessage}
              setShow={setShowErrorMessage}
            />
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-6'>
          {/* FIRST NAME */}
          <div className='cst-input-group'>
            <div className='cst-title'>First Name*</div>
            <input
              {...register('firstName', {
                required: 'Please enter your first name',
              })}
              type='text'
              className='cst-input'
              placeholder='Enter your first name'
            />
            {errors?.firstName?.message && (
              <p className='cst-error-message'>{errors.firstName.message}</p>
            )}
          </div>

          {/* LAST NAME */}
          <div className='cst-input-group'>
            <div className='cst-title'>Last Name*</div>
            <input
              {...register('lastName', {
                required: 'Please enter your last name',
              })}
              type='text'
              className='cst-input'
              placeholder='Enter your last name'
            />
            {errors?.lastName?.message && (
              <p className='cst-error-message'>{errors.lastName.message}</p>
            )}
          </div>
          {/* USERNAME */}
          <div className='cst-input-group'>
            <div className='cst-title'>Username*</div>
            <input
              {...register('username', {
                required: 'Please enter your username',
              })}
              type='text'
              className='cst-input'
              placeholder='Enter your username'
            />
            {errors?.username?.message && (
              <p className='cst-error-message'>{errors.username.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div className='cst-input-group'>
            <div className='cst-title'>Email*</div>
            <input
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
              type='text'
              className='cst-input'
              placeholder='Enter your email'
            />
            {errors?.email?.message && (
              <p className='cst-error-message'>{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className='cst-input-group'>
            <div className='cst-title'>Password*</div>
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

          {/* ADDRESS */}
          <div className='cst-input-group'>
            <div className='cst-title'>Address*</div>
            <textarea
              {...register('address', {
                required: 'Please enter your address',
              })}
              className='cst-input'
              placeholder='Enter your address'
            />
            {errors?.address?.message && (
              <p className='cst-error-message'>{errors.address.message}</p>
            )}
          </div>

          <Button inner='Register' isDisabled={!isValid} isLoading={false} />
        </form>
        <p className='mt-4 text-sm tracking-wide'>
          Already have an account?{' '}
          <Link to={paths.login} className='cst-link'>
            Login here.
          </Link>
        </p>
      </div>
    </>
  );
};
