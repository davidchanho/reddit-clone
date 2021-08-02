import { ApolloProvider } from "@apollo/client";
import React from "react";
import Routing from "./components/routing";
import useClient from "./hooks/client";

function App() {
  const { client } = useClient();

  if (!client) {
    return <h2>Initializing app...</h2>;
  }
  
  return (
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  );
}

export default App;
