/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: loginUserMutation
// ====================================================

export interface loginUserMutation_loginUser {
  __typename: "LoginOutput";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface loginUserMutation {
  loginUser: loginUserMutation_loginUser;
}

export interface loginUserMutationVariables {
  input: LoginInput;
}
