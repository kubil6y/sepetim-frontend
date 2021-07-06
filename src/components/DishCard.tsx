import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  getRestaurantQuery_getRestaurant_restaurant_menu,
  getRestaurantQuery_getRestaurant_restaurant_menu_options,
} from '../__generated__/getRestaurantQuery';
import { OrderButton } from './OrderButton';
import { useMutation, useReactiveVar } from '@apollo/client';
import { CREATE_ORDER_MUTATION } from '../graphql';
import {
  createOrderMutation,
  createOrderMutationVariables,
} from '../__generated__/createOrderMutation';
import { useHistory } from 'react-router-dom';
import { paths } from '../constants';
import { isLoggedInVar } from '../apollo';
import { AiOutlineLogin } from 'react-icons/ai';

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
  restaurantId: number;
}

export const DishCard: FC<IDishProps> = ({
  dish: { id: dishId, name, image, calorie, basePrice, options },
  restaurantId,
}) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  // history
  const history = useHistory();
  // dishOptionId state
  const [dishOptionId, setDishOptionId] = useState<number | undefined>(
    undefined
  );
  const [option, setOption] = useState(initialOption);
  // quantity state;
  const [quantity, setQuantity] = useState(1);

  const onCompleted = (data: createOrderMutation) => {
    const {
      createOrder: { ok },
    } = data;

    if (ok) {
      history.push(paths.home);
    }
  };

  const [createOrder, { loading }] = useMutation<
    createOrderMutation,
    createOrderMutationVariables
  >(CREATE_ORDER_MUTATION, { onCompleted });

  useEffect(() => {
    const main = () => {
      if (options) {
        if (dishOptionId === 0) {
          return setOption(initialOption);
        }
        const target = options.find((option) => option.id === dishOptionId);
        if (target) {
          setOption(target);
        }
      }
    };
    main();
  }, [dishOptionId, options]);

  const totalPrice = (basePrice + option.extra) * quantity;
  const totalCalories = (calorie + option.calorie) * quantity;

  const handleOrder = () => {
    if (loading) return;
    createOrder({
      variables: {
        input: {
          restaurantId,
          items: [
            {
              quantity,
              dishId,
              ...(dishOptionId && { dishOptionId }),
            },
          ],
        },
      },
    });
  };

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
                value={dishOptionId}
                onChange={(e) => setDishOptionId(+e.target.value)}
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
                    <option value={id} key={id}>
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

            <div>
              <p className='block text-sm text-gray-700 sm:hidden'>Quantity</p>
              <select
                className='text-xs tracking-wide lowercase'
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
              >
                {nums.map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isLoggedIn ? (
            <OrderButton inner='order' onClick={handleOrder} />
          ) : (
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => history.push(paths.login)}
              className='bg-gray-800 cursor-pointer px-2 py-1 capitalize hover:bg-gray-700 text-center text-white rounded-full shadow flex items-center justify-center text-xs tracking-wide font-bold space-x-2 cst-transition sm:mt-0 mt-2 focus:outline-none'
            >
              <div className='flex items-center justify-center w-4 h-4 text-black bg-white rounded-full'>
                <AiOutlineLogin className='w-3 h-3' />
              </div>
              <p>Login</p>
            </motion.button>
          )}
        </div>
      </div>
      <div className='w-1/3'>
        <img src={image} alt={`${name}`} />
      </div>
    </div>
  );
};

// TODO push new order into user orders in main page.
