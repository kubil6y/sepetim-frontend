import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './fragments';

export const ME_QUERY = gql`
  query meQuery {
    me {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export const search_restaurant_query = gql`
  query searchRestaurantQuery($input: SearchRestaurantInput!) {
    searchRestaurant(input: $input) {
      ok
      error
      restaurants
    }
  }
`;
