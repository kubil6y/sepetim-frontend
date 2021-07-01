import './index.css';
import { render } from 'react-dom';
import { App } from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.querySelector('#root')
);
