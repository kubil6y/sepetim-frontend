import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage, NotFound, RegisterPage } from './pages';

const commonRoutes = [
  { id: 0, path: '/', component: <h1>home page</h1>, exact: true },
  { id: 1, path: '/login', component: <LoginPage /> },
  { id: 2, path: '/register', component: <RegisterPage /> },
];

export const App = () => {
  return (
    <div>
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
