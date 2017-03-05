import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongList from './components/song_list';

const client = new ApolloClient({});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory} >
          <Route path="/" component="SongList">
          </Route>
        </Router>
      </ApolloProvider>
      )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
