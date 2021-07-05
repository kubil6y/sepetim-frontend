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

export const VERIFY_EMAIL_MUTATION = gql`
  mutation verifyEmailMutation($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      ok
      error
    }
  }
`;

export const EDIT_USER_PROFILE_MUTATION = gql`
  mutation editUserProfileMutation($input: EditUserProfileInput!) {
    editUserProfile(input: $input) {
      ok
      error
    }
  }
`;

export const CREATE_ORDER_MUTATION = gql`
  mutation createOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      ok
      error
      orderId
    }
  }
`;
