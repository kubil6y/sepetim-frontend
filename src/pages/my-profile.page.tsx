import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import { paths } from '../constants';
import { useMe } from '../hooks';

export const MyProfilePage = () => {
  const { data: userData, loading: userDataLoading } = useMe();
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

  const {
    email,
    username,
    address,
    lastName,
    verified,
    firstName,
  } = userData.me;

  return (
    <>
      <Helmet>
        <title>Sepetim | My Profile</title>
      </Helmet>
      <div className='p-2 mt-6 cst-container'>
        <div className='p-5 border border-gray-500 space-y-4'>
          <h1 className='underline cst-title'>User Profile</h1>

          <div className='w-full'>
            <h2 className='cst-profile-title'>First Name</h2>
            <h3 className='text-gray-700 capitalize text-md'>{firstName}</h3>
          </div>

          <div className='w-full'>
            <h2 className='cst-profile-title'>Last Name</h2>
            <h3 className='text-gray-700 capitalize text-md'>{lastName}</h3>
          </div>

          <div className='w-full'>
            <h2 className='cst-profile-title'>Username</h2>
            <h3 className='text-gray-700 text-md'>{username}</h3>
          </div>

          <div className='w-full'>
            <h2 className='cst-profile-title'>Verified</h2>
            <h3 className='text-gray-700 capitalize text-md'>
              {String(verified)}
            </h3>
          </div>

          <div className='w-full'>
            <h2 className='cst-profile-title'>Email</h2>
            <h3 className='text-gray-700 text-md'>{email}</h3>
          </div>

          <div className='w-full'>
            <h2 className='cst-profile-title'>Address</h2>
            <h3 className='text-gray-700 text-md'>{address}</h3>
          </div>
        </div>

        <Link to={paths.editProfile} className='w-full mt-4'>
          <Button inner='edit profile' />
        </Link>
      </div>
    </>
  );
};
