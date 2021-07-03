import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Backdrop, SearchItem } from '../components';
import { useDebounce } from 'use-debounce/lib';
import { SEARCH_RESTAURANT_QUERY } from '../graphql';
import {
  searchRestaurantQuery,
  searchRestaurantQueryVariables,
} from '../__generated__/searchRestaurantQuery';
import { useLocation } from 'react-router-dom';
import { useClickOutside } from '../hooks';

export const Search: FC = () => {
  // for dropbox click outside toggle)
  const dropboxRef = useRef(null);
  const inputRef = useRef(null);
  const [showSearchItems, setShowSearchItems] = useState(true);
  // when page changes, we will setTerm('') and close dropbox
  const { key } = useLocation();

  // search input states
  const [term, setTerm] = useState('');
  const [query] = useDebounce(term, 250);

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

  const handleClickOutside = () => setShowSearchItems(false);
  useClickOutside(dropboxRef, inputRef, handleClickOutside);

  useEffect(() => {
    const main = () => {
      if (loading) return;
      setShowSearchItems(true);
      callQuery({
        variables: {
          input: {
            query,
          },
        },
      });
    };
    main();
  }, [query, callQuery, loading]);

  useEffect(() => {
    setShowSearchItems(false);
    setTerm('');
  }, [key]);

  return (
    <>
      <Backdrop isOpen={showBackdrop} />
      <form
        className='relative flex-1 bg-white sm:block'
        onSubmit={handleSubmit}
      >
        <div className='relative z-20 w-full'>
          <input
            ref={inputRef}
            type='text'
            className='w-full p-2 px-3 text-xs cst-input sm:text-sm'
            placeholder='Look for restaurants..'
            autoComplete='off'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onFocus={() => {
              setShowSearchItems(true);
              setShowBackdrop(true);
            }}
            onBlur={() => setShowBackdrop(false)}
          />

          <div
            className='absolute z-20 w-full bg-white shadow'
            style={{ height: '-100%' }}
            ref={dropboxRef}
          >
            {data?.searchRestaurant?.restaurants &&
              showSearchItems &&
              data?.searchRestaurant?.restaurants.map(
                ({
                  id,
                  name,
                  logoImg,
                  category,
                  restaurantRating,
                  district,
                  slug,
                }) => (
                  <SearchItem
                    key={id}
                    name={name}
                    slug={slug}
                    district={district}
                    logoImg={logoImg}
                    categoryName={category!.name}
                    categorySlug={category!.slug}
                    tasteRating={restaurantRating.taste!}
                    setShowBackdrop={setShowBackdrop}
                  />
                )
              )}
          </div>
        </div>
      </form>
    </>
  );
};
