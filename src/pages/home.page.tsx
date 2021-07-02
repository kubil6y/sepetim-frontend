import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <div>Home page</div>
      <Link to='/login'>login</Link>
    </div>
  );
};
