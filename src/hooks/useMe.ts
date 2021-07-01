import { useQuery } from '@apollo/client';
import { ME_QUERY } from '../graphql';
import { meQuery } from '../__generated__/meQuery';

export const useMe = () => {
  return useQuery<meQuery>(ME_QUERY);
};
