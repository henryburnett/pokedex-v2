import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import App from './App';
import rootReducer from './store';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'https://pokeapi.charlesmarttinen.ca/graphql',
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const client = new ApolloClient({
  cache,
  link,
});

render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ApolloProvider>,

  document.getElementById('root')
);
