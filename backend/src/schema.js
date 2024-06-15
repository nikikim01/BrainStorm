import { gql } from "apollo-server-express";
// Define Schema
const typeDefs = gql`
  #graphql
  type Photo {
    id: ID!
    url: String!
    caption: String
    generatedCaption: String
  }

  type Query {
    photos: [Photo]
    photo(id: ID!): Photo
  }

  type Mutation {
    addPhoto(url: String!, caption: String!): Photo
    updatePhoto(
      id: ID!
      url: String
      caption: String
      generatedCaption: String
    ): Photo
    deletePhoto(id: ID!): Photo
  }
`;
export default typeDefs;
