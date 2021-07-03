/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditUserProfileInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: editUserProfileMutation
// ====================================================

export interface editUserProfileMutation_editUserProfile {
  __typename: "EditUserProfileOutput";
  ok: boolean;
  error: string | null;
}

export interface editUserProfileMutation {
  editUserProfile: editUserProfileMutation_editUserProfile;
}

export interface editUserProfileMutationVariables {
  input: EditUserProfileInput;
}
