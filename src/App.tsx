import {
  HomePage,
  LoginPage,
  NotFound,
  ProfilePage,
  RegisterPage,
  RestaurantDetails,
  VerificationPage,
} from './pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Banner, Header, LoggedOutRoute } from './components';
import { useMe } from './hooks';
import { paths } from './constants';
import { isLoggedInVar } from './apollo';
import { useReactiveVar } from '@apollo/client';
import ProtectedRoute from './components/ProtectedRoute';

const commonRoutes = [
  { id: 0, path: paths.home, component: <HomePage />, exact: true },
  { id: 1, path: paths.restaurantDetailPage, component: <RestaurantDetails /> },
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
  {
    id: 201,
    path: paths.profile,
    component: <ProfilePage />,
  },
];

export const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, error } = useMe();

  if (error?.message === 'invalid token') {
    isLoggedInVar(false);
  }

  return (
    <div className='text-gray-800'>
      {!data?.me?.verified && isLoggedIn && (
        <Banner message='Verify Your Account' to={paths.verifyAccount} />
      )}

      <Header />

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
