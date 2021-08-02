import { gql } from "apollo-server-express";

export const typeDefs = gql`
  extend type Query {
    notifications: [Notification]
    notification(_id: ID!): Notification
  }

  type Notification {
    _id: ID!
    text: String
  }

  input NotificationInput {
    text: String
  }

  type Mutation {
    addNotification(item: NotificationInput): Notification
    removeNotification(_id: ID!): Notification
    updateNotification(_id: ID!, item: NotificationInput): Notification
  }

  extend type User {
    notifications: [Notification]
  }
`;
