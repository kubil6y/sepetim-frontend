/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRoleEnum {
  Admin = "Admin",
  Client = "Client",
}

export interface CreateUserInput {
  username: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
}

export interface LoginInput {
  credentials: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
