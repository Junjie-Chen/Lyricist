import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Song Lyrics</div>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
