import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { typeDefs, resolvers } from "../src/graphql/resolvers";

import { store, persistor } from "./redux/store";

import "./index.css";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com/",
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
  data: {
    cartHidden: true,
    cartItems: []
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
