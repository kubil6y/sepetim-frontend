import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment UserParts on User {
    id
    username
    firstName
    lastName
    address
    email
    verified
    role
  }
`;
