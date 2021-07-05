import React, { FC, useEffect, useState } from 'react';
import {
  getRestaurantQuery_getRestaurant_restaurant_menu,
  getRestaurantQuery_getRestaurant_restaurant_menu_options,
} from '../__generated__/getRestaurantQuery';
import { OrderButton } from './OrderButton';

const nums = [1, 2, 3, 4, 5];

const initialOption: getRestaurantQuery_getRestaurant_restaurant_menu_options = {
  __typename: 'DishOption',
  id: 0,
  extra: 0,
  name: '',
  calorie: 0,
};

interface IDishProps {
  dish: getRestaurantQuery_getRestaurant_restaurant_menu;
}

export const DishCard: FC<IDishProps> = ({
  dish: { name, image, calorie, basePrice, options },
}) => {
  // dishOptionId state
  const [optionId, setOptionId] = useState<number | undefined>(undefined);
  const [option, setOption] = useState(initialOption);

  useEffect(() => {
    const main = () => {
      if (options) {
        if (optionId === 0) {
          return setOption(initialOption);
        }
        const target = options.find((option) => option.id === optionId);
        if (target) {
          setOption(target);
        }
      }
    };
    main();
  }, [optionId]);

  // quantity state;
  const [qty, setQty] = useState(1);

  console.log(option);

  const totalPrice = (basePrice + option.extra) * qty;
  const totalCalories = (calorie + option.calorie) * qty;

  return (
    <div className='flex items-center justify-between p-4 border border-gray-200 hover:border-gray-500 cst-transition'>
      <div className='flex flex-col self-stretch justify-between w-2/3'>
        <p className='text-lg font-semibold'>Some menu item name</p>

        <div>
          {options && options?.length > 0 && (
            <>
              <p className='text-sm text-gray-700'>Options</p>
              <select
                className='w-3/5 text-xs tracking-wide lowercase'
                value={optionId}
                onChange={(e) => setOptionId(+e.target.value)}
              >
                <option
                  className='flex items-center justify-center w-full'
                  value={0}
                >
                  -
                </option>
                {options.map(
                  ({
                    id,
                    name,
                    extra,
                    calorie,
                  }: getRestaurantQuery_getRestaurant_restaurant_menu_options) => (
                    <option value={id}>
                      {name} • +${extra} • +{calorie} Cal
                    </option>
                  )
                )}
              </select>
            </>
          )}
        </div>

        <div className='flex flex-col items-start justify-start w-full sm:items-center sm:justify-between sm:flex-row'>
          <div className='flex flex-col-reverse items-start justify-start w-full sm:justify-between sm:items-center sm:w-3/5 sm:flex-row space-y-3 sm:space-y-0'>
            <p className='mt-3 sm:mt-0'>
              ${totalPrice} • {totalCalories} Cal.
            </p>

            <select
              className='text-xs tracking-wide lowercase'
              value={qty}
              onChange={(e) => setQty(+e.target.value)}
            >
              {nums.map((num) => (
                <option value={num}>{num}</option>
              ))}
            </select>
          </div>

          <OrderButton
            inner='add'
            onClick={() => console.log('order button clicked')}
          />
        </div>
      </div>
      <div className='w-1/3'>
        <img src={image} alt={`${name} image`} className='' />
      </div>
    </div>
  );
};

/*

        {options && options?.length > 0 && (
          <select {...register('options')} {...rest}>
            {options.map((option) => (
              <option key={option.name} value={option.extra}>
                {option.name} {option.extra}
              </option>
            ))}
          </select>
        )}
 */
