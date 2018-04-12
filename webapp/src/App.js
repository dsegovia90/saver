import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

const client = new ApolloClient({
  uri: '/api',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div className="App">
          <Dashboard />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
