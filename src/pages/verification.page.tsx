import { gql, useApolloClient, useMutation } from '@apollo/client';
import React, { FormEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
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

export const VerificationPage = () => {
  const history = useHistory();
  const { data: userData } = useMe();
  const client = useApolloClient();
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(true);
  const [code, setCode] = useState('');

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (code === '' || loading) return;

    verifyEmail({
      variables: {
        input: {
          code,
        },
      },
    });

    setCode('');
  };

  useEffect(() => {
    const main = () => {
      if (userData?.me?.verified) {
        history.push(paths.home);
      }
    };
    main();
  }, [userData]);
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

          <form onSubmit={handleSubmit} className='flex items-center'>
            <input
              type='text'
              placeholder='Enter your code'
              className='cst-input'
              style={{ height: 55, borderRight: 0 }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              type='submit'
              className='flex items-center justify-center bg-red-500 cursor-pointer hover:bg-red-600 cst-transition'
              style={{ height: 55, width: 55 }}
              onClick={handleSubmit}
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
