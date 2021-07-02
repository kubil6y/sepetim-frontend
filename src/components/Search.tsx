import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Backdrop } from '../components';
import { useDebounce } from 'use-debounce/lib';
import { SEARCH_RESTAURANT_QUERY } from '../graphql';
import {
  searchRestaurantQuery,
  searchRestaurantQueryVariables,
} from '../__generated__/searchRestaurantQuery';

export const Search: FC = () => {
  // search input states
  const [term, setTerm] = useState('');
  const [query] = useDebounce(term, 300);

  // backdrop state
  const [showBackdrop, setShowBackdrop] = useState(false);

  const [callQuery, { data, loading }] = useLazyQuery<
    searchRestaurantQuery,
    searchRestaurantQueryVariables
  >(SEARCH_RESTAURANT_QUERY);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
  };

  useEffect(() => {
    callQuery({
      variables: {
        input: {
          query,
        },
      },
    });
  }, [query]);

  //TODO
  console.log(data?.searchRestaurant?.restaurants);

  return (
    <>
      <Backdrop isOpen={showBackdrop} />
      <form className='flex-1 bg-white sm:block' onSubmit={handleSubmit}>
        <input
          type='text'
          className='p-2 px-3 text-xs cst-input sm:text-sm z-20 relative'
          placeholder='Look for restaurants..'
          autoComplete='off'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onFocus={() => setShowBackdrop(true)}
          onBlur={() => setShowBackdrop(false)}
        />
      </form>
    </>
  );
};
