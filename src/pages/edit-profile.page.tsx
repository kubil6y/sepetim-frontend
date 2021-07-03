import { gql, useApolloClient, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { Button } from '../components';
import { paths } from '../constants';
import { EDIT_USER_PROFILE_MUTATION } from '../graphql';
import { useMe } from '../hooks';
import {
  editUserProfileMutation,
  editUserProfileMutationVariables,
} from '../__generated__/editUserProfileMutation';

interface IForm {
  email: string;
  password: string;
  address: string;
  firstName: string;
  lastName: string;
}

export const EditProfilePage = () => {
  const history = useHistory();
  const client = useApolloClient();
  const { data: userData, loading: userDataLoading } = useMe();

  // show password state
  const [type, setType] = useState<'password' | 'text'>('password');

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {
      email: userData?.me?.email || '',
      firstName: userData?.me?.firstName || '',
      lastName: userData?.me?.lastName || '',
      address: userData?.me?.address || '',
    },
  });

  const onCompleted = (data: editUserProfileMutation) => {
    const {
      editUserProfile: { ok, error },
    } = data;

    console.log(error);

    if (ok && userData?.me?.id) {
      const { firstName, lastName, address, email } = getValues();
      client.writeFragment({
        id: `User:${userData.me.id}`,
        fragment: gql`
          fragment VerifiedUser on User {
            firstName
            lastName
            email
            address
            verified
          }
        `,
        data: {
          firstName,
          lastName,
          address,
          email,
          verified:
            getValues('email') !== userData?.me?.email
              ? false
              : userData?.me?.verified,
        },
      });
    }
    history.push(paths.myProfile);
  };

  const [editUserProfile, { loading }] = useMutation<
    editUserProfileMutation,
    editUserProfileMutationVariables
  >(EDIT_USER_PROFILE_MUTATION, { onCompleted });

  if (!userData?.me) {
    return (
      <div className='items-center justify-center w-screen h-screen text-2xl font-bold text-red-500'>
        Something went wrong
      </div>
    );
  }

  if (userDataLoading) {
    return (
      <div className='items-center justify-center w-screen h-screen text-2xl font-bold'>
        Loading...
      </div>
    );
  }

  //{ email, password, address, firstName, lastName }
  const onSubmit = () => {
    if (loading) return;
    const { firstName, lastName, address, password, email } = getValues();
    editUserProfile({
      variables: {
        input: {
          firstName,
          lastName,
          address,
          password,
          email,
        },
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>Sepetim | Edit Profile</title>
      </Helmet>
      <div className='p-2 mt-3 cst-container'>
        <div className='p-5 border border-gray-500 space-y-4'>
          <h1 className='text-2xl font-bold text-red-500 underline'>
            Edit Profile
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-6'>
            {/* FIRST NAME */}
            <div className='cst-input-group'>
              <div className='cst-profile-title'>First Name</div>
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
              <div className='cst-profile-title'>Last Name</div>
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

            {/* EMAIL */}
            <div className='cst-input-group'>
              <div className='cst-profile-title'>Email</div>
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
              <div className='cst-profile-title'>New Password</div>
              <div className='flex items-center justify-between'>
                <input
                  {...register('password', {
                    required: 'Please enter your password',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
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
              <div className='cst-profile-title'>Address</div>
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

            <Button inner='Save' isDisabled={!isValid} isLoading={false} />
          </form>
        </div>
      </div>
    </>
  );
};
