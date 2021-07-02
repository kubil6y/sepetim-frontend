/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VerifyEmailInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: verifyEmailMutation
// ====================================================

export interface verifyEmailMutation_verifyEmail {
  __typename: "VerifyEmailOutput";
  ok: boolean;
  error: string | null;
}

export interface verifyEmailMutation {
  verifyEmail: verifyEmailMutation_verifyEmail;
}

export interface verifyEmailMutationVariables {
  input: VerifyEmailInput;
}
