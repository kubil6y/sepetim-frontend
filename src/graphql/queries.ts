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

export const SEARCH_RESTAURANT_QUERY = gql`
  query searchRestaurantQuery($input: SearchRestaurantInput!) {
    searchRestaurant(input: $input) {
      ok
      error
      restaurants {
        id
        name
        slug
        logoImg
        district

        category {
          name
        }

        restaurantRating {
          service
          speed
          taste
        }
      }
    }
  }
`;
