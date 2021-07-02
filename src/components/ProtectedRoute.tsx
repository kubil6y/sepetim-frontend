//https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4

import { Redirect, Route, RouteProps } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
}
