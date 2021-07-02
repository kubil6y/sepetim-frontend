/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRoleEnum } from "./globalTypes";

// ====================================================
// GraphQL fragment: UserParts
// ====================================================

export interface UserParts {
  __typename: "User";
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  verified: boolean | null;
  role: UserRoleEnum | null;
}
