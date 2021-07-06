import React, { FC, useState } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { GET_MY_ORDERS_QUERY } from '../graphql';
import {
  getMyOrdersQuery,
  getMyOrdersQueryVariables,
} from '../__generated__/getMyOrdersQuery';
import { GenericError } from './GenericError';
import { Loader } from './Loader';
import { Pagination } from './Pagination';
import { Badge } from './Badge';
import { isLoggedInVar } from '../apollo';

export const PastOrders: FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const [page, setPage] = useState(1);
  const { data, error, loading } = useQuery<
    getMyOrdersQuery,
    getMyOrdersQueryVariables
  >(GET_MY_ORDERS_QUERY, {
    variables: {
      input: { page },
    },
  });

  if (!isLoggedIn) return null;
  if (loading) return <Loader />;
  if (error) return <GenericError message='Something went wrong' />;
  if (data?.getMyOrders?.results?.length === 0) return null;

  return (
    <div
      className='p-2 text-xs tracking-wide shadow bg-gray-50 border border-gray-500'
      style={{ minHeight: '240px' }}
    >
      <h2 className='mb-2 text-sm text-center underline'>Your Past Orders</h2>

      {data?.getMyOrders?.results?.map((el, idx) => (
        <div
          className='flex items-center justify-center p-1 space-x-8'
          key={idx}
        >
          <img
            className='block w-8 h-8 max-w-full'
            src={el?.restaurant?.logoImg}
            alt='restaurant logo'
          />
          <p className='text-sm'>{el?.restaurant?.name}</p>

          {el.restaurant?.category && (
            <Badge
              categorySlug={el.restaurant?.category?.slug}
              categoryName={el.restaurant?.category?.name}
            />
          )}

          <div>${el.total.toFixed(2)}</div>
        </div>
      ))}

      {data?.getMyOrders?.meta?.totalPages && (
        <Pagination
          currentPage={page}
          totalPages={data.getMyOrders.meta.totalPages}
          setPage={setPage}
        />
      )}
    </div>
  );
};
