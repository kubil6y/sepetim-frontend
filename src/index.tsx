import './index.css';
import { render } from 'react-dom';
import { App } from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

render(
  <ApolloProvider client={client}>
    <Router>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </ApolloProvider>,
  document.querySelector('#root')
);
