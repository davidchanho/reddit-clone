import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/core";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { CachePersistor, LocalForageWrapper } from "apollo3-cache-persist";
import localforage from "localforage";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { daysAgo } from "../../helpers";

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
        title: {
          read(title, options) {
            return _.capitalize(title);
          },
        },
      },
    },
    Subreddit: {
      fields: {
        name: {
          read(name, options) {
            return _.capitalize(name);
          },
        },
      },
    },
    User: {
      fields: {
        name: {
          read(name, options) {
            return _.capitalize(name);
          },
        },
      },
    },
  },
});

const storage: any = new LocalForageWrapper(localforage);

let newPersistor = new CachePersistor({
  cache,
  storage,
  debug: true,
  trigger: "write",
});

function useClient() {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [persistor, setPersistor] =
    useState<CachePersistor<NormalizedCacheObject>>();

  useEffect(() => {
    async function init() {
      await newPersistor.restore();
      setPersistor(newPersistor);
      setClient(
        new ApolloClient({
          uri: "http://localhost:4000/graphql",
          cache,
        })
      );
    }

    init().catch(console.error);
  }, []);

  const clearCache = useCallback(() => {
    if (!persistor) {
      return;
    }
    persistor.purge();
    window.location.reload();
  }, [persistor]);

  return { client, clearCache };
}

export default useClient;
