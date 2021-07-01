import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation createUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      ok
      error
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation loginUserMutation($input: LoginInput!) {
    loginUser(input: $input) {
      ok
      error
      token
    }
  }
`;
