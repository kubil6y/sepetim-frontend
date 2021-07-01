import {
  HomePage,
  LoginPage,
  NotFound,
  RegisterPage,
  VerificationPage,
} from './pages';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Banner, Header, LoggedOutRoute } from './components';
import { useMe } from './hooks';
import { LOCALSTORAGE_TOKEN, paths } from './constants';
import { isLoggedInVar } from './apollo';
import { useReactiveVar } from '@apollo/client';

const commonRoutes = [
  { id: 0, path: paths.home, component: <HomePage />, exact: true },
  {
    id: 1,
    path: paths.verifyAccount,
    component: <VerificationPage />,
  },
];

const loggedOutRoutes = [
  { id: 100, path: paths.login, component: <LoginPage />, exact: true },
  { id: 101, path: paths.register, component: <RegisterPage /> },
];

export const App = () => {
  const history = useHistory();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, error } = useMe();

  // TODO
  console.log(isLoggedIn);

  // Checking for invalid token
  if (error?.message === 'invalid token') {
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
    isLoggedInVar(false);
    history.push(paths.home);
  }

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
            authenticationPath='/'
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
