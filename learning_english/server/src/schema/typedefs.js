import { gql } from 'apollo-server-express';

const Query = gql`
  type Query {
    User(name: String!): User
    allUsers(name: String): [User!]
  }
`;
const Mutation = `
  type Mutation {
    createUser(input: UserInput): User!
    Login(username: String!, pass: String!): User
  }`;
const User = gql`
  type User {
    _id: String
    name: String!
    username: String!
    pass: String!
    email: String
  }
`;
const UserInput = gql`
  input UserInput {
    name: String!
    username: String!
    pass: String!
    email: String
  }
`;

const typeDefs = [Query, Mutation, UserInput, User];
export default typeDefs;
