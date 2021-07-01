import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, LoginPage, NotFound, RegisterPage } from './pages';

const commonRoutes = [
  { id: 0, path: '/', component: <HomePage />, exact: true },
  { id: 1, path: '/login', component: <LoginPage /> },
  { id: 2, path: '/register', component: <RegisterPage /> },
];

export const App = () => {
  return (
    <div className='text-gray-800'>
      <Switch>
        {commonRoutes.map(({ id, path, component, exact }) => (
          <Route
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
