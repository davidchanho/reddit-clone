import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateProvider } from "./context";
import { daysAgo } from "./helpers";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: offsetLimitPagination(),
      },
    },
    Post: {
      fields: {
        date: {
          read(date, options) {
            return daysAgo(date);
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
