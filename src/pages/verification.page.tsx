import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AiFillUnlock } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Logo } from '../components';
import { paths } from '../constants';
import { VERIFY_EMAIL_MUTATION } from '../graphql';
import { useMe } from '../hooks';
import {
  verifyEmailMutation,
  verifyEmailMutationVariables,
} from '../__generated__/verifyEmailMutation';

interface IForm {
  code: string;
}

export const VerificationPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { isValid },
  } = useForm<IForm>({ mode: 'onChange' });
  const { data: userData } = useMe();
  const client = useApolloClient();
  const history = useHistory();

  // for button borders
  const [isFocused, setIsFocused] = useState(false);
  // server side error message states
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  const onCompleted = (data: verifyEmailMutation) => {
    const {
      verifyEmail: { ok, error },
    } = data;

    if (error) {
      setErrorMessage('Invalid Code');
    }

    if (ok) {
      client.writeFragment({
        id: `User:${userData?.me?.id}`,
        fragment: gql`
          fragment MyUser on User {
            verified
          }
        `,
        data: {
          verified: true,
        },
      });

      history.push(paths.home);
    }
  };

  const [verifyEmail, { loading }] = useMutation<
    verifyEmailMutation,
    verifyEmailMutationVariables
  >(VERIFY_EMAIL_MUTATION, {
    onCompleted,
  });

  const onSubmit = () => {
    const code = getValues('code');
    if (code === '' || loading) return;

    verifyEmail({
      variables: {
        input: {
          code,
        },
      },
    });

    setValue('code', '');
  };

  useEffect(() => {
    const main = () => {
      if (userData?.me?.verified) {
        history.push(paths.home);
      }
    };
    main();
  }, [userData, history]);
  return (
    <>
      <Helmet>
        <title>Sepetim | Verification</title>
      </Helmet>
      <div className='flex flex-col items-center mb-24 cst-form-container'>
        <div className='flex items-center py-12 space-x-5'>
          <Logo size='lg' />
          <div className='space-y-3'>
            <p className='text-3xl lg:text-5xl'>Sepetim</p>
            <p className='text-right text-yellow-500 underline lg:text-2xl text:lg'>
              Verification
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

        <div className='w-full mt-6 space-y-3'>
          <h1 className='cst-title'>Account Verification</h1>

          <h3 className='text-xs text-gray-600'>
            Please enter the verification code, you have received in your email.
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex items-center '
          >
            <input
              {...register('code', { required: 'This is required' })}
              type='text'
              placeholder='Enter your code'
              className='cst-input'
              style={{ height: 55, borderRight: 0 }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button
              type='submit'
              className={clsx(
                'flex items-center justify-center bg-red-500 cursor-pointer hover:bg-red-600 cst-transition disabled:bg-gray-200 disabled:cursor border border-l-0 ',
                {
                  'border-gray-200': !isFocused,
                },
                {
                  'border-gray-500': isFocused,
                }
              )}
              style={{ height: 55, width: 55 }}
              onClick={onSubmit}
              disabled={!isValid}
            >
              <AiFillUnlock className='w-5 h-5 text-white ' />
            </button>
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
