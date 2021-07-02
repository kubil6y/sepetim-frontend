import {
  HomePage,
  LoginPage,
  NotFound,
  RegisterPage,
  VerificationPage,
} from './pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Banner, LoggedOutRoute } from './components';
import { useMe } from './hooks';
import { LOCALSTORAGE_TOKEN, paths } from './constants';
import { isLoggedInVar } from './apollo';
import { useReactiveVar } from '@apollo/client';
import ProtectedRoute from './components/ProtectedRoute';

const commonRoutes = [
  { id: 0, path: paths.home, component: <HomePage />, exact: true },
];

const loggedOutRoutes = [
  { id: 100, path: paths.login, component: <LoginPage />, exact: true },
  { id: 101, path: paths.register, component: <RegisterPage /> },
];

const protectedRoutes = [
  {
    id: 200,
    path: paths.verifyAccount,
    component: <VerificationPage />,
    exact: true,
  },
];

export const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, error } = useMe();

  if (error?.message === 'invalid token') {
    isLoggedInVar(false);
  }

  console.log({
    error: error?.message,
    isLoggedIn,
    isVerified: data?.me?.verified,
  });

  return (
    <div className='text-gray-800'>
      {!data?.me?.verified && isLoggedIn && (
        <Banner message='Verify Your Account' to={paths.verifyAccount} />
      )}
      <Switch>
        {commonRoutes.map(({ id, path, component, exact }) => (
          <Route
            key={id}
            path={path}
            component={() => component}
            exact={Boolean(exact)}
          />
        ))}

        {loggedOutRoutes.map(({ id, path, component, exact }) => (
          <LoggedOutRoute
            authenticationPath={paths.home}
            key={id}
            path={path}
            component={() => component}
            exact={Boolean(exact)}
          />
        ))}

        {protectedRoutes.map(({ id, path, component, exact }) => (
          <ProtectedRoute
            isAuthenticated={isLoggedIn}
            authenticationPath={paths.login}
            key={id}
            path={path}
            component={() => component}
            exact={Boolean(exact)}
          />
        ))}
        <Route path='*' component={() => <NotFound />} />
      </Switch>
    </div>
  );
};
