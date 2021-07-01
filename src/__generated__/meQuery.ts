/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRoleEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me {
  __typename: "User";
  username: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  verified: boolean | null;
  role: UserRoleEnum | null;
}

export interface meQuery {
  me: meQuery_me;
}
