import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/core";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";
import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
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
  },
});

const storage: any = new LocalStorageWrapper(window.localStorage);

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
  }, [persistor]);

  const reload = useCallback(() => {
    window.location.reload();
  }, []);


  return { client, clearCache, reload };
}

export default useClient