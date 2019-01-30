import { gql } from 'apollo-server-express';

const Query = gql`
   type Query {
    allCars: [Car!]!
  }
`;

const Mutation = gql`
   type Mutation {
    createCar(name: String!): Car!
  }
`;

const Car = gql`
   type Car {
    _id: String!
    name: String
  }
`;

const typeDefs = [Query, Mutation, Car];

export default typeDefs;
